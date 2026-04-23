import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="logo-icon"><path d="M11 20A7 7 0 0 1 4 13V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a7 7 0 0 1-7 7z"></path><path d="M4 13h10"></path></svg>
          <span className="logo-text">Fillo</span>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#pages">Pages</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        <div className="nav-actions">
          <button className="btn btn-accent" onClick={onJoinClick}>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
