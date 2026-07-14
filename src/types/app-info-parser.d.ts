declare module "app-info-parser" {
  /**
   * Minimal typings for the subset of `app-info-parser` we use. The library
   * parses an APK/IPA and resolves a manifest-derived info object.
   */
  interface ApkParseResult {
    package?: string;
    versionName?: string;
    versionCode?: string | number;
    [key: string]: unknown;
  }

  export default class AppInfoParser {
    constructor(file: string);
    parse(): Promise<ApkParseResult>;
  }
}
