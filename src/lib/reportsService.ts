import type { Country } from "../constants";
import type { APIResponse, PublicReportLike } from "../global";
import { PublicReport } from "../models/report";
import { PromiseReturnable, Returnable } from "../models/returnable";
import { SettingsService } from "./settingsService";

export class ReportsService {
  /**
   * Url / API Endpoints
   */
  private static readonly apiSettings =
    SettingsService.instance.settings.apiSettings;

  /**
   * Fetch publically available report data for the given countries
   *
   * @param selectedCountryCodes Countries (2 letter code) to fetch reports for
   *
   * @returns `Returnable` with (if `.wasSuccessful` is true) a list of
   * `PublicReport`s for the given countries. If `.wasSuccessful` is false,
   * the `.error` property will contain the error.
   *
   * @see PublicReport
   * @see PublicReportLike
   * @see Returnable
   * @see APIResponse
   */
  static async fetchPublicReports(
    selectedCountryCodes: string[]
  ): PromiseReturnable<PublicReport[]> {
    const url = `${ReportsService.apiSettings.baseUrl}/${ReportsService.apiSettings.endpoints.reports_for_countries}`;

    let res: Response;
    try {
      res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          countries: selectedCountryCodes,
        }),
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${ReportsService.apiSettings.anonKey}`,
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      return new Returnable(
        false,
        [],
        `Failed to fetch reports: ${JSON.stringify(e)}`
      );
    }

    // any typing bcs. the typing would be too complicated
    const json = (await res.json()) as APIResponse<any>;

    if (json.status !== "ok") {
      return new Returnable(
        false,
        [],
        `Edge Error: ${JSON.stringify(json.content)}`
      );
    }

    let reports: PublicReport[] = [];

    try {
      selectedCountryCodes.forEach((countryCode) => {
        if (Object.prototype.hasOwnProperty.call(json.content, countryCode)) {
          const reportsForCountry = json.content[countryCode] as APIResponse<
            PublicReportLike[]
          >;

          if (reportsForCountry.status !== "ok") {
            console.warn(
              `[ReportsService] Unable to add reports for country ${countryCode} - Edge Function returned error: ${JSON.stringify(
                reportsForCountry.content
              )}`
            );
          } else {
            reports = [
              ...reports,
              ...reportsForCountry.content.map((r) => PublicReport.fromJson(r)),
            ];
          }
        }
      });
    } catch (e) {
      console.error(`[ReportsService] Failed to parse reports: ${e}`);
    }

    console.debug(`[ReportsService] Fetched ${reports.length} reports`);
    return new Returnable(true, reports, null);
  }
}
