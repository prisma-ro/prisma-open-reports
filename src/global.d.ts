/// <reference types="svelte" />

import type { Country } from "./constants";
import type { PublicReport } from "./models/report";

// ----------------------------------[ APIs ]-----------------------------------

/**
 * Typed return object from Prisma APIs
 * 
 * @template T the type of `APIResponse.content` if the request was successful
 * @template E the type of `APIResponse.content` if the request failed
 */
type APIResponse<T, E = string> = {
  status: "ok",
  content: T,
} | {
  status: "fail",
  content: E,
}

type PublicReportLike = Partial<PublicReport>;

// --------------------------------[ Generic ]----------------------------------

type PrismaPage = "map" | "about" | "dataProtection";

type EventName =
  | "Page View"
  | "New Report"
  | "Fetched Reports"
  | "Cancelled Report"
  | "Map Clicked"
  | "Error";

interface ReportData {
  date: Date;
  time: string;
  honeyPots: string[];
  type: string;
  details: string;
  notifiedAuthorities: boolean;
}

interface Step2AData {
  honeyPot: string;
  date: Date;
  time: string;
  type: string;
}

interface Step2BData {
  honeyPot: string;
  details: string;
  notifiedAuthorities: boolean;
}
interface ReportDataWithId {
  id: string;
  incidentDetails: {
    type: string;
    details: string; // May be redacted to protect user privacy
    time: string;
    date: string;
    notifiedAuthorities: string; // May be redacted to protect user privacy
  };
  reportDetails: {
    location: number[];
    sentAt: string;
  };
}
