import { MixpanelService } from "./mixpanel";

/**
 * Handle API related ops
 */
export class APIService {
  /**
   * Add a new report to the db
   *
   * @param report data collected at step 2 in the report process
   * @param location [report latitude, report longitude]
   *
   * @returns ok - success | false - something failed (logged to console)
   */
  static async submitReport(report: ReportData, location: number[]) {
    const requestBody = JSON.stringify({
      incidentDetails: {
        type: report.type,
        date: report.date.toISOString(),
        time: report.time,
        details: report.details ?? null,
      },
      reportDetails: {
        honeyPot: report.honeyPot ?? null,
        location: location,
        sentAt: new Date().toISOString(),
      },
    });

    const raw = await fetch("/api/submit", {
      body: requestBody,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await raw.json();

    if (res.status !== "ok") {
      console.warn(res.error);
      MixpanelService.event("Error", {
        where: "apiService.submitReport",
        apiError: res.error,
        requestBody,
      });
      return false;
    }

    console.log(`Added report with id ${res.data} ✨`);
    MixpanelService.event("New Report", { id: res.data });
    return true;
  }
}
