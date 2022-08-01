import { en } from "../i18n/en";
import type { AvailalbeTranslation, Language } from "../i18n/provider";

export const MIXPANEL_TOKEN = "398538d67f091a997ba22e8dc1b4d013";

export const MAPBOX_STYLES = {
  NORMAL: "mapbox://styles/prisma-davidp/ckt6xnv4c1ut617ns7444v18e",
  SATELLITE: "mapbox://styles/mapbox/satellite-streets-v11"
};

export const SHOWN_INTRO = "reports_v2__shownIntroAt";
export const COOKIE_CONSENT = "reports_v2__acceptedCookies";
export const LANGUAGE_USED = "reports_v2__language";

export const SUPPORTED_LANGS = ["en-GB", "ro-RO"];
export const DEFAULT_LANGUAGE: Language = "en-GB";
export const DEFAULT_TRANSLATION: AvailalbeTranslation = en;

export const SAVED_SETTINGS = "reports_v2__settings";
