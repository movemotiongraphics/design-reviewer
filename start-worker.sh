#!/usr/bin/env bash
# Start Appium + the APK exploration worker for one device profile.
# Boots the device's AVD (on a fixed port) if it is not already online, then
# starts a dedicated Appium server and a worker pinned to that device.
# Leaves the emulator running on exit.
# Run the web app yourself in another terminal: npm run dev
#
# Usage (from repo root):
#   ./start-worker.sh                        # defaults to DEVICE=pixel_7
#   DEVICE=small_phone ./start-worker.sh     # boot the smaller-screen profile
#
# Run two emulators in parallel by launching this in two terminals with a
# different DEVICE each. Profiles are defined in src/lib/devices.ts.
#
# Stop with Ctrl+C (kills Appium + worker; emulator stays up).

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

# Load Android SDK env the same way a fresh terminal would after setup.
if [[ -z "${ANDROID_HOME:-}" && -z "${ANDROID_SDK_ROOT:-}" ]]; then
  if [[ -f "$HOME/.zshrc" ]]; then
    # shellcheck disable=SC1091
    source "$HOME/.zshrc" >/dev/null 2>&1 || true
  fi
fi

if [[ -z "${ANDROID_HOME:-}" && -z "${ANDROID_SDK_ROOT:-}" ]]; then
  if [[ -d "$HOME/Library/Android/sdk" ]]; then
    export ANDROID_HOME="$HOME/Library/Android/sdk"
  else
    echo "ANDROID_HOME is not set. Add it to ~/.zshrc (see README) and retry."
    exit 1
  fi
fi

export ANDROID_HOME="${ANDROID_HOME:-$ANDROID_SDK_ROOT}"
export PATH="$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$ANDROID_HOME/cmdline-tools/latest/bin"

# ---------------------------------------------------------------------------
# Device profile (keep in sync with src/lib/devices.ts).
# ---------------------------------------------------------------------------
DEVICE="${DEVICE:-pixel_7}"
case "$DEVICE" in
  pixel_7)
    DEFAULT_AVD="Pixel_7"
    EMU_PORT=5554
    APPIUM_PORT=4723
    ;;
  small_phone)
    DEFAULT_AVD="Small_Phone"
    EMU_PORT=5556
    APPIUM_PORT=4724
    ;;
  *)
    echo "Unknown DEVICE '$DEVICE'. Use one of: pixel_7, small_phone."
    exit 1
    ;;
esac

# ANDROID_AVD overrides the profile's default AVD name if set.
AVD_NAME="${ANDROID_AVD:-$DEFAULT_AVD}"
SERIAL="emulator-$EMU_PORT"
APPIUM_URL="${APPIUM_URL:-http://127.0.0.1:$APPIUM_PORT}"
DB_CONTAINER="${DB_CONTAINER:-design-reviewer-db}"
APPIUM_PID=""
EMULATOR_PID=""

# Is this specific device's emulator online (by serial)?
device_ready() {
  adb devices 2>/dev/null \
    | awk -v s="$SERIAL" 'NR>1 && $1==s && $2=="device" { found=1 } END { exit !found }'
}

boot_completed() {
  [[ "$(adb -s "$SERIAL" shell getprop sys.boot_completed 2>/dev/null | tr -d '\r')" == "1" ]]
}

db_ready() {
  if command -v nc >/dev/null 2>&1; then
    nc -z localhost 5432 >/dev/null 2>&1
  else
    (echo >/dev/tcp/localhost/5432) >/dev/null 2>&1
  fi
}

