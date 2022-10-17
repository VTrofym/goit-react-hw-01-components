import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const currentstate = { a: 2, b: 3, c: 7, d: 9 };
// const updateSlice = { b: 5, d: 4 };
// const nextState = { ...currentstate, ...updateSlice }
// console.log(nextState)

