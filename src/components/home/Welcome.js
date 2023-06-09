import React, { useState } from "react";
import Navbar from "./navbar";
import "./Welcome.css";

const Welcome = () => {
  return (
    <>
      <Navbar />
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
                  Stay up-to-date with the latest inventory management app and
                  software updates on our informative blog.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more...
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
                  Our past clients, trust our services for efficient inventory
                  tracking, and restocking management solutions.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more...
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
                  Our smart inventory management app simplifies tracking, and
                  restocking for businesses of any size.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more...
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
                  Get answers to common questions on app operation, security
                  features, and more with our comprehensive FAQ page.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more...
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
