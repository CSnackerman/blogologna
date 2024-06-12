import type { RegisterEmailError } from './validate_registrant';

export const defaultRegisterEmailError: RegisterEmailError = {
  errorCount: 2,
  empty: true,
  invalid: true,
};

export function getRegisterEmailInvalids(email: string): RegisterEmailError {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // chatgpt
  const isValid = emailRegex.test(email);
  const isNotEmpty = email.length > 0;

  const count = getCountOfTrue([!isValid, !isNotEmpty]);

  return {
    errorCount: count,
    empty: !isNotEmpty,
    invalid: !isValid,
  };
}

export function getRegisterEmailErrorMessage(emailError: RegisterEmailError): string {
  if (emailError.empty) {
    return 'missing email address';
  }

  if (emailError.invalid) {
    return 'invalid email address';
  }

  return '';
}
