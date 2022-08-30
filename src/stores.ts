import { get, Writable, writable } from "svelte/store";
import type { AvailalbeTranslation, Language } from "./i18n/provider";
import { DEFAULT_LANGUAGE, DEFAULT_TRANSLATION } from "./constants";
import { Settings } from "./models/settings";

// Generic
export const isLoading: Writable<boolean> = writable(false);

// Settings
export const currentSettings: Writable<Settings> = writable(
  Settings.defaultSettings
);

// Pages
export const currentStep: Writable<number> = writable(1);
export const currentPage: Writable<PrismaPage> = writable("map");
export const changePage = (newPage: PrismaPage) => {
  currentPage.set(newPage);
};

// Language
export const intl: Writable<AvailalbeTranslation> =
  writable(DEFAULT_TRANSLATION);
export const currentLanguage: Writable<Language> = writable(DEFAULT_LANGUAGE);

// Auth
export const isLoggedIn: Writable<boolean> = writable(false);
export const isAccountModalOpen: Writable<boolean> = writable(false);
