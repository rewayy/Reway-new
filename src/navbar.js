import React, { useState, useEffect } from 'react';
import '../src/navbar.css';
import iconImage from './R (1).png';

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
      <a href="#">
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
          <li className="nav__item"><a href="#">Home</a></li>
          <li className="nav__item"><a href="#">About</a></li>
          <li className="nav__item"><a href="#">Contact</a></li>
          <li className="nav__item"><a href="#">Blogs</a></li>
          <li className="nav__item bold"><a href="#">E-Marketplace</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
