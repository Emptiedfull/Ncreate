import React, { useEffect, useRef, useState } from "react";
import mkv from "./images/out1.webm";
import "./styles/navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.6;
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMouseEnter = (event) => {
    event.target.play();
    event.target.playbackRate = 0.8;
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
  };

  return (
    <nav className="navbar">
      {isMenuOpen && <div className="Overlay" onClick={toggleMenu}></div>}
      <div className="navbar-container">
        <video
          src={mkv}
          alt="Home"
          className="logo"
          loop
          muted
          ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="home">
          <span className="title">
            <a href="/">Lithium</a>
          </span>
        </div>
        {isMobile ? (
          <div>
            <button className="menu-button" onClick={toggleMenu}>
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
            <div className={`dropdown ${isMenuOpen ? "open" : ""}`}>
              <ul className="dropdown-menu">
                <li className="nav-item-drop menu-close">
                  <button className="menu-button" onClick={toggleMenu}>
                    <i
                      className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}
                    ></i>
                  </button>
                </li>

                <li className="nav-item-drop">
                  <a href="/" className="nav-links">
                    Home
                  </a>
                </li>
                <li className="nav-item-drop">
                  <a href="/showcase" className="nav-links">
                    Project-Showcase
                  </a>
                </li>
                <li className="nav-item-drop">
                  <a href="/events" className="nav-links">
                    Events
                  </a>
                </li>
                <li className="nav-item-drop">
                  <a href="/Timeline" className="nav-links">
                    Timeline
                  </a>
                </li>
                <li className="nav-item-drop">
                  <a href="/contact" className="nav-links">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-links">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/showcase" className="nav-links">
                Project Showcase
              </a>
            </li>
            <li className="nav-item">
              <a href="/timeline" className="nav-links">
                Timeline
              </a>
            </li>
            <li className="nav-item">
              <a href="/events" className="nav-links">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-links">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
