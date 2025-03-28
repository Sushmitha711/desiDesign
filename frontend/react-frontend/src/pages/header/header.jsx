import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'active' : ''}`}>
      <div className="logo">
        <h1>DesiDesigns</h1>
      </div>
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/collections">Collections</Link></li>
          <li><Link to="/our-work">Our Work</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/book">Book An Appointment</Link></li>
          <li><Link to="/location">Location</Link></li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
