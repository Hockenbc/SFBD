import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';
import logo from "../images/sfbd-logo.png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };


  return  ( 
    <header id="main-header">
        <div id="main-nav" className="grid-container">
            <img id="logo" src ={logo} alt="Logo" />

            <div id="toggle-nav" onClick={handleNavToggle} className={isNavOpen ? "open" : ""}>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <ul id="nav-items" className={`nav-links ${isNavOpen ? "open" : ""}`}>
              <li>
                <Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/findapuppy" onClick={() => setIsNavOpen(false)}>Find A Puppy</Link>
              </li>
              <li>
                <Link to="/pictures" onClick={() => setIsNavOpen(false)}>Pictures</Link>
              </li>
              <li>
                <Link to="/aboutus" onClick={() => setIsNavOpen(false)}>About Us</Link>
              </li>
            </ul>
        </div>
    </header>
  );
}

export default Header;