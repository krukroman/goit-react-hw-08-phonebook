import { createSelector } from 'reselect';
const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

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
  getFilteredContacts,
};

export default contactsSelectors;
