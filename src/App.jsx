import React, { useState } from 'react';
import { Link, Outlet } from 'react-router';
import heart from '../src/assets/Heart.png';

import './App.css';


const App = () => {

  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand fs-2 ms-2" to="/">ToolsHub</Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li className='nav-item'>
                <Link class="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <Outlet />

      {/* // footer section  */}

      <div className=" border border-1  bg-body-tertiary">
        
        <footer className="py-5 px-5 ">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                <Link  className='nav-link p-0 text-body-secondary' to={"/"}>Home</Link>
                </li>
                <li className="nav-item mb-2">
                <Link  className='nav-link p-0 text-body-secondary' to={"/about"}>About</Link>
                </li>
                <li className="nav-item mb-2">
                <Link  className='nav-link p-0 text-body-secondary' to={"/contact"}>Contact</Link>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">About</a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Tools</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link  className='nav-link p-0 text-body-secondary' to={"/currencyConverter"}>Currency Converter</Link>
                  
                </li>
                <li className="nav-item mb-2">
                <Link  className='nav-link p-0 text-body-secondary' to={"/wordCounter"}>Word Counter</Link>
                </li>
                <li className="nav-item mb-2">
                <Link  className='nav-link p-0 text-body-secondary' to={"/passwordGenerator"}>Password Generator</Link>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">About</a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">About</a>
                </li>
              </ul>
            </div>

           
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>Made with Love <img src={heart} alt="" height={20} width={20} /> . All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.288 21C15.832 21 19.96 14.4544 19.96 8.78772C19.96 8.60357 19.96 8.41943 19.952 8.23528C20.752 7.62425 21.448 6.87092 22 6.01715C21.248 6.36033 20.456 6.5947 19.64 6.69514C20.496 6.15945 21.136 5.31404 21.44 4.31798C20.632 4.8202 19.752 5.17175 18.832 5.3559C17.28 3.62324 14.68 3.53954 13.024 5.17175C11.96 6.21804 11.504 7.78328 11.84 9.2732C8.552 9.09742 5.472 7.46521 3.392 4.78671C2.304 6.74537 2.856 9.25646 4.664 10.512C4.008 10.4953 3.376 10.3111 2.8 9.9763C2.8 9.99305 2.8 10.0098 2.8 10.0265C2.8 12.0689 4.176 13.8266 6.096 14.2368C5.488 14.4126 4.856 14.4377 4.24 14.3121C4.776 16.0615 6.32 17.2585 8.072 17.292C6.616 18.4889 4.824 19.1334 2.976 19.1334C2.648 19.1334 2.32 19.1083 2 19.0748C3.88 20.3387 6.056 21 8.288 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="https://github.com/akash200124/">
                  <svg fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" /></svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" /></svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg width="38px" height="38px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5Z" fill="#000000" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0C2.01472 0 0 2.01472 0 4.5V10.5C0 12.9853 2.01472 15 4.5 15H10.5C12.9853 15 15 12.9853 15 10.5V4.5C15 2.01472 12.9853 0 10.5 0H4.5ZM4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5ZM11 4H12V3H11V4Z" fill="#000000" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>


    </>
  );
};

export default App;
