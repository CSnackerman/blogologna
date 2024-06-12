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
