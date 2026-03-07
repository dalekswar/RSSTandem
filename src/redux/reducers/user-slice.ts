import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserPersonalData } from '../../types';

const accessTokenFromStorage = localStorage.getItem('accessToken');
const initialState: UserPersonalData = {
  accessToken: accessTokenFromStorage ? JSON.parse(accessTokenFromStorage).accessToken : '',
  firstName: '',
  lastName: '',
  email: '',
  login: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,

  reducers: {
    auth(state, { payload }: PayloadAction<Pick<UserPersonalData, 'accessToken'>>) {
      state.accessToken = payload.accessToken;

      localStorage.setItem('accessToken', JSON.stringify(payload));
    },

    setUserData(
      state,
      {
        payload: { email, login, firstName, lastName },
      }: PayloadAction<Omit<UserPersonalData, 'accessToken'>>
    ) {
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.login = login;
    },
    logout(state) {
      localStorage.removeItem('accessToken');
      state.accessToken = initialState.accessToken;
      state.email = initialState.email;
      state.firstName = initialState.firstName;
      state.lastName = initialState.lastName;
      state.login = initialState.login;
    },
  },
  selectors: {
    isAuthSelector: (state) => Boolean(state.accessToken),
    userDataSelector: (state) => {
      return {
        email: state.email,
        login: state.login,
        firstName: state.firstName,
        lastName: state.lastName,
      };
    },
  },
});

export const { setUserData, auth, logout } = userSlice.actions;
export const { isAuthSelector, userDataSelector } = userSlice.selectors;
export default userSlice.reducer;
