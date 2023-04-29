import React from "react";
import "./Header.css";
import { FaCog, FaHome, FaPhone, FaQuestion } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";

function Header() {
  return (
    <header className="Header">
      <div className="Header__container">
        <h1 className="Header__title">Smart Inventory Management System</h1>
        <nav className="Header__nav">
          <ul>
            <li>
              <a href="#">
                <FaCog />
              </a>
            </li>
            <li>
              <a href="#">
                <FaPhone />
              </a>
            </li>
            <li>
              <a href="#">
                <FaQuestion />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
