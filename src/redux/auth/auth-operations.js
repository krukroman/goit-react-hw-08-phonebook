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

const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/signup`, credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const signin = createAsyncThunk(
  'auth/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/login`, credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.reset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const authOperatins = {
  signup,
  signin,
  logout,
  fetchCurrentUser,
};

export default authOperatins;
