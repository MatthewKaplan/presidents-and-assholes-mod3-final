import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./Reducers/index";

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));


serviceWorker.unregister();
