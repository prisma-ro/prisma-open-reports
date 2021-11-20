/**
 * Handle API related ops
 */
export class APIService {

  /**
   * Add a new report to the db
   * 
   * @param report data collected at step 2 in the report process
   */
  static async submitReport(report: ReportData) {
    console.log('sub:');
    console.log(report);
  }
}
