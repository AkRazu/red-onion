import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="back-bg">
      <div>
        <h1>Best food waiting for your belly</h1>
        <div className="main-search mt-5">
          <div className="search">
            <input
              className="search-input"
              type="text"
              placeholder="Search food items"
            />
            <button className="btn px-5 rounded-pill btn-danger">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
