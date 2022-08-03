import { en } from "../i18n/en";
import type { AvailalbeTranslation, Language } from "../i18n/provider";

// -------------------------------[ Mixpanel ]----------------------------------

export const MIXPANEL_TOKEN = "398538d67f091a997ba22e8dc1b4d013";

// --------------------------------[ Mapbox ]-----------------------------------

export const MAPBOX_TOKEN =
  "pk.eyJ1IjoicHJpc21hLWRhdmlkcCIsImEiOiJja3ZlMGs3bm00N3NyMm9scHYxcDcwMW5lIn0.al4e5xd-S95t1srowwoWXw";
export const MAPBOX_STYLES = {
  NORMAL: "mapbox://styles/prisma-davidp/ckt6xnv4c1ut617ns7444v18e",
  SATELLITE: "mapbox://styles/mapbox/satellite-streets-v11",
};

// ---------------------------[ LocalStorage Keys ]-----------------------------

export const SHOWN_INTRO = "reports_v2__shownIntroAt";
export const COOKIE_CONSENT = "reports_v2__acceptedCookies";
export const LANGUAGE_USED = "reports_v2__language";
export const SAVED_SETTINGS = "reports_v2__settings";

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
    englishName: "Andorra",
    emojiFlag: "🇦🇩",
    isFavorite: false,
  },
  al: {
    englishName: "Albania",
    emojiFlag: "🇦🇱",
    isFavorite: false,
  },
  at: {
    englishName: "Austria",
    emojiFlag: "🇦🇹",
    isFavorite: false,
  },
  ba: {
    englishName: "Bosnia & Herzegovina",
    emojiFlag: "🇧🇦",
    isFavorite: false,
  },
  be: {
    englishName: "Belgium",
    emojiFlag: "🇧🇪",
    isFavorite: false,
  },
  bg: {
    englishName: "Bulgaria",
    emojiFlag: "🇧🇬",
    isFavorite: true,
  },
  by: {
    englishName: "Belarus",
    emojiFlag: "🇧🇾",
    isFavorite: false,
  },
  ch: {
    englishName: "Switzerland",
    emojiFlag: "🇨🇭",
    isFavorite: false,
  },
  cz: {
    englishName: "Czechia",
    emojiFlag: "🇨🇿",
    isFavorite: false,
  },
  de: {
    englishName: "Germany",
    emojiFlag: "🇩🇪",
    isFavorite: false,
  },
  dk: {
    englishName: "Denmark",
    emojiFlag: "🇩🇰",
    isFavorite: false,
  },
  dz: {
    englishName: "Algeria",
    emojiFlag: "🇩🇿",
    isFavorite: false,
  },
  ee: {
    englishName: "Estonia",
    emojiFlag: "🇪🇪",
    isFavorite: false,
  },
  es: {
    englishName: "Spain",
    emojiFlag: "🇪🇸",
    isFavorite: false,
  },
  fi: {
    englishName: "Finland",
    emojiFlag: "🇫🇮",
    isFavorite: false,
  },
  fr: {
    englishName: "France",
    emojiFlag: "🇫🇷",
    isFavorite: false,
  },
  gb: {
    englishName: "United Kingdom",
    emojiFlag: "🇬🇧",
    isFavorite: false,
  },
  ge: {
    englishName: "Georgia",
    emojiFlag: "🇬🇪",
    isFavorite: false,
  },
  gi: {
    englishName: "Gibraltar",
    emojiFlag: "🇬🇮",
    isFavorite: false,
  },
  gr: {
    englishName: "Greece",
    emojiFlag: "🇬🇷",
    isFavorite: false,
  },
  hr: {
    englishName: "Croatia",
    emojiFlag: "🇭🇷",
    isFavorite: false,
  },
  hu: {
    englishName: "Hungary",
    emojiFlag: "🇭🇺",
    isFavorite: true,
  },
  ie: {
    englishName: "Ireland",
    emojiFlag: "🇮🇪",
    isFavorite: false,
  },
  im: {
    englishName: "Isle of Man",
    emojiFlag: "🇮🇲",
    isFavorite: false,
  },
  is: {
    englishName: "Iceland",
    emojiFlag: "🇮🇸",
    isFavorite: false,
  },
  it: {
    englishName: "Italy",
    emojiFlag: "🇮🇹",
    isFavorite: false,
  },
  li: {
    englishName: "Liechtenstein",
    emojiFlag: "🇱🇮",
    isFavorite: false,
  },
  lt: {
    englishName: "Lithuania",
    emojiFlag: "🇱🇹",
    isFavorite: false,
  },
  lv: {
    englishName: "Latvia",
    emojiFlag: "🇱🇻",
    isFavorite: false,
  },
  ma: {
    englishName: "Morocco",
    emojiFlag: "🇲🇦",
    isFavorite: false,
  },
  mc: {
    englishName: "Monaco",
    emojiFlag: "🇲🇨",
    isFavorite: false,
  },
  md: {
    englishName: "Moldova",
    emojiFlag: "🇲🇩",
    isFavorite: false,
  },
  me: {
    englishName: "Montenegro",
    emojiFlag: "🇲🇪",
    isFavorite: false,
  },
  mk: {
    englishName: "North Macedonia",
    emojiFlag: "🇲🇰",
    isFavorite: false,
  },
  mt: {
    englishName: "Malta",
    emojiFlag: "🇲🇹",
    isFavorite: false,
  },
  nl: {
    englishName: "Netherlands",
    emojiFlag: "🇳🇱",
    isFavorite: false,
  },
  no: {
    englishName: "Norway",
    emojiFlag: "🇳🇴",
    isFavorite: false,
  },
  pl: {
    englishName: "Poland",
    emojiFlag: "🇵🇱",
    isFavorite: false,
  },
  pt: {
    englishName: "Portugal",
    emojiFlag: "🇵🇹",
    isFavorite: false,
  },
  ro: {
    englishName: "Romania",
    emojiFlag: "🇷🇴",
    isFavorite: true,
  },
  rs: {
    englishName: "Serbia",
    emojiFlag: "🇷🇸",
    isFavorite: false,
  },
  se: {
    englishName: "Sweden",
    emojiFlag: "🇸🇪",
    isFavorite: false,
  },
  si: {
    englishName: "Slovenia",
    emojiFlag: "🇸🇮",
    isFavorite: false,
  },
  sk: {
    englishName: "Slovakia",
    emojiFlag: "🇸🇰",
    isFavorite: false,
  },
  tn: {
    englishName: "Tunisia",
    emojiFlag: "🇹🇳",
    isFavorite: false,
  },
  tr: {
    englishName: "Turkey",
    emojiFlag: "🇹🇷",
    isFavorite: false,
  },
  ua: {
    englishName: "Ukraine",
    emojiFlag: "🇺🇦",
    isFavorite: false,
  },
  xk: {
    englishName: "Kosovo",
    emojiFlag: "🇽🇰",
    isFavorite: false,
  },
};

/**
 * Countries with available reports
 * 
 * TODO: This should be dynamic - populated with the countries that have reports
 */
export const AVAILABLE_COUNTRIES = {
  bg: COUNTRIES_IN_DB.bg,
  hu: COUNTRIES_IN_DB.hu,
  ro: COUNTRIES_IN_DB.ro,
}
