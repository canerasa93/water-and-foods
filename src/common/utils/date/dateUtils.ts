export function unixTimeStampToDate(stamp) {
  const date = new Date(stamp * 1000);

  return date;
}
