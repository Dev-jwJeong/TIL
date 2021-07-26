import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from  './module';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>,

  document.getElementById('root'),
);
