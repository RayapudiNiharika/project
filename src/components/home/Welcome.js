import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <button className="openbtn" onClick={handleNavToggle}>
        ☰ Menu
      </button>
      <div className={navOpen ? "navbar" : "navbar closed"}>
        <Link to="/" className="closebtn" onClick={handleNavToggle}>
          &times;
        </Link>
        <Link to="/" onClick={handleNavToggle}>
          Home
        </Link>
        <Link to="/about" onClick={handleNavToggle}>
          About
        </Link>
        <Link to="/services" onClick={handleNavToggle}>
          Services
        </Link>
        <Link to="/contact" onClick={handleNavToggle}>
          Contact
        </Link>
        <Link to="/login" onClick={handleNavToggle}>
          Login
        </Link>
        <Link to="/signup" onClick={handleNavToggle}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
