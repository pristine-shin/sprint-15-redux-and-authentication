import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { populateProduce } from './store/produce'
import { addToCart } from './store/cart';
import App from './App';
import './index.css';

const store = configureStore();

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
  window.addToCart = addToCart;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
