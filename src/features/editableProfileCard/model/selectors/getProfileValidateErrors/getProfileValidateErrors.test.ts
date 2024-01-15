import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('should return value', () => {
    const data = [
      ValidateProfileError.INCORRENT_AGE,
      ValidateProfileError.INCORRENT_COUNTRY,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: data,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
