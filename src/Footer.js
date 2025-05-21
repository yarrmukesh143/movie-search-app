import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with 💙 by <strong>Muku</strong></p>
      <p>Contact: <a href="mailto:yarrmukesh143433@gmail.com">yarrmukesh143433@gmail.com</a></p>
      <p>&copy; {new Date().getFullYear()} Muku. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
