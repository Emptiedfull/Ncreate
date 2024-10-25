import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>LITHIUM</h2>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/showcase">Project Showcase</a>
          <a href="/events">Events</a>
          <a href="/timeline">Timeline</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer-address">
        <p>1234 Lithium Street</p>
        <p>Innovation City, IC 56789</p>
        <p>Email: contact@lithium.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Lithium. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
