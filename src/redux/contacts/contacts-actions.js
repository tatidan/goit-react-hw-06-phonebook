import types from "../contacts/contacts-types";

export const addNewContact = ({ name, number, id }) => ({
  type: types.ADD_CONTACT,
  payload: {
    name,
    number,
    id,
  },
});

export const removeContact = (id) => ({
  types: types.REMOVE_CONTACT,
  payload: id,
});

export const onNameCheck = (newName) => ({
  types: types.NAME_CHECK,
  payload: newName,
});

export const onSearchFilter = (value) => ({
  types: types.SEARCH_FILTER,
  payload: value,
});
