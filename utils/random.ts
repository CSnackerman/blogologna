export function randomChance(percent: number) {
  if (percent < 0 || percent > 100) {
    throw 'Percent must be a value between 0 and 100';
  }
  return Math.random() * 100 < percent;
}
