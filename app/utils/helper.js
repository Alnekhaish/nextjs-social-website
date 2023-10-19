import moment from "moment";

export function getDateDifference(createdAt) {
  const mDate1 = moment(createdAt);
  const mDate2 = moment();

  const yearsDiff = mDate2.diff(mDate1, "years");
  if (yearsDiff) {
    return `${yearsDiff} years`;
  }

  const monthsDiff = mDate2.diff(mDate1, "months");
  if (monthsDiff) {
    return `${monthsDiff} months`;
  }

  const daysDiff = mDate2.diff(mDate1, "days");
  if (daysDiff) {
    return `${daysDiff} days`;
  }

  const hoursDiff = mDate2.diff(mDate1, "hours");
  if (hoursDiff) {
    return `${hoursDiff} hours`;
  }

  const minutesDiff = mDate2.diff(mDate1, "minutes");
  return `${minutesDiff} minutes`;
}
