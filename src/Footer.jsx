import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          
          {/* Left Section - Logo & Description */}
          <div className="footer-brand">
            <img src="https://grabit-react-next.maraviyainfotech.com/assets/img/logo/logo.png" alt="Grabit Logo" className="footer-logo"/>
            <p>Grabit is the biggest market of grocery products. Get your daily needs from our store.</p>

            {/* Store Buttons */}
            <div className="app-buttons">
              <img src="https://grabit-react-next.maraviyainfotech.com/assets/img/app/android.png" alt="Google Play" className="store-btn"/>
              <img src="https://grabit-react-next.maraviyainfotech.com/assets/img/app/apple.png" alt="App Store" className="store-btn"/>
            </div>
          </div>

          {/* Middle Sections - Categories, Company, Account */}
          <div className="footer-links">
            <h3>Category</h3>
            <ul>
              <li>Dried Fruit</li>
              <li>Cookies</li>
              <li>Foods</li>
              <li>Fresh Fruit</li>
              <li>Tuber Root</li>
              <li>Vegetables</li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Delivery</li>
              <li>Legal Notice</li>
              <li>Terms & conditions</li>
              <li>Secure payment</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Account</h3>
            <ul>
              <li>Sign In</li>
              <li>View Cart</li>
              <li>Return Policy</li>
              <li>Become a Vendor</li>
              <li>Affiliate Program</li>
              <li>Payments</li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div className="footer-contact">
            <h3>Contact</h3>
            <p><FaMapMarkerAlt  /> 2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
            <p><FaWhatsapp  /> +00 9876543210</p>
            <p><FaEnvelope  /> example@email.com</p>

            {/* Social Icons */}
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
