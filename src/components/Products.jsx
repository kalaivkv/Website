import React, { useEffect, useState } from "react";
import "./Products.css";
import nutsImg from "../Images/Image1.jpg";
import cookiesImg from "../Images/Image2.jpg";
import mangoJuiceImg from "../Images/1.jpg";
import datesImg from "../Images/Image3.jpg";
import stickFiberImg from "../Images/Image4.jpg";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Mixed Nuts Berries Pack",
    category: "Dried Fruits",
    image: nutsImg,
    price: "$45.00",
    oldPrice: "$56.00",
    rating: 4,
    badge: "SALE",
  },
  {
    id: 2,
    name: "Multi Grain Combo Cookies",
    category: "Cookies",
    image: cookiesImg,
    price: "$25.00",
    oldPrice: "$30.00",
    rating: 3,
    badge: "SALE",
  },
  {
    id: 3,
    name: "Fresh Mango Juice Pack",
    category: "Foods",
    image: mangoJuiceImg,
    price: "$46.00",
    oldPrice: "$65.00",
    rating: 2,
  },
  {
    id: 4,
    name: "Dates Value Fresh Pouch",
    category: "Dried Fruits",
    image: datesImg,
    price: "$78.00",
    oldPrice: "$85.00",
    rating: 3,
    badge: "SALE",
  },
  {
    id: 5,
    name: "Stick Fiber Masala Magic",
    category: "Foods",
    image: stickFiberImg,
    price: "$45.00",
    oldPrice: "$50.00",
    rating: 1,
    badge: "NEW",
  },
];

const Products = ({ theme }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 21,
    minutes: 9,
    seconds: 40,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
              else clearInterval(interval);
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const countdownColor = theme === "dark" ? "#4fa078" : "#ff6600";

  return (
    <div className="container">
      <div className="products-section">
        <div className="products-header">
          <div className="header-left">
            <h2>
              Day Of The <span className="highlight">Deal</span>
            </h2>
            <p>Don’t wait. The time will never be just right.</p>
          </div>
          <div
            className="countdown"
            style={{
              color: countdownColor,
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            {timeLeft.days} Days {timeLeft.hours} : {timeLeft.minutes} :{" "}
            {timeLeft.seconds}
          </div>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              {product.badge && (
                <span className={`badge ${product.badge.toLowerCase()}`}>
                  {product.badge}
                </span>
              )}
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="icons">
                  {/* <i className="bi bi-cart3 cart"></i>
                  <i className="bi bi-chat-heart wishlist"></i> */}
                </div>
              </div>
              <p className="category">{product.category}</p>
              <h3 className="product-name">{product.name}</h3>
              <div className="rating">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
              <div className="price">
                <span className="new-price">{product.price}</span>
                <span className="old-price">{product.oldPrice}</span>
              </div>
              {product.quantity && (
                <span className="quantity">{product.quantity}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
