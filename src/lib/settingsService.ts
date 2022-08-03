import { currentSettings } from "../stores";
import { Settings, SettingsLike } from "../models/settings";
import { SAVED_SETTINGS } from "./constants";

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

  /**
   * Initialize the settingsby reading from localStorage, and if not found,
   * use sane defaults (`Settings.defaultSettings()`)
   */
  private initSettings(): Settings {
    try {
      const stored = window.localStorage.getItem(SAVED_SETTINGS);
      if (stored) {
        const parsed = JSON.parse(stored!) as SettingsLike;
        return new Settings(
          parsed.useSatellite!,
          parsed.lastLocation!,
          parsed.lastZoom!,
          parsed.selectedCountries!,
          parsed.mapLimits!
        );
      } else {
        console.debug("[SettingsService] Not found, using defaults");

        // Set & Save defaults:
        this._settings = Settings.defaultSettings;
        this.applyUpdate();
        return Settings.defaultSettings;
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
