import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfAlt,faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faStar, faStarHalfAlt)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

