import { createSlice, combineReducers } from '@reduxjs/toolkit';

const items = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {},
});

const loading = createSlice({
  name: 'loading',
  initialState: false,
  extraReducers: {},
});

const error = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: {},
});

const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {},
});

export default combineReducers({
  items: items.reducer,
  loading: loading.reducer,
  error: error.reducer,
  filter: filter.reducer,
});
