import { createAction } from "@reduxjs/toolkit";

export const addNewContact = createAction(
  "contacts/add",
  ({ name, number, id }) => ({
    payload: {
      name,
      number,
      id,
    },
  })
);

export const removeContact = createAction("contacts/remove");
export const onSearchFilter = createAction("contacts/searchFilter");

//====================================================

// import types from "../contacts/contacts-types";

// export const addNewContact = createAction(
//   types.ADD_CONTACT,
//   ({ name, number, id }) => ({
//     payload: {
//       name,
//       number,
//       id,
//     },
//   })
// );

// export const removeContact = createAction(types.REMOVE_CONTACT);

// export const onSearchFilter = createAction(types.SEARCH_FILTER);

// export const addNewContact = ({ name, number, id }) => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     name,
//     number,
//     id,
//   },
// });

// export const removeContact = (id) => ({
//   type: types.REMOVE_CONTACT,
//   payload: id,
// });

// export const onSearchFilter = (value) => ({
//   type: types.SEARCH_FILTER,
//   payload: value,
// });
