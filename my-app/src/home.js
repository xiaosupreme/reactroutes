import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink, Redirect, Link,Navigate } from 'react-router-dom'
import './main.css';


import contact from './components/contact'
import home from './components/home'


// page components
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'


const App = () => {
 
  return (
  <div className='primecontain'>
  <p className='title'>SPA</p>
  <div>
  <div>
  <BrowserRouter>
  <nav className='navbar'>
  <ul className="navbar-list">
  <li className="navbar-item" ><button className="buttonz"><NavLink to="/home">Home</NavLink></button></li>
  <li className="navbar-item" ><button className="buttonz"><NavLink to="/about">About</NavLink></button></li>
  <li className="navbar-item" ><button className="buttonz"><NavLink to="/contact">Contact</NavLink></button></li>
  </ul>
  </nav>
    

    
  <Routes>
    <Route path="/home" element = {<Home />} />
    <Route path="/about" element = {<About />} />
    <Route path="/contact" element = {<Contact />} />
  
    <Route path="/*" element={<Navigate to="/home"/> }/>       
  </Routes>
  </BrowserRouter>
  
  
 
  </div>
  <div>
  
  </div>
  </div>
  </div>
  );
 };
 export default App;