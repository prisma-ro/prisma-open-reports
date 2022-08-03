import type { AVAILABLE_COUNTRIES } from "../constants";

export type SettingsLike = Partial<Settings>;

type Settings_MapLimits = ReturnType<
  typeof DefaultSettings.getHardcodedMapLimits
>;

export type Settings_SelectedCountries = (keyof typeof AVAILABLE_COUNTRIES)[];

/**
 * Representation for the user's preferences.
 * 
 * For defaults @see DefaultSettings
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
   * Selected countries to show on the map
   */
  selectedCountries: Settings_SelectedCountries;

  /**
   * Hard-coded values for the map's bounds & min/max zoom level
   */
  readonly mapLimits: Settings_MapLimits;

  constructor(
    useSatellite: boolean,
    lastLocation: number[],
    lastZoom: number,
    selectedCountries: Settings_SelectedCountries,
    mapLimits: Settings_MapLimits
  ) {
    this.useSatellite = useSatellite;
    this.lastLocation = lastLocation;
    this.lastZoom = lastZoom;
    this.selectedCountries = selectedCountries;
    this.mapLimits = mapLimits;
  }

  static get defaultSettings(): Settings {
    return new DefaultSettings();
  }
}

class DefaultSettings extends Settings {
  constructor() {
    super(
      false,
      [24.849442, 46.069881],
      5.5,
      ["ro"],
      DefaultSettings.getHardcodedMapLimits()
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
