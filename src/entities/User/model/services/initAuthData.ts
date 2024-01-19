import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserById } from '../../api/userApi';
import { User } from '../types/user';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'User/initAuthData',
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(getUserById(userId)).unwrap();

      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue('');
    }
  },
);
