import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Board Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#main">Products</a>
        </li>
        <li>
          <a href="#games">App & Games</a>
        </li>
        <li>
          <a href="#about">Features</a>
        </li>
        <li>
          <a href="#contact">Support</a>
        </li>
      </ul>
      <div className="shop-icon">
        <img src="bagIcon.png" alt="Shop" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
