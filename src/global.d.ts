/// <reference types="svelte" />

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
