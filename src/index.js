import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import root from "./store/Root"
import { createStore } from "redux"
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const mystore = createStore(root, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

