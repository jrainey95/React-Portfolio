// import React from 'react'
// import ReactDOM from 'react-dom'
// import reportWebVitals from './reportWebVitals'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App'
// import './index.css'

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     ,
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()

import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import './index.css';

const root = createRoot(document.getElementById('root')); // Use createRoot

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
