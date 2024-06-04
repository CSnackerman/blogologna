import { randomChance } from './random';

export async function fakeFetch<T>(data: T, delay: number, failChance: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const fail = randomChance(failChance);

    if (fail) {
      setTimeout(() => reject('fake fetch failed'));
      return;
    }

    setTimeout(() => resolve(data), delay);
  });
}
