/**
 * Locale catalogue for the "test in different locales" feature.
 *
 * Each option carries the aliases we expect to see rendered as an on-screen
 * language option (native + English names) so the worker can map a tapped
 * label back to a locale code. Shared by the web UI (picker) and the worker
 * (label matching), so it must stay framework-agnostic.
 */

export interface LocaleOption {
  /** BCP-47-ish short code, e.g. "es". */
  code: string;
  /** English display name, e.g. "Spanish". */
  englishName: string;
  /** Labels the app might render for this language. */
  nativeNames: string[];
  /** Right-to-left script (layout may shift significantly). */
  rtl?: boolean;
}

export const LOCALE_OPTIONS: LocaleOption[] = [
  { code: "es", englishName: "Spanish", nativeNames: ["Español", "Espanol"] },
  { code: "de", englishName: "German", nativeNames: ["Deutsch"] },
  { code: "fr", englishName: "French", nativeNames: ["Français", "Francais"] },
  { code: "ja", englishName: "Japanese", nativeNames: ["日本語"] },
  { code: "ko", englishName: "Korean", nativeNames: ["한국어"] },
  { code: "it", englishName: "Italian", nativeNames: ["Italiano"] },
  { code: "ru", englishName: "Russian", nativeNames: ["Русский"] },
  { code: "da", englishName: "Danish", nativeNames: ["Dansk"] },
  { code: "cs", englishName: "Czech", nativeNames: ["Čeština", "Cestina"] },
  { code: "bg", englishName: "Bulgarian", nativeNames: ["Български"] },
  {
    code: "pt",
    englishName: "Portuguese",
    nativeNames: ["Português", "Portugues"],
  },
  {
    code: "zh",
    englishName: "Chinese",
    nativeNames: ["中文", "简体中文", "繁體中文"],
  },
  { code: "ar", englishName: "Arabic", nativeNames: ["العربية"], rtl: true },
  { code: "he", englishName: "Hebrew", nativeNames: ["עברית"], rtl: true },
  { code: "en", englishName: "English", nativeNames: ["English"] },
];

/** Pre-selected locales when the picker first opens. */
export const DEFAULT_LOCALE_CODES = ["es", "de", "fr", "ja", "ko"];

/** Locale the worker restores to after a test run (keeps later review readable). */
export const RESTORE_LOCALE_CODE = "en";

/** Max locales the reviewer can test in a single run. */
export const MAX_LOCALES_PER_TEST = 8;

/** Keywords that identify a "Language" list screen / option across languages. */
export const LANGUAGE_SCREEN_KEYWORDS = [
  "language",
  "languages",
  "idioma",
  "idiomas",
  "langue",
  "langues",
  "sprache",
  "língua",
  "lingua",
  "言語",
  "语言",
  "語言",
  "언어",
  "lingua",
  "язык",
];

/** Keywords that identify a "Settings" entry point across languages. */
export const SETTINGS_KEYWORDS = [
  "setting",
  "settings",
  "preferences",
  "preference",
  "ajustes",
  "configuración",
  "configuracion",
  "paramètres",
  "parametres",
  "einstellungen",
  "impostazioni",
  "設定",
  "设置",
  "설정",
  "настройки",
];

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

const CODE_TO_OPTION = new Map(LOCALE_OPTIONS.map((o) => [o.code, o]));

export function getLocaleOption(code: string): LocaleOption | null {
  return CODE_TO_OPTION.get(code) ?? null;
}

/** Display label for a code, falling back to the raw code. */
export function localeLabel(code: string): string {
  const option = CODE_TO_OPTION.get(code);
  if (!option) return code;
  const native = option.nativeNames[0];
  return native ? `${option.englishName} (${native})` : option.englishName;
}

/**
 * Match a rendered on-screen label (e.g. a tapped list item) to a locale code.
 * Case-insensitive; matches full native names or the English name, and tolerates
 * labels that merely contain the language name (e.g. "Español (España)").
 */
export function matchLocaleByLabel(label: string | null | undefined): string | null {
  if (!label) return null;
  const hay = normalize(label);
  if (!hay) return null;

  for (const option of LOCALE_OPTIONS) {
    const needles = [option.englishName, ...option.nativeNames].map(normalize);
    for (const needle of needles) {
      if (!needle) continue;
      if (hay === needle || hay.includes(needle)) return option.code;
    }
  }
  return null;
}

/**
 * Does a rendered label look like a specific locale's option?
 * Used by the worker to pick the correct row on the Language screen.
 */
export function labelMatchesLocale(
  label: string | null | undefined,
  code: string,
): boolean {
  if (!label) return false;
  const option = CODE_TO_OPTION.get(code);
  if (!option) return false;
  const hay = normalize(label);
  const needles = [option.englishName, ...option.nativeNames].map(normalize);
  return needles.some((needle) => needle && (hay === needle || hay.includes(needle)));
}

function includesKeyword(hay: string, keywords: string[]): boolean {
  return keywords.some((kw) => hay.includes(normalize(kw)));
}

/** Does a label look like it opens a "Language" screen/option? */
export function isLanguageKeyword(label: string | null | undefined): boolean {
  if (!label) return false;
  return includesKeyword(normalize(label), LANGUAGE_SCREEN_KEYWORDS);
}

/** Does a label look like it opens "Settings"? */
export function isSettingsKeyword(label: string | null | undefined): boolean {
  if (!label) return false;
  return includesKeyword(normalize(label), SETTINGS_KEYWORDS);
}
