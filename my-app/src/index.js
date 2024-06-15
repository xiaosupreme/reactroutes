import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Loginform from './Loginform';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>

 <Loginform/>
 </React.StrictMode>
);
reportWebVitals();