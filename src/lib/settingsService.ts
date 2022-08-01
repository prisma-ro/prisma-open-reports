import { currentSettings } from "../stores";
import { SAVED_SETTINGS } from "./constants";

type SettingsLike = Partial<Settings>;

type Settings_MapLimits = ReturnType<typeof Settings.getHardcodedMapLimits>;

/**
 * Representation for the user's preferences.
 */
export class Settings {
  /**
   * Should the map be displayed in satellite mode
   */
  useSatellite: boolean;

  /**
   * Last location where the user was
   *
   * Format: [long, lat] (Mapbox format)
   */
  lastLocation: number[];

  /**
   * Last zoom level where the user was
   */
  lastZoom: number;

  /**
   * Hard-coded values for the map's bounds & min/max zoom level
   */
  mapLimits: Settings_MapLimits;

  constructor(
    useSatellite: boolean,
    lastLocation: number[],
    lastZoom: number,
    mapLimits: Settings_MapLimits
  ) {
    this.useSatellite = useSatellite;
    this.lastLocation = lastLocation;
    this.lastZoom = lastZoom;
    this.mapLimits = mapLimits;
  }

  static defaultSettings(): Settings {
    return new Settings(
      false,
      [24.849442, 46.069881],
      5.5,
      this.getHardcodedMapLimits()
    );
  }

  static getHardcodedMapLimits() {
    return {
      boundsBtmLeft: [-27, 34], // North Atlantic Ocean / Around Morocco
      boundsTopRight: [42, 71], // Barents Sea / North of Russia
      minZoom: 5,
      maxZoom: 22,
    };
  }
}

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
          parsed.mapLimits!,
        );
      } else {
        console.debug("[SettingsService] Not found, using defaults");

        // Set & Save defaults:
        this._settings = Settings.defaultSettings();
        this.applyUpdate();
        return Settings.defaultSettings();
      }
    } catch (e) {
      console.warn(`[SettingsService] Error while getting settings: ${e}`);
      return Settings.defaultSettings();
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
