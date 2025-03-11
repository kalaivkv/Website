import React from "react";
import "./Advertisement.css"; // Import CSS file
import adImage from "./Images/Image9.jpg"; // Update path as needed

const Advertisement = () => {
  return (
    <div className="container">
        <div className="ad-container">
      {/* Background Image */}
      <img src={adImage} alt="Fresh Fruits" className="ad-image" />

      {/* Text Content */}
      <div className="ad-content">
        <h2>Fresh Fruits <br /> Healthy Products</h2>
        <p><span className="highlight">30% off sale</span> Hurry up!!!</p>

        {/* Shop Now Button */}
        <button className="shop-btn">Shop now</button>
      </div>
    </div>
    </div>
  );
};

export default Advertisement;
