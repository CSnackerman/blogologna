export function getCountOfTrue(arr: boolean[]) {
  let count = 0;
  for (const b of arr) {
    if (b === true) count++;
  }

  return count;
}
