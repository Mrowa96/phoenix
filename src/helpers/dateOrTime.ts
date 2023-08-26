export function getFormattedDateTime(date: Date) {
  return date.toLocaleString('pl-PL', {
    dateStyle: 'short',
    timeStyle: 'short',
  });
}
