import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 

const Header3 = () => {
  return (
    <header className="py-2 border-bottom bg-white">
      <Container>
        <Row className="align-items-center">
          {/* Logo */}
          <Col
            xs={12}
            md={3}
            className="text-center text-md-start mb-2 mb-md-0"
          >
            <img
              src="https://grabit-react-next.maraviyainfotech.com/assets/img/logo/logo.png"
              alt="Grabit Logo"
              style={{ height: "40px" }}
            />
          </Col>

          {/* Search Bar */}
          <Col xs={12} md={6}>
            <InputGroup>
              <Form.Control type="text" placeholder="Search Products..." />
              <InputGroup.Text>
                <i className="bi bi-search"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>

          {/* Icons Section */}
          <Col
            xs={12}
            md={3}
            className="d-flex align-items-center justify-content-between justify-content-md-end text-center"
          >
            {/* Menu Icon (Visible Only on Small Screens) */}
            <i className="bi bi-list menu-icon d-md-none"></i>

            {/* Icons Section */}
            <div className="d-flex gap-3">
              <div className="icon-container">
                <i className="bi bi-person"></i>
                <span className="me-3">Account LOGIN</span>
              </div>

              <div className="icon-container">
                <i className="bi bi-heart"></i>
                <span className="me-3">
                  Wishlist <strong>ITEMS</strong>
                </span>
              </div>

              <div className="icon-container">
                <i className="bi bi-bag"></i>
                <span>
                  Cart <strong>ITEMS</strong>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style>
        {`
          .icon-container {
            display: flex;
            align-items: center;
            gap: 8px;
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

    @media (max-width: 768px) {
      .icon-container span {
        display: none;
      }
    }
        `}
      </style>
    </header>
  );
};

export default Header3;
