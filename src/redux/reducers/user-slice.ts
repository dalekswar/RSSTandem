import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { accessToken } from '../../types';

const accessTokenFromStorage = localStorage.getItem('accessToken');
const initialState: accessToken = accessTokenFromStorage
  ? JSON.parse(accessTokenFromStorage)
  : {
      accessToken: null,
    };

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    auth(state, action: PayloadAction<accessToken>) {
      state.accessToken = action.payload.accessToken;

      localStorage.setItem('accessToken', JSON.stringify(action.payload));
    },

    logout(state) {
      state.accessToken = null;
      localStorage.removeItem('accessToken');
    },
  },
});

export const { auth, logout } = userSlice.actions;

export default userSlice.reducer;
