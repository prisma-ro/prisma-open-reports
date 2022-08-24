import type { AVAILABLE_COUNTRIES } from "../constants";

export type SettingsLike = Partial<Settings>;

export type SettingsUpdateBehaviour = "overwrite" | "ignore";

type Settings_MapLimits = ReturnType<
  typeof DefaultSettings.getHardcodedMapLimits
>;

type Settings_API = ReturnType<typeof DefaultSettings.getDefaultAPISettings>;

export type Settings_SelectedCountries = (keyof typeof AVAILABLE_COUNTRIES)[];

/**
 * Representation for the user's preferences.
 *
 * For defaults @see DefaultSettings
 */
export class Settings {  
  constructor(
    /**
     * Should the map be displayed in satellite mode
     */
    public useSatellite: boolean,

    /**
     * Last location where the user was
     *
     * Format: [long, lat] (Mapbox format)
     */
    public lastLocation: number[],

    /**
     * Last zoom level where the user was
     */
    public lastZoom: number,

    /**
     * Selected countries to show on the map
     */
    public selectedCountries: Settings_SelectedCountries,

    /**
     * Hard-coded values for the map's bounds & min/max zoom level
     */
    public readonly mapLimits: Settings_MapLimits,

    /**
     * Hard-coded values for the connection with the Edge Functions
     */
    public readonly apiSettings: Settings_API
  ) {}

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
      DefaultSettings.getHardcodedMapLimits(),
      DefaultSettings.getDefaultAPISettings(),
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

  static getDefaultAPISettings() {
    return {
      baseUrl: "https://wgxmvhgymsgitocptpfr.functions.supabase.co",
      anonKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndneG12aGd5bXNnaXRvY3B0cGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg5OTc4OTIsImV4cCI6MTk3NDU3Mzg5Mn0.q_Mkx6oqZIb_iyeMLnuusSu1wYKvH34YqNIiiLTKz6s",
      endpoints: {
        reports_for_countries: "reports-fcs",
      },
    };
  }
}
