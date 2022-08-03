import { MixpanelService } from "./mixpanelService";

/**
 * Handle API related ops
 */
export class APIService {
  /**
   *
   * @param report data collected in the report process
   *
   * @returns false if the honeypot check failed | true - passed
   */
  private static _checkHoneyPots(report: ReportData): boolean {
    report.honeyPots.forEach((pot) => {
      if (pot) {
        return false;
      }
    });
    return true;
  }

  /**
   * Add a new report to the db
   *
   * @param report data collected in the report process
   * @param location [report latitude, report longitude]
   *
   * @returns true - success | false - something failed (logged to console)
   */
  static async submitReport(
    report: ReportData,
    location: number[]
  ): Promise<boolean> {
    const requestBody = JSON.stringify({
      incidentDetails: {
        type: report.type,
        date: report.date.toISOString(),
        time: report.time,
        details: report.details ?? null,
        notifiedAuthorities: report.notifiedAuthorities,
      },
      reportDetails: {
        honeyPot: this._checkHoneyPots(report)
          ? null
          : `CONTENT:${report.honeyPots.toString()}`,
        location: location,
        sentAt: new Date().toISOString(),
      },
    });

    const raw = await fetch("/api/reports", {
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

  /**
   * Get currently added Open Reports
   *
   * @returns List with all the reports added on Open Reports
   */
  static async getReports(): Promise<ReportDataWithId[]> {
    const raw = await fetch("/api/reports", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await raw.json();

    if (res.status !== "ok") {
      console.warn(res.error);
      MixpanelService.event("Error", {
        where: "apiService.getReports",
        apiError: res.error,
      });
      return [];
    }

    console.log(`Fetched ${res.data.reports.length} reports ✨`);
    MixpanelService.event("Fetched Reports");

    return res.data.reports;
  }
}
