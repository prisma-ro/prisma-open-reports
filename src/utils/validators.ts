const isValidValue = (val: string): boolean => {
  return val !== undefined && val !== null && val !== "";
};

/**
 * Validate the new report's data
 * 
 * @deprecated Switched to 2 separated validators
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

export const validateStep2A = (data: Step2AData): boolean => {
  if (!isValidValue(data.type) || !isValidValue(data.time)) {
    return false;
  }

  if (
    data.date === undefined ||
    data.date.toString() === "Invalid Date"
  ) {
    return false;
  }

  return true;
}

export const validateStep2B = (data: Step2BData): boolean => {
  if ((data.details ?? "").length > 2000) {
    return false;
  }

  return true;
}
