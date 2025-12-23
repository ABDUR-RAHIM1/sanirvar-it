// utils/formatDate.js
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Format a date string to Bangladesh date format
 * @param {string|Date} date - input date string or Date object
 * @param {string} format - optional, default "DD-MM-YYYY"
 * @returns {string} formatted date
 */
export function formatDateBD(date, format = "DD-MM-YYYY") {
  if (!date) return "-";

  // Convert to Bangladesh timezone
  return dayjs(date).tz("Asia/Dhaka").format(format);
}
