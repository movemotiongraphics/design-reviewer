# APK UI Review Tool (V2)

Upload an Android `.apk`, capture the root screen on an emulator, then manually explore the app by clicking hotspots on screenshots. Review and comment on each screen in a React Flow graph.

**Flow:** APK → root screenshot → hotspot tap → emulator action → new node/edge → comments & review.

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

**Quick sanity checks before starting a review:**

```bash
echo $ANDROID_HOME          # /Users/<you>/Library/Android/sdk
adb devices                 # emulator-XXXX  device
curl -s http://127.0.0.1:4723/status   # Appium JSON status
```

Then in the UI: project → upload APK (if needed) → **Start UI review**. The worker captures the root screen and the run enters **Awaiting input**. Open the root node, enable hotspots, and click a safe hotspot to explore.

**End session:** use **End session** on the run page (or stop the worker). Failed runs do not retry — start a new one.

**Stop:** `Ctrl+C` in Appium / worker / web terminals; quit the emulator window (or `adb emu kill`).

## Multiple devices (small-screen edge cases)

Each review run is pinned to a **device profile** defined in [`src/lib/devices.ts`](src/lib/devices.ts). Two profiles ship by default:

| Profile id | AVD name | Emulator port / serial | Appium port |
|------------|----------|------------------------|-------------|
| `pixel_7` (default) | `Pixel_7` | 5554 / `emulator-5554` | 4723 |
| `small_phone` | `Small_Phone` | 5556 / `emulator-5556` | 4724 |

Pick the device in the UI on the project page before **Start UI review**. A worker only runs jobs for the device it was started for, so you can run **both emulators in parallel** — one worker per device.

**One-time:** create the smaller AVD (reuses an installed system image, or set `SYS_IMAGE`):

```bash
./scripts/create-small-avd.sh
```

**Run both devices** (each command boots its AVD on a fixed port, starts a dedicated Appium server, and a worker pinned to that device):

```bash
# terminal A
DEVICE=pixel_7 ./start-worker.sh
# terminal B
DEVICE=small_phone ./start-worker.sh
# terminal C
npm run dev   # http://localhost:3000
```

To add another device, add an entry to `DEVICE_PROFILES` in `src/lib/devices.ts` (unique `emulatorPort`, `appiumPort`, `systemPort`), create a matching AVD, and add a `case` to the profile block in `start-worker.sh`.

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

## Usage (V2 manual review)

1. Open [http://localhost:3000](http://localhost:3000) → redirects to **Projects**.
2. Create a project and upload an `.apk` build.
3. Click **Start UI review**.
4. Open the run page — status polls until **Awaiting input** and the root node appears.
5. Click the root node → toggle **Hotspots** → click a safe hotspot.
6. The worker taps the emulator, captures the next screen, and adds a node + edge.
7. Rename nodes, set flow/type, add comments with issue tags, search/filter, drag to organise, copy PNG.

### Session controls

- **Back** — press Android back and capture the resulting screen
- **Resume here** — replay the path from root to the selected node
- **Reset to root** — relaunch the app and return to the root screen
- **End session** — mark the run completed and release the Appium session

## Architecture

```
Browser ──tRPC/upload──► Next.js app ──Prisma──► PostgreSQL
                              │
                              └── writes APKs/screenshots ──► artifacts/
Worker (worker:apk) ──polls queued runs + ExplorationAction──► PostgreSQL
       └── webdriverio ──► Appium ──► Android emulator
```

The worker runs **outside** the web request lifecycle. The web app enqueues a `ReviewRun`; the worker installs the APK, captures the root screen, then keeps an Appium session open while status is `awaiting_input`. Hotspot taps create `ExplorationAction` rows that the worker executes.

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
| `npm run worker:apk` | Poll and process queued review runs (interactive session) |
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

V2 uses local filesystem artifacts — for multi-host deployment you'll want a shared volume or S3-compatible storage (not implemented yet).

## Known limitations (V2)

- **Manual exploration depends on emulator session state.** If the session is lost, path replay may fail — restart the run.
- **Exact screenshot hashing can be brittle** — near-duplicate screens may create separate nodes (perceptual hashing planned).
- **Hotspots depend on accessibility / UI hierarchy quality.** Some screens expose few or overlapping clickables.
- **WebViews may expose limited elements** — native UiAutomator hierarchy only.
- **Risky actions are blocked** (delete, pay, logout, checkout, etc.).
- **No Figma comparison yet**
- **No AI visual review yet**
- **No iOS / IPA support yet**
- **No automatic locale or data permutations yet**
- **No full autonomous crawler in V2** — exploration is user-driven from the web UI
- **Android APK only** — no `.aab` or split APKs
- **Emulator must be running** before the worker starts a run (does not boot AVDs automatically)
- **May not work** with apps that block emulators or detect automation

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `Neither ANDROID_HOME nor ANDROID_SDK_ROOT` | `source ~/.zshrc`, then **restart Appium and the worker** in that shell |
| Worker stuck on "Preparing emulator" / "Queued" forever | Emulator booted (`adb devices`), Appium up (`npm run appium`), worker running (`npm run worker:apk`) |
| "Package name unknown" | Re-upload the APK; metadata parsing failed |
| "APK file missing" | Check `artifacts/apks/...` exists and `ARTIFACTS_DIR` matches between web + worker |
| Hotspot tap fails / replay error | Session may be out of sync — try **Resume here** or **Reset to root**, or start a new run |
| Install failed | Confirm APK architecture matches emulator (arm64 vs x86) |
| Run failed immediately | Run `npx appium driver doctor uiautomator2` |
