export const formatDate = (date: string | null | undefined | Date | number, onlyDate?: boolean) => {
  if (!date) return "Ingen dato";
  const dateIsUnix = date.toString().length === 10;

  let dateObject = new Date(date);
  if (typeof date === 'number' && dateIsUnix) dateObject = new Date(date * 1000);

  const hours = ("0" + dateObject.getHours()).slice(-2);
  const minutes = ("0" + dateObject.getMinutes()).slice(-2);
  const seconds = ("0" + dateObject.getSeconds()).slice(-2);
  const formattedTime = hours + ':' + minutes + ':' + seconds;
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  if (onlyDate) return dateObject.toLocaleDateString('nb-NO', options);
  return dateObject.toLocaleDateString('nb-NO', options) + " " + formattedTime;
}
