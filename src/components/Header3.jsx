import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import {
  FaHome,
  FaThLarge,
  FaShoppingBag,
  FaBlog,
  FaFileAlt,
  FaTags,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header3 = ({ selectedColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const menuItems = [
    { name: "Home", icon: <FaHome size={18} />, options: ["Grocery", "Fashion", "Fashion2"] },
    { name: "Categories", icon: <FaThLarge size={18} />, options: ["Option 1", "Option 2"] },
    { name: "Products", icon: <FaShoppingBag size={18} />, options: ["Option 1", "Option 2"] },
    { name: "Blog", icon: <FaBlog size={18} />, options: ["Option 1", "Option 2"] },
    { name: "Pages", icon: <FaFileAlt size={18} />, options: ["Option 1", "Option 2"] },
    { name: "Offers", icon: <FaTags size={18} />, options: ["Option 1", "Option 2"] },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="py-2 border-bottom bg-white position-relative">
      <Container>
        <Row className="align-items-center">
          <Col xs={2} className="d-md-none text-start">
            <i className="bi bi-list menu-icon" onClick={() => setMenuOpen(true)}></i>
          </Col>

          <Col xs={8} md={3} className="text-center text-md-start mb-2 mb-md-0">
            <img
              src="https://grabit-react-next.maraviyainfotech.com/assets/img/logo/logo.png"
              alt="Grabit Logo"
              style={{ height: "40px" }}
            />
          </Col>

          <Col xs={12} md={6} className="d-none d-md-block">
            <InputGroup>
              <Form.Control type="text" placeholder="Search Products..." />
              <InputGroup.Text>
                <i className="bi bi-search"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>

          <Col xs={2} md={3} className="d-flex align-items-center justify-content-end">
            <div className="d-flex gap-3">
              <div className="icon-container"><i className="bi bi-person"></i></div>
              <div className="icon-container"><i className="bi bi-heart"></i></div>
              <div className="icon-container"><i className="bi bi-bag"></i></div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className={`full-screen-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-content" ref={menuRef}>
          <i className="bi bi-x close-icon" onClick={() => setMenuOpen(false)}></i>
          <h2 className="menu-title">Explore</h2>
          <div className="menu-dropdowns">
            {menuItems.map((item, index) => (
              <Dropdown key={index} className="menu-item">
                <Dropdown.Toggle
                  className="menu-toggle"
                  style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    border: `1px solid ${selectedColor}`,
                  }}
                >
                  {item.icon}
                  <span className="menu-text">{item.name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-custom">
                  {item.options.map((option, i) => (
                    <Dropdown.Item key={i} href="#">
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .icon-container {
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: color 0.3s ease-in-out;
          }
          .icon-container i {
            font-size: 1.5rem;
          }
          .icon-container:hover i {
            color: rgb(79, 160, 120); 
          }
          .menu-icon {
            font-size: 1.8rem;
            cursor: pointer;
            transition: color 0.3s ease-in-out;
          }
          .menu-icon:hover {
            color: rgb(79, 160, 120);
          }
          .full-screen-menu {
            position: fixed;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            transition: left 0.4s ease-in-out;
          }
          .full-screen-menu.open {
            left: 0;
          }
          .menu-content {
            width: 90%;
            max-width: 400px;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
            text-align: center;
          }
          .menu-title {
            font-size: 1.8rem;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 20px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 10px;
          }
          .menu-dropdowns {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .menu-item {
            width: 100%;
          }
          .menu-toggle {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            background-color: rgb(79, 160, 120);
            color: white;
            border: none;
            padding: 12px;
            font-size: 1.1rem;
            font-weight: bold;
            border-radius: 8px;
            transition: background 0.3s ease-in-out, transform 0.2s;
          }
          .menu-toggle:hover {
            background-color: rgb(60, 130, 100);
            transform: scale(1.05);
          }
          .menu-text {
            flex: 1;
            text-align: left;
          }
          .dropdown-menu-custom {
            background: white;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
          }
          .dropdown-menu-custom .dropdown-item {
            color: black;
            padding: 10px;
            text-align: center;
            transition: background 0.3s ease-in-out;
          }
          .dropdown-menu-custom .dropdown-item:hover {
            background: rgb(240, 240, 240);
          }
          .close-icon {
            font-size: 2.4rem;
            position: absolute;
            top: 20px;
            right: 30px;
            cursor: pointer;
            color: white;
            transition: color 0.3s;
          }
          .close-icon:hover {
            color: rgb(79, 160, 120);
          }
        `}
      </style>
    </header>
  );
};

export default Header3;
