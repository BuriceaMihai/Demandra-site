import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

type NavBarProps = {
  language: string;
  onLanguageChange: (lang: string) => void;
};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="navbar-container">
      <Link to="/prezentare" className="navbar-brand d-flex align-items-center">
        <img src="/demandra.png" className="logo" alt="Demandra Logo" />
      </Link>

      <div className="contact">
        <Link to="/contact" className="contactButton">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
