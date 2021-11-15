const isContactExist = (contacts, name) => {
  const normalizedNmae = name.toLocaleLowerCase();
  return contacts.find(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedNmae),
  );
};

export default isContactExist;
