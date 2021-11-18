import { createSlice } from '@reduxjs/toolkit';
import authOperatins from './auth-operations';
import LOADING_STATUS from 'components/loading-status';

const initialState = {
  user: { name: null, email: null },
  token: null,
  serverError: null,
  isLoggedIn: false,
  isFetchingCurrentUser: LOADING_STATUS.IDLE,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperatins.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = LOADING_STATUS.SUCCESS;
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
      state.isFetchingCurrentUser = LOADING_STATUS.REJECTED;
      if (payload) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
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
      state.isFetchingCurrentUser = LOADING_STATUS.PENDING;
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
