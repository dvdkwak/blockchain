/**
 * Timestamp is an interface for the timestamps asked in blocks.
 * Requires date {string} (dd-mm-yyyy)
 * And time {string} (hh:mm)
 */
export interface Timestamp {
  date: string;
  time: string;
}
