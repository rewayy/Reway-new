// Navbar.js
import React, { useState, useEffect } from 'react';
import '../src/navbar.css';
import iconImage from './R (1).png';
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavMenu = () => {
    const navContainer = document.querySelector('.nav__item-container');
    navContainer.classList.toggle('open');
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="/">
        <img className="Nav-icon" src={iconImage} alt="" />
      </a>
      <div className="navbar-button" onClick={toggleNavMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </div>
      <div className="nav__item-container">
        <ul className="nav__list collapsible__content nav--collapsible">
          <li className="nav__item">
            <Link to="#home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="#aboutUs" smooth>
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="#contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="nav__item bold">
            <a href="src/comingsoon.js">E-Marketplace</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
