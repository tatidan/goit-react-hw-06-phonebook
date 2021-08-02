import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import contactsReducer from "../contacts/contacts-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactsPersistConfig = {
  key: "root",
  storage,
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: { contacts: persistReducer(contactsPersistConfig, contactsReducer) },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

//====================================================

// import { createStore } from "redux";
// import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import counterReducer from "./counter/counter-reducer";
// import { combineReducers } from "redux";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
// });

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });
//const persistedReducer = persistReducer(persistConfig, rootReducer);

// const rootReducer = combineReducers({
//   // counter: counterReducer,
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// const store = configureStore({
//   reducer: { contacts: persistReducer(contactsPersistConfig, contactsReducer) },
//   // reducer: { contacts: persistReducer(persistConfig, contactsReducer) },
//   // reducer: rootReducer,
//   // reducer: persistedReducer,
//   // reducer: {
//   //   contacts: contactsReducer,
//   // },
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// export default store;
