import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  reset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

async function authPostMethod(credentials, url) {
  const { data } = await axios.post(`/users/${url}`, credentials);
  token.set(data.token);
  return data;
}

const signup = createAsyncThunk('auth/signup', async credentials => {
  try {
    authPostMethod(credentials, 'signup');
  } catch (error) {}
});

const signin = createAsyncThunk('auth/signin', async credentials => {
  try {
    authPostMethod(credentials, 'login');
  } catch (error) {}
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.reset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {}
  },
);
