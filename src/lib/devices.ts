/**
 * Registry of Android emulator device profiles a review run can target.
 *
 * Kept as plain constants (like `run-status.ts`) so it can be imported freely by
 * client components AND by the worker without pulling in server-only code.
 *
 * Each profile maps to a checked-in AVD plus deterministic ports so two devices
 * can boot side by side (fixed emulator serials + one Appium server per device).
 */
export interface DeviceProfile {
  /** Stable id stored on ReviewRun.deviceId and used to route runs to workers. */
  id: string;
  /** Human-friendly name shown in the picker. */
  label: string;
  /** Short screen description (size / resolution). */
  description: string;
  /** AVD name to boot with `emulator -avd`. */
  avdName: string;
  /** `emulator -port <n>` -> adb serial `emulator-<n>`. Must be even. */
  emulatorPort: number;
  /** Dedicated Appium server port for this device. */
  appiumPort: number;
  /** UiAutomator2 systemPort; must differ per concurrent session. */
  systemPort: number;
}

export const DEVICE_PROFILES = [
  {
    id: "pixel_7",
    label: "Pixel 7",
    description: '6.3" · 1080x2400',
    avdName: "Pixel_7",
    emulatorPort: 5554,
    appiumPort: 4723,
    systemPort: 8200,
  },
  {
    id: "small_phone",
    label: "Small Phone",
    description: '~5.0" · 720x1280',
    avdName: "Small_Phone",
    emulatorPort: 5556,
    appiumPort: 4724,
    systemPort: 8201,
  },
] as const satisfies readonly DeviceProfile[];

export type DeviceId = (typeof DEVICE_PROFILES)[number]["id"];

export const DEFAULT_DEVICE_ID: DeviceId = "pixel_7";

export const DEVICE_IDS = DEVICE_PROFILES.map((d) => d.id) as [
  DeviceId,
  ...DeviceId[],
];

export function getDeviceProfile(id: string): DeviceProfile | undefined {
  return DEVICE_PROFILES.find((d) => d.id === id);
}

/** adb serial for a profile's fixed emulator port. */
export function deviceUdid(profile: DeviceProfile): string {
  return `emulator-${profile.emulatorPort}`;
}

/** Local Appium base URL dedicated to this profile. */
export function deviceAppiumUrl(profile: DeviceProfile): string {
  return `http://127.0.0.1:${profile.appiumPort}`;
}

/** Display label for a stored deviceId, falling back to the raw id. */
export function deviceLabel(id: string): string {
  return getDeviceProfile(id)?.label ?? id;
}
