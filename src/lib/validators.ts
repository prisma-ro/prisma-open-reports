const isValidValue = (val: string): boolean => {
  return val !== undefined && val !== null && val !== "";
};

/**
 * Validate the new report's data
 * 
 * @param reportData data collected at step 2 in the report process
 * @returns valid (true) / invalid (false)
 */
export const validateReportData = (reportData: ReportData): boolean => {
  if (!isValidValue(reportData.type) || !isValidValue(reportData.time)) {
    return false;
  }

  if (
    reportData.date === undefined ||
    reportData.date.toString() === "Invalid Date"
  ) {
    return false;
  }

  if ((reportData.details ?? "").length > 2000) {
    return false;
  }

  return true;
};
