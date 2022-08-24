import { currentSettings } from "../stores";
import { Settings, SettingsLike } from "../models/settings";
import {
  CURRENT_SETTINGS_REF,
  SAVED_SETTINGS,
  SAVED_SETTINGS_VERSION,
  SETTINGS_UPDATE_BEHAVIOUR,
} from "../constants";

/**
 * Handle settings operations
 *
 * Should be initialized as soon as possible:
 * ```js
 * SettingsService.initialize();
 * ```
 *
 * @see Settings
 */
export class SettingsService {
  private static _instance: SettingsService;

  private _settings: Settings;

  private constructor() {
    this._settings = this.initSettings();
    currentSettings.set(this._settings);
  }

  /**
   * Get a SettingsService instance
   */
  static get instance(): SettingsService {
    if (!SettingsService._instance) {
      SettingsService._instance = new SettingsService();
    }

    return SettingsService._instance;
  }

  private static parseStoredSettings = (stored: string): Settings => {
    const parsed = JSON.parse(stored!) as SettingsLike;
    return new Settings(
      parsed.useSatellite!,
      parsed.lastLocation!,
      parsed.lastZoom!,
      parsed.selectedCountries!,
      parsed.mapLimits!,
      parsed.apiSettings!
    );
  };

  /**
   * Initialize the settingsby reading from localStorage, and if not found,
   * use sane defaults (`Settings.defaultSettings()`)
   */
  private initSettings(): Settings {
    try {
      const stored = window.localStorage.getItem(SAVED_SETTINGS);
      const version = window.localStorage.getItem(SAVED_SETTINGS_VERSION);

      if (stored && version == CURRENT_SETTINGS_REF) {
        return SettingsService.parseStoredSettings(stored);
      } else if (!stored) {
        console.debug("[SettingsService] Not found, using defaults");

        // Set & Save defaults:
        this._settings = Settings.defaultSettings;
        this.applyUpdate();
        return Settings.defaultSettings;
      } else {
        console.debug(
          `[SettingsService] Outdated: ${version} & Current: ${CURRENT_SETTINGS_REF} | Behaviour: ${SETTINGS_UPDATE_BEHAVIOUR}`
        );

        window.localStorage.setItem(
          SAVED_SETTINGS_VERSION,
          CURRENT_SETTINGS_REF
        );

        if (SETTINGS_UPDATE_BEHAVIOUR == "overwrite") {
          console.debug("[SettingsService] Overwriting settings");

          // Set & Save defaults:
          this._settings = Settings.defaultSettings;
          this.applyUpdate();
          return Settings.defaultSettings;
        }

        // Else: ignore the update:
        return SettingsService.parseStoredSettings(stored);
      }
    } catch (e) {
      console.warn(`[SettingsService] Error while getting settings: ${e}`);
      return Settings.defaultSettings;
    }
  }

  static initialize(): SettingsService {
    return SettingsService.instance;
  }

  /**
   * Get the current settings.
   *
   * **Note: You can also use the `currentSettings` store!**
   */
  get settings(): Settings {
    return this._settings;
  }

  /**
   * Update the settings store & save to localStorage
   */
  applyUpdate() {
    currentSettings.set(this._settings);

    // Save the settings to localStorage
    window.localStorage.setItem(SAVED_SETTINGS, JSON.stringify(this._settings));
  }
}
