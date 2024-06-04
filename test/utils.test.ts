import { describe, expect, test } from 'vitest';
import { toLowerKebab } from '~/utils/converters';
import { fakeFetch } from '~/utils/data';

describe.concurrent('Suite: utils', () => {
  test('Test: toLowerKebab()', async () => {
    const subject = '  Hello how ARE we doing ';

    const result = toLowerKebab(subject);

    expect(result).toEqual('hello-how-are-we-doing');
  });

  test('Test: fakeFetch()', async () => {
    const data = { hello: 'there' };

    await expect(fakeFetch(data, 50, 0)).resolves.toEqual(data);

    await expect(fakeFetch(data, 50, 100)).rejects.toThrowError(
      'fake fetch failed'
    );
  });
});
