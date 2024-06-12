import type { RegisterPasswordError } from './validate_registrant';

/**
 * 10+ characters
 * 1+  capital letter
 * 1+  special character
 * 1+  numeric character
 */
export function getRegisterPasswordInvalids(password: string): RegisterPasswordError {
  const capitalCharRegex = /[A-Z]+/;
  const specialCharRegex = /[!@#$%^&*()\-_=+]+/;
  const numericRegex = /\d+/;
  const containsCapitalChar = capitalCharRegex.test(password);
  const containsSpecialChar = specialCharRegex.test(password);
  const containsNumericChar = numericRegex.test(password);
  const length10Plus = password.length >= 10;
  const isNotEmpty = password.length > 0;

  const count = getCountOfTrue([
    !isNotEmpty,
    !length10Plus,
    !containsCapitalChar,
    !containsNumericChar,
    !containsSpecialChar,
  ]);

  return {
    errorCount: count,
    empty: !isNotEmpty,
    tooShort: !length10Plus,
    missingCapital: !containsCapitalChar,
    missingSpecial: !containsSpecialChar,
    missingNumeric: !containsNumericChar,
  };
}

export const defaultRegisterPasswordError: RegisterPasswordError = {
  errorCount: 5,
  empty: true,
  tooShort: true,
  missingCapital: true,
  missingSpecial: true,
  missingNumeric: true,
};
