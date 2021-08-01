import { combineReducers } from "redux";
import types from "./contacts-types";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];
    case types.REMOVE_CONTACT:
      return state.filter(({ id }) => id !== payload);
    case types.NAME_CHECK:
      return state.filter(
        ({ name }) => name.toLowerCase() === payload.toLowerCase()
      );

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.SEARCH_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ contacts, filter });
