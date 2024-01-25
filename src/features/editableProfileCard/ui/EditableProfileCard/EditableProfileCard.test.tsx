import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  firstname: 'admin',
  lastname: 'admin',
  age: 465,
  currency: Currency.USD,
  country: Country.FRANCE,
  city: 'Moscow',
  username: 'user123',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'user123',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/editableProfileCard', () => {
  test('Readonly mode must toggle', () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    waitFor(async () => {
      const editBtn = screen.getByTestId(
        'EditableProfileCardHeader.EditButton',
      );
      await userEvent.click(editBtn);
      expect(
        screen.getByTestId('EditableProfileCardHeader.CancelButton'),
      ).toBeInTheDocument();
    });
  });

  test('When canceling the values should be reset to zero', () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    waitFor(async () => {
      const editBtn = screen.getByTestId(
        'EditableProfileCardHeader.EditButton',
      );
      const cancelBtn = screen.getByTestId(
        'EditableProfileCardHeader.CancelButton',
      );
      const firstnameInput = screen.getByTestId('ProfileCard.firstname');
      const lastnameInput = screen.getByTestId('ProfileCard.lastname');

      await userEvent.click(editBtn);
      await userEvent.clear(firstnameInput);
      await userEvent.clear(lastnameInput);

      await userEvent.type(firstnameInput, 'user');
      await userEvent.type(lastnameInput, 'user');

      expect(firstnameInput).toHaveValue('user');
      expect(lastnameInput).toHaveValue('user');

      await userEvent.click(cancelBtn);

      expect(firstnameInput).toHaveValue('admin');
      expect(lastnameInput).toHaveValue('admin');
    });
  });

  test('An error should appear', () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    waitFor(async () => {
      const editBtn = screen.getByTestId(
        'EditableProfileCardHeader.EditButton',
      );
      const saveBtn = screen.getByTestId(
        'EditableProfileCardHeader.SaveButton',
      );
      const firstnameInput = screen.getByTestId('ProfileCard.firstname');

      await userEvent.click(editBtn);

      await userEvent.clear(firstnameInput);

      await userEvent.click(saveBtn);

      expect(
        screen.getByTestId('EditableProfileCardHeader.Error.Paragraph'),
      ).toBeInTheDocument();
    });
  });

  test('If there are no validation errors, then a PUT request should go to the server ', () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    waitFor(async () => {
      const editBtn = screen.getByTestId(
        'EditableProfileCardHeader.EditButton',
      );
      const saveBtn = screen.getByTestId(
        'EditableProfileCardHeader.SaveButton',
      );
      const firstnameInput = screen.getByTestId('ProfileCard.firstname');

      const mockPutReq = jest.spyOn($api, 'put');

      await userEvent.click(editBtn);

      await userEvent.type(firstnameInput, 'user');

      await userEvent.click(saveBtn);

      expect(mockPutReq).toHaveBeenCalled();
    });
  });
});
