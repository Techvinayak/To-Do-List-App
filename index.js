import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './App';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'; // Correct path to SLDS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
