import { type DateValue, DateFormatter, getLocalTimeZone, parseDate } from "@internationalized/date";

const dateFormatter = new DateFormatter("id-ID", {
  dateStyle: "long",
});

export const dateTimeUtil = {
  formatDateLongStyle: (date: string | DateValue): string => {
    const dateValue = typeof date === "string" ? parseDate(date) : date;
    return dateFormatter.format(dateValue.toDate(getLocalTimeZone()));
  },
};
