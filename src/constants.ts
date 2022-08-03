import { en } from "./i18n/en";
import type { AvailalbeTranslation, Language } from "./i18n/provider";

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
