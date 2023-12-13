import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'Admin',
  firstname: 'First',
  lastname: 'Last',
  age: 28,
  country: Country.FRANCE,
  currency: Currency.EUR,
};

describe('loginByUsername.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without firstname and lastname', async () => {
    const result = validateProfileData({
      ...data,
      firstname: '',
      lastname: '',
    });

    expect(result).toEqual([ValidateProfileError.INCORRENT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({
      ...data,
      age: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRENT_AGE]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRENT_COUNTRY]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRENT_USER_DATA,
      ValidateProfileError.INCORRENT_AGE,
      ValidateProfileError.INCORRENT_COUNTRY,
    ]);
  });
});
