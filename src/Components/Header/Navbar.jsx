import React from 'react'
// import logo from '../../assets/image/logo1.png'
import './Navbar.css'


export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo-box">
        {/* <img src={logo} className='logo' alt="logo" /> */}
        <h1>Agrivista Farms </h1>
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Pages</li>
         <li><a href="#" className='btn-login'>Login</a></li> 
         <li><a href="#" className='btn-signup'>Sign Up</a></li> 
        
        
      </ul>
    </nav>
  );
}
