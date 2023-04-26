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
import "./Welcome.css";

const Welcome = () => {
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
            <a href="#">
              <FontAwesomeIcon icon={faWarehouse} />
              <span> Godowns</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <FontAwesomeIcon icon={faUsers} />
              <span> Employees</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <FontAwesomeIcon icon={faBoxes} />
              <span> Inwards</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <FontAwesomeIcon icon={faTruck} />
              <span> Delivery</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
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
      <h1 className="text-center text-white my-3">Welcome To The SIM</h1>
      <div className="godown-content my-10">
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Blogs</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="image card-img-top"
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Our Clients</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="image card-img-top"
                src="https://images.pexels.com/photos/6044812/pexels-photo-6044812.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">About Us</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.pexels.com/photos/221164/pexels-photo-221164.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">FAQ</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
