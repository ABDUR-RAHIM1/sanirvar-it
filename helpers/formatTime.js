// utils/formatTime.js
import dayjs from "dayjs";

/**
 * Format a time string to 12-hour format with AM/PM
 * @param {string} time - input type="time" value, e.g. "17:43"
 * @returns {string} formatted time e.g. "05:43 PM"
 */
export function formatTime12Hour(time) {
  if (!time) return "-";

  // Add a dummy date so dayjs can parse
  const isoTime = `1970-01-01T${time}:00`;

  return dayjs(isoTime).format("hh:mm A");
}
