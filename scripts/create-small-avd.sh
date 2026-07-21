#!/usr/bin/env bash
# Create the "Small_Phone" AVD used by the smaller-screen device profile
# (see src/lib/devices.ts). Reuses an already-installed system image when
# possible, or installs one via sdkmanager.
#
# Usage (from repo root):
#   ./scripts/create-small-avd.sh
#   SYS_IMAGE="system-images;android-34;google_apis;arm64-v8a" ./scripts/create-small-avd.sh
#
# Requires the Android SDK cmdline-tools (avdmanager, sdkmanager) on PATH.

set -euo pipefail

AVD_NAME="${AVD_NAME:-Small_Phone}"
DEVICE_ID="${DEVICE_ID:-small_phone}"

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

if ! command -v avdmanager >/dev/null 2>&1; then
  echo "avdmanager not found. Install the Android SDK cmdline-tools and retry."
  exit 1
fi

# Pick a system image: explicit SYS_IMAGE wins, else reuse the newest one that
# is already installed under $ANDROID_HOME/system-images.
if [[ -z "${SYS_IMAGE:-}" ]]; then
  images_root="$ANDROID_HOME/system-images"
  if [[ -d "$images_root" ]]; then
    # Build sdkmanager-style ids from the directory layout and take the last
    # (typically the newest api level / abi).
    SYS_IMAGE="$(
      find "$images_root" -maxdepth 3 -mindepth 3 -type d 2>/dev/null \
        | sed "s#^$images_root/##; s#/#;#g; s#^#system-images;#" \
        | sort \
        | tail -n 1
    )"
  fi
fi

if [[ -z "${SYS_IMAGE:-}" ]]; then
  echo "No installed system image found and SYS_IMAGE not set."
  echo "Install one, e.g.:"
  echo "  sdkmanager \"system-images;android-34;google_apis;arm64-v8a\""
  echo "then re-run, or pass SYS_IMAGE=... explicitly."
  exit 1
fi

echo "Using system image: $SYS_IMAGE"

# Ensure the image is installed (no-op if it already is).
if command -v sdkmanager >/dev/null 2>&1; then
  yes | sdkmanager "$SYS_IMAGE" >/dev/null 2>&1 || true
fi

echo "Creating AVD '$AVD_NAME' from device template '$DEVICE_ID' ..."
echo "no" | avdmanager create avd \
  -n "$AVD_NAME" \
  -d "$DEVICE_ID" \
  -k "$SYS_IMAGE" \
  --force

echo "Done. Boot it with: DEVICE=small_phone ./start-worker.sh"
