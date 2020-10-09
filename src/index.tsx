import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { setTransactionList } from './store/action/PaymentAction';

declare global {
  interface Window { store: any; }
}
const middleware: Array<Middleware> = [ ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

store.dispatch(setTransactionList([]));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
