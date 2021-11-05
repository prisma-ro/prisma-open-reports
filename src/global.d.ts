/// <reference types="svelte" />

type PrismaPage = 'map' | 'about' | 'dataProtection';

interface ReportData {
  date: Date;
  time: string;
  honeyPot: string;
  type: string;
  details: string;
}
