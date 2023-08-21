import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.scss'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/porfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <App />
   </BrowserRouter>
    
  </React.StrictMode>,
)
