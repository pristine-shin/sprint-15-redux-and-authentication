import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import * as articleActions from './store/articleReducer';
import './index.css';
import configureStore from './store';

const store = configureStore();

if (import.meta.env.MODE !== 'production') {
  window.store = store;
  window.articleActions = articleActions;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