ensure_database() {
  if db_ready; then
    echo "Postgres already listening on localhost:5432."
    return 0
  fi

  if ! command -v docker >/dev/null 2>&1; then
    echo "Postgres is not reachable on localhost:5432 and docker is not installed."
    echo "Start your database, then re-run this script."
    exit 1
  fi

  if ! docker info >/dev/null 2>&1; then
    echo "Docker is not running — trying to open Docker Desktop..."
    open -a Docker >/dev/null 2>&1 || true
    for _ in $(seq 1 60); do
      if docker info >/dev/null 2>&1; then
        break
      fi
      sleep 2
    done
  fi

  if ! docker info >/dev/null 2>&1; then
    echo "Docker daemon is not running. Start Docker Desktop, then re-run."
    exit 1
  fi

  if docker ps -a --format '{{.Names}}' | grep -qx "$DB_CONTAINER"; then
    echo "Starting database container $DB_CONTAINER ..."
    docker start "$DB_CONTAINER" >/dev/null
  elif [[ -x "./start-database.sh" ]]; then
    echo "No $DB_CONTAINER container — running ./start-database.sh ..."
    ./start-database.sh
  else
    echo "No Postgres container named $DB_CONTAINER. Run ./start-database.sh first."
    exit 1
  fi

  for _ in $(seq 1 30); do
    if db_ready; then
      echo "Postgres is ready."
      return 0
    fi
    sleep 1
  done

  echo "Timed out waiting for Postgres on localhost:5432."
  exit 1
}

cleanup() {
  echo ""
  echo "Stopping Appium / worker..."
  if [[ -n "$APPIUM_PID" ]] && kill -0 "$APPIUM_PID" 2>/dev/null; then
    kill "$APPIUM_PID" 2>/dev/null || true
    wait "$APPIUM_PID" 2>/dev/null || true
  fi
  if [[ -n "$EMULATOR_PID" ]]; then
    echo "Emulator left running (quit the window or: adb emu kill)."
  fi
}
trap cleanup EXIT INT TERM

ensure_database

if ! command -v adb >/dev/null 2>&1; then
  echo "adb not found on PATH. Is ANDROID_HOME set correctly?"
  exit 1
fi

if ! command -v emulator >/dev/null 2>&1; then
  echo "emulator not found on PATH. Is ANDROID_HOME set correctly?"
  exit 1
fi

if device_ready; then
  echo "Device $SERIAL ($DEVICE) already ready."
else
  if ! emulator -list-avds 2>/dev/null | grep -qx "$AVD_NAME"; then
    echo "AVD '$AVD_NAME' not found for device '$DEVICE'."
    if [[ "$DEVICE" == "small_phone" ]]; then
      echo "Create it with: ./scripts/create-small-avd.sh"
    else
      echo "Create it in Android Studio Device Manager, then retry."
    fi
    exit 1
  fi

  echo "No $SERIAL online — starting emulator -avd $AVD_NAME -port $EMU_PORT ..."
  emulator -avd "$AVD_NAME" -port "$EMU_PORT" -netdelay none -netspeed full >/dev/null 2>&1 &
  EMULATOR_PID=$!

  for _ in $(seq 1 120); do
    if device_ready && boot_completed; then
      break
    fi
    if ! kill -0 "$EMULATOR_PID" 2>/dev/null; then
      echo "Emulator exited before becoming ready."
      exit 1
    fi
    sleep 2
  done

  if ! device_ready || ! boot_completed; then
    echo "Timed out waiting for emulator boot."
    adb devices || true
    exit 1
  fi
  echo "Emulator $SERIAL ($DEVICE) is ready."
fi

if curl -sf "$APPIUM_URL/status" >/dev/null 2>&1; then
  echo "Appium already running at $APPIUM_URL — reusing it."
else
  echo "Starting Appium at $APPIUM_URL ..."
  npm run appium -- -p "$APPIUM_PORT" &
  APPIUM_PID=$!

  for _ in $(seq 1 60); do
    if curl -sf "$APPIUM_URL/status" >/dev/null 2>&1; then
      break
    fi
    if ! kill -0 "$APPIUM_PID" 2>/dev/null; then
      echo "Appium exited before becoming ready."
      exit 1
    fi
    sleep 1
  done

  if ! curl -sf "$APPIUM_URL/status" >/dev/null 2>&1; then
    echo "Timed out waiting for Appium at $APPIUM_URL"
    exit 1
  fi
  echo "Appium is up."
fi

echo "Starting worker for device '$DEVICE' ($SERIAL) — Ctrl+C to stop..."
echo "In another terminal: npm run dev → http://localhost:3000"
WORKER_DEVICE_ID="$DEVICE" APPIUM_URL="$APPIUM_URL" npm run worker:apk
