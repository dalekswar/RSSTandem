import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserStateType } from '../../types';

const authDataFromStorage = localStorage.getItem('authData');
const initialState: UserStateType = authDataFromStorage
  ? JSON.parse(authDataFromStorage)
  : {
      login: '',
    };

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    auth(state, action: PayloadAction<Pick<UserStateType, 'login'>>) {
      state.login = action.payload.login;

      localStorage.setItem('authData', JSON.stringify(action.payload));
    },

    logout(state) {
      state.login = '';
    },
  },
});

export const { auth, logout } = userSlice.actions;

export default userSlice.reducer;
