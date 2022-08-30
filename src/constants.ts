import { en } from "./i18n/en";
import type { AvailalbeTranslation, Language } from "./i18n/provider";
import type { SettingsUpdateBehaviour } from "./models/settings";

// --------------------------------[ Generic ]----------------------------------

export const MIXPANEL_TOKEN = "398538d67f091a997ba22e8dc1b4d013";

/**
 * The current version of the onboarding, if it doesn't match the stored one,
 * show the onboarding again.
 */
export const CURRENT_ONBOARDING_REF = "aug22_01";

/**
 * The current version of the settings, if it doesn't match the stored one,
 * update it or owerwrite it with the defaults - @see SETTINGS_UPDATE_BEHAVIOUR.
 */
export const CURRENT_SETTINGS_REF = "aug22_01";

/**
 * What to do when the settings are outdated.
 */
export const SETTINGS_UPDATE_BEHAVIOUR: SettingsUpdateBehaviour = "overwrite";

export const ONE_MONTH_MS = 60 * 60 * 24 * 30 * 1000;

// -------------------------------[ Supabase ]----------------------------------

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wgxmvhgymsgitocptpfr.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndneG12aGd5bXNnaXRvY3B0cGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg5OTc4OTIsImV4cCI6MTk3NDU3Mzg5Mn0.q_Mkx6oqZIb_iyeMLnuusSu1wYKvH34YqNIiiLTKz6s";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const AUTH_REDIRECT_TO =
  window.location.host === "reports.prisma-safety.com"
    ? "https://reports.prisma-safety.com"
    : "http://localhost:5000";

// --------------------------------[ Mapbox ]-----------------------------------

export const MAPBOX_TOKEN =
  "pk.eyJ1IjoicHJpc21hLWRhdmlkcCIsImEiOiJja3ZlMGs3bm00N3NyMm9scHYxcDcwMW5lIn0.al4e5xd-S95t1srowwoWXw";
export const MAPBOX_STYLES = {
  NORMAL: "mapbox://styles/prisma-davidp/ckt6xnv4c1ut617ns7444v18e",
  SATELLITE: "mapbox://styles/mapbox/satellite-streets-v11",
};

// ---------------------------[ LocalStorage Keys ]-----------------------------

export const SHOWN_ONBOARDING = "reports_v2__onboarding";
export const COOKIE_CONSENT = "reports_v2__acceptedCookies";
export const LANGUAGE_USED = "reports_v2__language";
export const SAVED_SETTINGS = "reports_v2__settings";
export const SAVED_SETTINGS_VERSION = "reports_v2__settingsVersion";

// ---------------------------------[ i18n ]------------------------------------

export const SUPPORTED_LANGS = ["en-GB", "ro-RO"];
export const DEFAULT_LANGUAGE: Language = "en-GB";
export const DEFAULT_TRANSLATION: AvailalbeTranslation = en;

// -------------------------------[ Countries ]---------------------------------

/**
 * Names and emojis for the available countries.
 *
 * **For exported countries @see AVAILABLE_COUNTRIES below!**
 */
