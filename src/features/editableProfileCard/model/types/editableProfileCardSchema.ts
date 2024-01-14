import { Profile } from 'entities/Profile';

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  validateErrors?: ValidateProfileError[];
}

export enum ValidateProfileError {
  INCORRENT_USER_DATA = 'INCORRENT_USER_DATA',
  INCORRENT_AGE = 'INCORRENT_AGE',
  INCORRENT_COUNTRY = 'INCORRENT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}
