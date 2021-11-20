/// <reference types="svelte" />

// Terrible, but no oficial declaration files are provided / exist at this time
declare module '@beyonk/svelte-mapbox';

type PrismaPage = 'map' | 'about' | 'dataProtection';

interface ReportData {
  date: Date;
  time: string;
  honeyPot: string;
  type: string;
  details: string;
}
