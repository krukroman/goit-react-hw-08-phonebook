import { createSelector } from 'reselect';

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getLoadingStatus = state => state.contacts.loading;

const getError = state => state.contacts.serverError;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return [...contacts]
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter(({ name }) =>
        name.toLocaleLowerCase().includes(normalizedFilter),
      );
  },
);

const contactsSelectors = {
  getContacts,
  getFilter,
  getLoadingStatus,
  getError,
  getFilteredContacts,
};

export default contactsSelectors;
