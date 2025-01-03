import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// import { PersistGate } from 'redux-persist/integration/react'; // Ensure redux-persist is installed
// import { persistor } from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import CurrencyConverter from './Tools/CurrencyConverter.jsx';
import WordCounter from './Tools/WordCounter.jsx';
import PasswordGenerator from './Tools/PasswordGenerator.jsx';
import JsonParser from './Tools/JsonParser.jsx'

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
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
