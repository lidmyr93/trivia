import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { categoriesReducer } from "./reducers/index";

const middlewares = [thunk];
let devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production") {
  devTools = (a) => a;
}

const store = createStore(
  categoriesReducer,
  compose(applyMiddleware(...middlewares), devTools)
);
/* const store = createStore(reducers, applyMiddleware(...middlewares)); */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
