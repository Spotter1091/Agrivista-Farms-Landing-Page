import React, {useState} from 'react'
// import logo from '../../assets/image/logo1.png';
import { FaBars } from "react-icons/fa";
import './Navbar.css'



export const Navbar = () => {

   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
     setIsMobileMenuOpen(!isMobileMenuOpen);
   };


const style = { color: "black", fontSize: "2em" };


  return (
    <nav className="nav-container">
      <div className="logo-box">
        {/* <img src={logo} className='logo' alt="logo" /> */}
        <h1>Agrivista Farms </h1>
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Us</li>
        <li>Pages</li>
        <li>
          
          <a href="#" className="btn-login">
            Login
          </a>
        </li>
        <li>
          <a href="#" className="btn-signup">
            Sign Up
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <FaBars style={style} />
      </div>
    </nav>
  );
}
