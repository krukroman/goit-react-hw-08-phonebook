const isNameExist = (contacts, name) => {
  const normalizedName = name.toLocaleLowerCase();
  return contacts.find(
    contact => contact.name.toLocaleLowerCase() === normalizedName,
  );
};

const isNumberExist = (contacts, number) => {
  return contacts.find(contact => contact.number === number);
};

const isContactExist = { isNameExist, isNumberExist };

export default isContactExist;
