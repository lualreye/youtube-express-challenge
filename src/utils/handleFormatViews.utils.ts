export function handleFormatCounter(views: number): string {
  if (views < 1000) {
    return views.toString();
  } else if (views < 1000000) {
      return (views / 1000).toFixed(1) + 'K';
  } else {
      return (views / 1000000).toFixed(1) + 'M';
  }
}