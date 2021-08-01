import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/contacts/store";
// import { myAction } from "./redux/actions";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// console.log(store.getState());
// console.log(store.dispatch(myAction));
// // store.dispatch(myAction);
// store.dispatch(myAction(10));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
