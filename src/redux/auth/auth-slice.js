import { createSlice } from '@reduxjs/toolkit';
import authOperatins from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  serverError: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperatins.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperatins.signup.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperatins.signin.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperatins.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperatins.fetchCurrentUser.rejected](state, { payload }) {
      state.isFetchingCurrentUser = false;
      if (payload) {
        state.serverError = payload;
      }
    },
    [authOperatins.signup.rejected](state, { payload }) {
      state.serverError = payload;
    },
    [authOperatins.signin.rejected](state, { payload }) {
      state.serverError = payload;
    },
    [authOperatins.logout.rejected](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperatins.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
      state.serverError = null;
    },
    [authOperatins.signup.pending](state) {
      state.serverError = null;
    },
    [authOperatins.signin.pending](state) {
      state.serverError = null;
    },
    [authOperatins.logout.pending](state) {
      state.serverError = null;
    },
  },
});

export default authSlice.reducer;
