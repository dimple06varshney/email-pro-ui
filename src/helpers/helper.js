import { format, isToday, isYesterday, parseISO } from "date-fns";

const formatDate = (timestamp) => {
    const date = parseISO(timestamp);
    if (isToday(date)) {
      return format(date, 'p'); // e.g., 2:30 PM
    } else if (isYesterday(date)) {
      return 'Yesterday';
    } else {
      return format(date, 'MMM d'); // e.g., Jan 25
    }
  };

  export {
    formatDate
  }