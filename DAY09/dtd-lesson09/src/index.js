import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DtdApp from './DtdApp';

const dtdRoot = ReactDOM.createRoot(document.getElementById('dtdRoot'));
dtdRoot.render(
  <React.StrictMode>
    <DtdApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
