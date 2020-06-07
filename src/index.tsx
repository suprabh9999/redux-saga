import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { reducer } from "./store/reducer";
import { executeAll } from "./store/saga";

const logger = (store: any) => {
  return (next: any) => {
    return (action: any) => {
      console.log("[Middleware] dispatching", action);
      const result = next(action);
      console.log("[Middleware] state", store.getState());
      return result;
    };
  };
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk, sagaMiddleware)
);

sagaMiddleware.run(executeAll);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
