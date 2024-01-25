import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  LOCAL_STORAGE_LAST_DESIGN_KEY,
  USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/features';

import { initAuthData } from '../services/initAuthData';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        action.payload.features?.isAppRedesigned ? 'new' : 'old',
      );
    },

    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      initAuthData.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.authData = action.payload;
        setFeatureFlags(action.payload.features);
        state._inited = true;
      },
    );
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true;
    });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
