// src/components/Footer.tsx
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3 className="header">Navigation</h3>
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
        <Link to="/prezentare" className="footer-link">
          About Us
        </Link>
      </div>
      <div className="footer-center">
        <h3 className="header">Legal</h3>
        <Link to="/terms" className="footer-link">
          Terms & Conditions
        </Link>
        <Link to="/dataprotection" className="footer-link">
          Data Protection
        </Link>
        <Link to="/terms" className="footer-link">
          Cookie Policy
        </Link>
      </div>
      <div className="footer-right">
        <h3 className="header">Social</h3>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/in.png"
            alt="in"
            className="footer-social-icon"
          />
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
