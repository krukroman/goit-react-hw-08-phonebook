import { createSlice, combineReducers } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operaions';
import LOADING_STATUS from 'components/loading-status';

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
  initialState: LOADING_STATUS.IDLE,
  extraReducers: {
    [contactsOperations.fetchContacts.pending]() {
      return LOADING_STATUS.PENDING;
    },
    [contactsOperations.addContact.pending]() {
      return LOADING_STATUS.PENDING;
    },
    [contactsOperations.deleteContact.pending]() {
      return LOADING_STATUS.PENDING;
    },
    [contactsOperations.updateContact.pending]() {
      return LOADING_STATUS.PENDING;
    },
    [contactsOperations.fetchContacts.rejected]() {
      return LOADING_STATUS.REJECTED;
    },
    [contactsOperations.addContact.rejected]() {
      return LOADING_STATUS.REJECTED;
    },
    [contactsOperations.deleteContact.rejected]() {
      return LOADING_STATUS.REJECTED;
    },
    [contactsOperations.updateContact.rejected]() {
      return LOADING_STATUS.REJECTED;
    },
    [contactsOperations.fetchContacts.fulfilled]() {
      return LOADING_STATUS.SUCCESS;
    },
    [contactsOperations.addContact.fulfilled]() {
      return LOADING_STATUS.SUCCESS;
    },
    [contactsOperations.deleteContact.fulfilled]() {
      return LOADING_STATUS.SUCCESS;
    },
    [contactsOperations.updateContact.fulfilled]() {
      return LOADING_STATUS.SUCCESS;
    },
    [contactsOperations.resetLoadingStatus]() {
      return LOADING_STATUS.IDLE;
    },
  },
});

const serverError = createSlice({
  name: 'serverError',
  initialState: null,
  extraReducers: {
    [contactsOperations.fetchContacts.rejected](_, { payload }) {
      return payload;
    },
    [contactsOperations.addContact.rejected](_, { payload }) {
      return payload;
    },
    [contactsOperations.deleteContact.rejected](_, { payload }) {
      return payload;
    },
    [contactsOperations.updateContact.rejected](_, { payload }) {
      return payload;
    },
    [contactsOperations.fetchContacts.pending]() {
      return null;
    },
    [contactsOperations.addContact.pending]() {
      return null;
    },
    [contactsOperations.deleteContact.pending]() {
      return null;
    },
    [contactsOperations.updateContact.pending]() {
      return null;
    },
  },
});

const filter = createSlice({
  name: 'filter',
  initialState: '',
  extraReducers: {
    [contactsOperations.changeFilter](_, { payload }) {
      return payload;
    },
  },
});

export default combineReducers({
  items: items.reducer,
  loading: loading.reducer,
  serverError: serverError.reducer,
  filter: filter.reducer,
});
