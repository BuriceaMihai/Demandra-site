# React + TypeScript + Vite

Inca nu am ales ce metoda de traducere o sa folosesc, de aceea sunt elemente nefolosite

"# Demandra-site"

Aici o sa tin temporar o pagina

import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

type NavBarProps = {
language: string;
onLanguageChange: (lang: string) => void;
};

const NavBar: React.FC<NavBarProps> = ({ language, onLanguageChange }) => {
return (

<nav className="navbar-container">
<Link to="/prezentare" className="navbar-brand d-flex align-items-center">
<img src="/demandra.png" className="logo" alt="Demandra Logo" />
</Link>

      <div className="language-dropdown">
        <button className="language-btn" type="button">
          <FaGlobe className="language-icon" /> {language}
        </button>
        <div className="dropdown-menu">
          <button
            className="dropdown-item"
            onClick={() => onLanguageChange("EN")}
            type="button"
          >
            English
          </button>
          <button
            className="dropdown-item"
            onClick={() => onLanguageChange("RO")}
            type="button"
          >
            Română
          </button>
        </div>
      </div>
      <div className="contact">
        <Link to="/contact" className="contactButton">
          Contact
        </Link>
      </div>
    </nav>

);
};

export default NavBar;
