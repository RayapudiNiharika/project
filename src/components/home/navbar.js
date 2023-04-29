import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarehouse,
  faBars,
  faUsers,
  faBoxes,
  faTruck,
  faExchangeAlt,
  faChartPie,
  faUserCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebar-title">Dashboard</div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/godown">
              <FontAwesomeIcon icon={faWarehouse} />
              <span> Godowns</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/employees">
              <FontAwesomeIcon icon={faUsers} />
              <span> Employees</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/inwards">
              <FontAwesomeIcon icon={faBoxes} />
              <span> Inwards</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/outwards">
              <FontAwesomeIcon icon={faTruck} />
              <span> Outwards</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="Returns">
              <FontAwesomeIcon icon={faExchangeAlt} />
              <span> Returns</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <FontAwesomeIcon icon={faChartPie} />
              <span> Reports</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <FontAwesomeIcon icon={faUserCog} />
              <span> Admin</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span> Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
