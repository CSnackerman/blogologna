export interface RegisterEmailError {
  errorCount: number;
  empty: boolean;
  invalid: boolean;
}

export interface RegisterPasswordError {
  errorCount: number;
  empty: boolean;
  tooShort: boolean;
  missingCapital: boolean;
  missingNumeric: boolean;
  missingSpecial: boolean;
}

interface RegisterEmailPasswordError {
  email: RegisterEmailError;
  password: RegisterPasswordError;
}

export function isValidRegistrantCredentials(
  email: string,
  password: string,
): RegisterEmailPasswordError {
  const emailInvalids = getRegisterEmailInvalids(email);
  const passwordInvalids = getRegisterPasswordInvalids(password);

  return {
    email: emailInvalids,
    password: passwordInvalids,
  };
}
