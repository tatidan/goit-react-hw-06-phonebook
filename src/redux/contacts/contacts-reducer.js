import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addNewContact } from "./contacts-actions";
import { onSearchFilter } from "./contacts-actions";

const contacts = createReducer([], {
  [addNewContact]: (state, action) => [...state, action.payload],
  "contacts/remove": (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [onSearchFilter]: (_, action) => action.payload,
});

export default combineReducers({ contacts, filter });

//====================================================

// import types from "./contacts-types";

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload];
//     case types.REMOVE_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.SEARCH_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

//const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case "contacts/searchFilter":
//       return payload;
//     default:
//       return state;
//   }
// };
