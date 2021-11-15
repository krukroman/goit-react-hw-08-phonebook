import { createReducer, createSlice, combineReducers } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operaions';

const items = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](_, { payload }) {
      return payload;
    },
    [contactsOperations.addContact.fulfilled](state, { payload }) {
      state.push(payload);
    },
    [contactsOperations.deleteContact.fulfilled](state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
    [contactsOperations.updateContact.fulfilled](state, { payload }) {
      return [...state.filter(({ id }) => id !== payload.id), payload];
    },
  },
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

const filter = createReducer('', {
  [contactsOperations.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: items.reducer,
  loading: loading.reducer,
  error: error.reducer,
  filter,
});
