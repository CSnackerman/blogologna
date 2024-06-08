import { describe, expect, test } from 'vitest';
import { toLowerKebab } from '~/utils/converters';

describe.concurrent('Suite: utils', () => {
  test('Test: toLowerKebab()', async () => {
    const subject = '  Hello how ARE we doing ';

    const result = toLowerKebab(subject);

    expect(result).toEqual('hello-how-are-we-doing');
  });
});