const COUNTRIES_IN_DB = {
  ad: {
    countryCode: "ad",
    englishName: "Andorra",
    emojiFlag: "🇦🇩",
    isFavorite: false,
  },
  al: {
    countryCode: "al",
    englishName: "Albania",
    emojiFlag: "🇦🇱",
    isFavorite: false,
  },
  at: {
    countryCode: "at",
    englishName: "Austria",
    emojiFlag: "🇦🇹",
    isFavorite: false,
  },
  ba: {
    countryCode: "ba",
    englishName: "Bosnia & Herzegovina",
    emojiFlag: "🇧🇦",
    isFavorite: false,
  },
  be: {
    countryCode: "be",
    englishName: "Belgium",
    emojiFlag: "🇧🇪",
    isFavorite: false,
  },
  bg: {
    countryCode: "bg",
    englishName: "Bulgaria",
    emojiFlag: "🇧🇬",
    isFavorite: true,
  },
  by: {
    countryCode: "by",
    englishName: "Belarus",
    emojiFlag: "🇧🇾",
    isFavorite: false,
  },
  ch: {
    countryCode: "ch",
    englishName: "Switzerland",
    emojiFlag: "🇨🇭",
    isFavorite: false,
  },
  cz: {
    countryCode: "cz",
    englishName: "Czechia",
    emojiFlag: "🇨🇿",
    isFavorite: false,
  },
  de: {
    countryCode: "de",
    englishName: "Germany",
    emojiFlag: "🇩🇪",
    isFavorite: false,
  },
  dk: {
    countryCode: "dk",
    englishName: "Denmark",
    emojiFlag: "🇩🇰",
    isFavorite: false,
  },
  dz: {
    countryCode: "dz",
    englishName: "Algeria",
    emojiFlag: "🇩🇿",
    isFavorite: false,
  },
  ee: {
    countryCode: "ee",
    englishName: "Estonia",
    emojiFlag: "🇪🇪",
    isFavorite: false,
  },
  es: {
    countryCode: "es",
    englishName: "Spain",
    emojiFlag: "🇪🇸",
    isFavorite: false,
  },
  fi: {
    countryCode: "fi",
    englishName: "Finland",
    emojiFlag: "🇫🇮",
    isFavorite: false,
  },
  fr: {
    countryCode: "fr",
    englishName: "France",
    emojiFlag: "🇫🇷",
    isFavorite: false,
  },
  gb: {
    countryCode: "gb",
    englishName: "United Kingdom",
    emojiFlag: "🇬🇧",
    isFavorite: false,
  },
  ge: {
    countryCode: "ge",
    englishName: "Georgia",
    emojiFlag: "🇬🇪",
    isFavorite: false,
  },
  gi: {
    countryCode: "gi",
    englishName: "Gibraltar",
    emojiFlag: "🇬🇮",
    isFavorite: false,
  },
  gr: {
    countryCode: "gr",
    englishName: "Greece",
    emojiFlag: "🇬🇷",
    isFavorite: false,
  },
  hr: {
    countryCode: "hr",
    englishName: "Croatia",
    emojiFlag: "🇭🇷",
    isFavorite: false,
  },
  hu: {
    countryCode: "hu",
    englishName: "Hungary",
    emojiFlag: "🇭🇺",
    isFavorite: true,
  },
  ie: {
    countryCode: "ie",
    englishName: "Ireland",
    emojiFlag: "🇮🇪",
    isFavorite: false,
  },
  im: {
    countryCode: "im",
    englishName: "Isle of Man",
    emojiFlag: "🇮🇲",
    isFavorite: false,
  },
  is: {
    countryCode: "is",
    englishName: "Iceland",
    emojiFlag: "🇮🇸",
    isFavorite: false,
  },
  it: {
    countryCode: "it",
    englishName: "Italy",
    emojiFlag: "🇮🇹",
    isFavorite: false,
  },
  li: {
    countryCode: "li",
    englishName: "Liechtenstein",
    emojiFlag: "🇱🇮",
    isFavorite: false,
  },
  lt: {
    countryCode: "lt",
    englishName: "Lithuania",
    emojiFlag: "🇱🇹",
    isFavorite: false,
  },
  lv: {
    countryCode: "lv",
    englishName: "Latvia",
    emojiFlag: "🇱🇻",
    isFavorite: false,
  },
  ma: {
    countryCode: "ma",
    englishName: "Morocco",
    emojiFlag: "🇲🇦",
    isFavorite: false,
  },
  mc: {
    countryCode: "mc",
    englishName: "Monaco",
    emojiFlag: "🇲🇨",
    isFavorite: false,
  },
  md: {
    countryCode: "md",
    englishName: "Moldova",
    emojiFlag: "🇲🇩",
    isFavorite: false,
  },
  me: {
    countryCode: "me",
    englishName: "Montenegro",
    emojiFlag: "🇲🇪",
    isFavorite: false,
  },
  mk: {
    countryCode: "mk",
    englishName: "North Macedonia",
    emojiFlag: "🇲🇰",
    isFavorite: false,
  },
  mt: {
    countryCode: "mt",
    englishName: "Malta",
    emojiFlag: "🇲🇹",
    isFavorite: false,
  },
  nl: {
    countryCode: "nl",
    englishName: "Netherlands",
    emojiFlag: "🇳🇱",
    isFavorite: false,
  },
  no: {
    countryCode: "no",
    englishName: "Norway",
    emojiFlag: "🇳🇴",
    isFavorite: false,
  },
  pl: {
    countryCode: "pl",
    englishName: "Poland",
    emojiFlag: "🇵🇱",
    isFavorite: false,
  },
  pt: {
    countryCode: "pt",
    englishName: "Portugal",
    emojiFlag: "🇵🇹",
    isFavorite: false,
  },
  ro: {
    countryCode: "ro",
    englishName: "Romania",
    emojiFlag: "🇷🇴",
    isFavorite: true,
  },
  rs: {
    countryCode: "rs",
    englishName: "Serbia",
    emojiFlag: "🇷🇸",
    isFavorite: false,
  },
  se: {
    countryCode: "se",
    englishName: "Sweden",
    emojiFlag: "🇸🇪",
    isFavorite: false,
  },
  si: {
    countryCode: "si",
    englishName: "Slovenia",
    emojiFlag: "🇸🇮",
    isFavorite: false,
  },
  sk: {
    countryCode: "sk",
    englishName: "Slovakia",
    emojiFlag: "🇸🇰",
    isFavorite: false,
  },
  tn: {
    countryCode: "tn",
    englishName: "Tunisia",
    emojiFlag: "🇹🇳",
    isFavorite: false,
  },
  tr: {
    countryCode: "tr",
    englishName: "Turkey",
    emojiFlag: "🇹🇷",
    isFavorite: false,
  },
  ua: {
    countryCode: "ua",
    englishName: "Ukraine",
    emojiFlag: "🇺🇦",
    isFavorite: false,
  },
  xk: {
    countryCode: "xk",
    englishName: "Kosovo",
    emojiFlag: "🇽🇰",
    isFavorite: false,
  },
};

export interface Country {
  countryCode: string;
  englishName: string;
  emojiFlag: string;
  isFavorite: boolean;
}

/**
 * Countries with available reports
 *
 * TODO: This should be dynamic - populated with the countries that have reports
 */
export const AVAILABLE_COUNTRIES = {
  bg: COUNTRIES_IN_DB.bg,
  hu: COUNTRIES_IN_DB.hu,
  ro: COUNTRIES_IN_DB.ro,
};
