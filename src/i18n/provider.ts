import { DEFAULT_LANGUAGE, DEFAULT_TRANSLATION, LANGUAGE_USED, SUPPORTED_LANGS } from "../lib/constants";
import { currentLanguage, intl } from "../stores";
import { en } from "./en";
import { ro } from "./ro";

/** @see SUPPORTED_LANGS in `constants.ts` */
export type Language = "en-GB" | "ro-RO";

export type AvailalbeTranslation = typeof ro & typeof en;

/**
 * Static utilities for internalization / translations.
 * 
 * To get translated strings use the `intl` store.
 * 
 * @example
 * ```js
 * /// Normal import:
 * import { intl } from "<path>/stores";
 * 
 * /// To get the string for the `about` key:
 * $intl.about
 * ```
 * 
 * @throws If the language is not supported when performing certain operations.
 * 
 * @see DEFAULT_TRANSLATION in constants.ts
 * @see DEFAULT_LANGUAGE in constants.ts
 * @see LANGUAGE_USED in constants.ts
 * @see SUPPORTED_LANGS in constants.ts
 */
export class TranslationProvider {
  /**
   * Get the `AvailalbeTranslation` for the given language.
   * 
   * @throws if the language is not supported
   */
  static getTransaltionForLanguage(language: Language): AvailalbeTranslation {
    switch (language) {
      case "en-GB":
        return en;
      case "ro-RO":
        return ro;
      default:
        throw new Error(
          `[TranslationProvider] Language ${language} is not implemented`
        );
    }
  }

  /**
   * Try to get the saved language. If that doesn't exist, use the browser's
   * language. If that language is not supported, use the default.
   * 
   * @see SUPPORTED_LANGS - The list of languages / locales supported
   */
  static initialize() {
    const saved = localStorage.getItem(LANGUAGE_USED);
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      currentLanguage.set(saved as Language);
      intl.set(this.getTransaltionForLanguage(saved as Language));
    }

    // Nothing saved, get language from browser
    const browser = navigator.language;
    if (SUPPORTED_LANGS.includes(browser)) {
      localStorage.setItem(LANGUAGE_USED, browser);
      console.log(`[TranslationProvider] Saved ${browser} as initial language`);
      currentLanguage.set(browser as Language);
      intl.set(this.getTransaltionForLanguage(browser as Language));
    }

    // Default to english if no lanugage was found
    console.log(
      `[TranslationProvider] ${browser} is not a supported language. Defaulted to en-GB`
    );
    currentLanguage.set(DEFAULT_LANGUAGE);
    intl.set(DEFAULT_TRANSLATION);
  }

  /**
   * Update the UI language.
   * 
   * @throws if the language is not supported
   */
  static updateLanguage(language: Language) {
    if (SUPPORTED_LANGS.includes(language)) {
      localStorage.setItem(LANGUAGE_USED, language);
      currentLanguage.set(language);
      intl.set(this.getTransaltionForLanguage(language));
    } else {
      throw new Error(
        `[TranslationProvider] (updateLanguage) Language ${language} is not implemented`
      );
    }
  }
}
