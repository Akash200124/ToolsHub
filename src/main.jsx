import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import CurrencyConverter from './Tools/CurrencyConverter.jsx';
import WordCounter from './Tools/WordCounter.jsx';
import PasswordGenerator from './Tools/PasswordGenerator.jsx';
import JsonParser from './Tools/JsonParser.jsx'
import ImageToPdfConverter from './Tools/ImageToPdfConverter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        )
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/currencyConverter",
        element: <CurrencyConverter />
      },
      {
        path: "*",
        element: <h1>404 Not Found</h1>
      },
      {
        path: '/wordCounter',
        element: <WordCounter />
      },
      {
        path: '/passwordGenerator',
        element: <PasswordGenerator />
      },
      {
        path: '/jsonFormatter',
        element: <JsonParser />
      },
      {
        path: '/imageToPdfConverter',
        element: <ImageToPdfConverter />
       
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
