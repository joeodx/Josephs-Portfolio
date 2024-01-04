import React from "react";
import "../styles/Footer.css";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer">
      <div className="footerSymbols">
      <DiGithubBadge />
          <FaLinkedin />
          <FaInstagram /></div>
      <p>&copy; 2023 Joseph-ODonovan-Portfolio.com Built using <FaReact /> </p>
    </div>
  );
}

export default Footer;
