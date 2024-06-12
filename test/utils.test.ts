import { describe, expect, test } from 'vitest';
import { toLowerKebab } from '~/utils/converters';

describe.concurrent('Suite: utils', () => {
  test('Test: toLowerKebab()', async () => {
    const subject = '  Hello how ARE we doing ';

    const result = toLowerKebab(subject);

    expect(result).toEqual('hello-how-are-we-doing');
  });

  // test('Test: isValidEmail()', async () => {
  //   const subjects = [
  //     ['not_an_email', false],
  //     ['not_an.email', false],
  //     ['is@an.email', true],
  //     ['is@also.an.email', true],
  //     ['123@idontevenknow.com', true],
  //     ['abc+1@example.com', true],
  //     ['@example.com', false],
  //   ];

  //   for (const subject of subjects) {
  //     const password = subject[0] as string;
  //     const expected = subject[1] as boolean;
  //     const result = isValidEmail(password);
  //     expect(result).toEqual(expected);
  //   }
  // });

  // test('Test: isValidPassword()', async () => {
  //   const subjects = [
  //     ['thisshouldfail', false],
  //     ['ThisShouldToo', false],
  //     ['This_Will_Again', false],
  //     ['We*reGettingThere', false],
  //     ['Too_Short', false],
  //     ['This_Should_Succeed_10', true],
  //     ['7uWA!W745>2C', true], // generated
  //   ];

  //   for (const subject of subjects) {
  //     const password = subject[0] as string;
  //     const expected = subject[1] as boolean;
  //     const result = isValidPassword(password);
  //     expect(result).toEqual(expected);
  //   }
  // });
});
