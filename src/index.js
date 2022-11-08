import React from 'react';
import ReactDOM from 'react-dom/client';


// import App from './components/App';
import App from './components/App';

import Firebase from "./firebase";
console.log(Firebase);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


