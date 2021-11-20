/**
 * Handle API related ops
 */
export class APIService {

  /**
   * Add a new report to the db
   * 
   * @param report data collected at step 2 in the report process
   * @param location [report latitude, report longitude]
   */
  static async submitReport(report: ReportData, location: number[]) {
    console.log('sub:');
    console.log(location);
    console.log(report);
  }
}
