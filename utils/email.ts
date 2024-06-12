import type { RegisterEmailError } from './validate_registrant';

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
    return 'please provide an email address';
  }

  if (emailError.invalid) {
    return 'please provide a valid email address';
  }

  return '';
}

export const defaultRegisterEmailError: RegisterEmailError = {
  errorCount: 2,
  empty: true,
  invalid: true,
};
