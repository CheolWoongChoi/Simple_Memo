import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import firebase from 'firebase';
import rootReducer from 'store';
import { firebaseConfig } from 'constants/config';
import App from './src/App';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
);

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
