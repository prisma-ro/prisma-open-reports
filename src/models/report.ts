/**
 * Report with only public properties
 */
export class PublicReport {
  constructor(
    /**
     * The report's unique ID
     */
    public readonly id: number,

    /**
     * Report loction - latitude
     */
    public readonly lat: number,

    /**
     * Report loction - longitude
     */
    public readonly long: number,

    /**
     * Report details - what happened, i.e.: Catcalling
     */
    public readonly incident_type: string,

    /**
     * Report details - date, ISO format
     */
    public readonly incident_date: string,

    /**
     * Report details - time of day, in minutes, i.e.: 720 = 12:00
     */
    public readonly incident_time: number
  ) {}

  public static fromJson(json: any): PublicReport {
    return new PublicReport(
      json.id,
      json.lat,
      json.long,
      json.incident_type,
      json.incident_date,
      json.incident_time
    );
  }
}

/**
 * Report with all properties, incl. ones that require authentication
 */
export class ExtendedReport extends PublicReport {
  constructor(
    public readonly id: number,
    public readonly lat: number,
    public readonly long: number,
    public readonly incident_type: string,
    public readonly incident_date: string,
    public readonly incident_time: number,

    /**
     * Report details - how was the report added, i.e.: open_reports
     */
    public readonly method: string,

    /**
     * Report details - description
     */
    public readonly description: string,
  ) {
    super(id, lat, long, incident_type, incident_date, incident_time);
  }

  public static fromJson(json: any): ExtendedReport {
    return new ExtendedReport(
      json.id,
      json.lat,
      json.long,
      json.incident_type,
      json.incident_date,
      json.incident_time,
      json.method,
      json.description
    );
  }
}
