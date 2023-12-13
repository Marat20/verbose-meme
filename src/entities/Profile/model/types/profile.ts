import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
  INCORRENT_USER_DATA = 'INCORRENT_USER_DATA',
  INCORRENT_AGE = 'INCORRENT_AGE',
  INCORRENT_COUNTRY = 'INCORRENT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  validateErrors?: ValidateProfileError[];
}
