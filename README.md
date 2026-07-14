# APK Node Map Viewer (V1)

Upload an Android `.apk`, run a controlled exploration in an emulator, and view reachable screens as an interactive node graph.

**Flow:** APK → emulator exploration → screenshots → nodes/edges → React Flow graph viewer.

## Daily startup (every session)

You need **4 terminals**. Appium and the worker **must** see `ANDROID_HOME` — use a fresh terminal after editing `~/.zshrc`, or run `source ~/.zshrc` first.

**Prereq once:** `~/.zshrc` contains:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$ANDROID_HOME/cmdline-tools/latest/bin
```

Also: Docker Postgres running (`docker start design-reviewer-db`), and an AVD already created in Android Studio.

| # | Terminal | Commands |
|---|----------|----------|
| 1 | Emulator | `source ~/.zshrc` → `emulator -list-avds` → `emulator -avd <name>` → wait until `adb devices` shows `device` |
| 2 | Appium | `source ~/.zshrc` → `cd` to repo → `npm run appium` (listens on `http://127.0.0.1:4723`) |
| 3 | Worker | `source ~/.zshrc` → `cd` to repo → `npm run worker:apk` |
| 4 | Web | `cd` to repo → `npm run dev` → open http://localhost:3000 |

**Quick sanity checks before starting an exploration:**

```bash
echo $ANDROID_HOME          # /Users/<you>/Library/Android/sdk
adb devices                 # emulator-XXXX  device
curl -s http://127.0.0.1:4723/status   # Appium JSON status
```

Then in the UI: project → upload APK (if needed) → **Start exploration**. Failed runs do not retry — start a new one.

**Stop:** `Ctrl+C` in Appium / worker / web terminals; quit the emulator window (or `adb emu kill`).

## Stack

- [T3 Stack](https://create.t3.gg/) — Next.js 15 (App Router), TypeScript, Tailwind, tRPC, Prisma, PostgreSQL
- [@xyflow/react](https://reactflow.dev/) — node graph viewer
- [Appium](https://appium.io/) + UiAutomator2 — Android automation (separate worker process)
- Local filesystem storage for APKs and screenshots

## Prerequisites

### Always required

- **Node.js** 20+
- **PostgreSQL** running locally (or a remote `DATABASE_URL`)
- Copy `.env.example` → `.env` and fill in `DATABASE_URL`

### Android automation (worker only)

These are needed on the machine that runs the worker — **not** on colleagues' laptops if you deploy the web app and worker to a shared server (see [Deployment](#deployment) below).

1. **JDK 17**

   ```bash
   brew install --cask temurin@17
   export JAVA_HOME=$(/usr/libexec/java_home -v 17)
   ```

2. **Android SDK** (Android Studio is the easiest path)

   ```bash
   brew install --cask android-studio
   ```

   Install via SDK Manager: **Platform-Tools**, **Emulator**, a **SDK Platform** (e.g. API 34), and a **system image** (prefer `arm64-v8a` on Apple Silicon).

   Add to `~/.zshrc`:

   ```bash
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator
   ```

3. **Android emulator (AVD)**

   Create and boot one via Android Studio Device Manager, or:

   ```bash
   emulator -avd <your_avd_name>
   adb devices   # should list the emulator
   ```

4. **Appium + UiAutomator2 driver** (installed with this repo)

   ```bash
   npm install
   npx appium driver install uiautomator2   # first time only
   npx appium driver doctor uiautomator2    # sanity check
   ```

## Local setup

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# Edit DATABASE_URL, optionally ARTIFACTS_DIR and APPIUM_URL

# 3. Apply database schema
npm run db:push          # or: npm run db:generate  (creates a migration)

# 4. Start the web app
npm run dev              # http://localhost:3000

# 5. Start Android emulator (separate terminal)
emulator -avd <your_avd_name>

# 6. Start Appium server (separate terminal)
npm run appium           # listens on http://127.0.0.1:4723

# 7. Start the exploration worker (separate terminal)
npm run worker:apk
```

## Usage

1. Open [http://localhost:3000](http://localhost:3000) → redirects to **Projects**.
2. Create a project.
3. Upload an `.apk` build.
4. Click **Start exploration** (optionally tune max depth / nodes / taps per screen).
5. Open the run page — status polls automatically while the worker runs.
6. When screens are captured, the React Flow graph appears. Click a node to inspect its screenshot, metadata, and UI tree summary.

## Architecture

```
Browser ──tRPC/upload──► Next.js app ──Prisma──► PostgreSQL
                              │
                              └── writes APKs/screenshots ──► artifacts/
Worker (worker:apk) ──polls queued runs──► PostgreSQL
       └── webdriverio ──► Appium ──► Android emulator
```

The worker runs **outside** the web request lifecycle. The web app only enqueues a `ReviewRun`; the worker picks it up, drives the emulator, and writes nodes/edges back to the database.

## Artifact storage

```
artifacts/
  apks/<apkBuildId>/<filename>.apk
  runs/<reviewRunId>/screenshots/node-001.png
  runs/<reviewRunId>/ui/node-001.json
```

Screenshots are served through `/api/artifacts/...`.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Next.js dev server |
| `npm run worker:apk` | Poll and process queued review runs |
| `npm run appium` | Start Appium server |
| `npm run db:push` | Push Prisma schema to DB |
| `npm run db:generate` | Create + apply a migration |
| `npm run db:studio` | Prisma Studio |
| `npm run check` | Lint + typecheck |

## Deployment

For colleagues to use the web app **without** installing Android tooling locally:

- Deploy the **Next.js app** + **PostgreSQL** to your hosting (Vercel/Railway/Fly/etc.).
- Run the **worker + Appium + emulator** on a dedicated Linux VM or bare-metal host with KVM nested virtualization enabled.
- Point `APPIUM_URL` on the worker at its local Appium instance; share the same `DATABASE_URL` and `ARTIFACTS_DIR` (or object storage in a future version).

V1 uses local filesystem artifacts — for multi-host deployment you'll want a shared volume or S3-compatible storage (not implemented yet).

## Known limitations (V1)

- **Android APK only** — no iOS / IPA
- **Single APK** — no `.aab` or split APKs
- **Exact screenshot hash only** — near-duplicate screens create separate nodes (perceptual hashing planned)
- **No Figma comparison** or AI review
- **No login / locale automation**
- **Shallow, conservative crawl** — skips risky taps (delete, pay, logout, etc.)
- **May not work** with apps that block emulators or detect automation
- **Limited WebView introspection** — native UiAutomator hierarchy only
- **Emulator must be running** before the worker starts a run (V1 does not boot AVDs automatically)

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `Neither ANDROID_HOME nor ANDROID_SDK_ROOT` | `source ~/.zshrc`, then **restart Appium and the worker** in that shell |
| Worker stuck on "Preparing emulator" / "Queued" forever | Emulator booted (`adb devices`), Appium up (`npm run appium`), worker running (`npm run worker:apk`) |
| "Package name unknown" | Re-upload the APK; metadata parsing failed |
| "APK file missing" | Check `artifacts/apks/...` exists and `ARTIFACTS_DIR` matches between web + worker |
| Install failed | Confirm APK architecture matches emulator (arm64 vs x86) |
| Run failed immediately | Run `npx appium driver doctor uiautomator2` |
