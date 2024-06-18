import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import logo from "../../assets/letter-n.png"; // Path yang diperbarui
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // Save into local storage
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode ? JSON.parse(storedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container fluid className="containerNotic">
          <Container className="container-head">
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Notic logo"
              />
              <span className="fw-bold">Notic</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="navLink align-items-end"
            >
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/" className="custom-nav-link">
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/aboutUs"
                  className="custom-nav-link"
                >
                  About Us
                </Nav.Link>
                <NavDropdown
                  title="Others"
                  id="basic-nav-dropdown"
                  className="custom-nav-link"
                >
                  <NavDropdown.Item as={NavLink} to="/contactUs">
                    Contact Us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">a</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">b</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">c</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className="custom-login-link"
                >
                  Login
                </Nav.Link>
                <Nav.Link onClick={toggleDarkMode} className="custom-nav-link">
                  <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>

      <div className="content">
        <Outlet />
      </div>

      <footer className="footer">
        <Container>
          <div className="row footer-top">
            <div className="col-md-3">
              <div className="footer-logo-container">
                <img src="/letter-n.png" alt="Notic Logo" className="footer-logo" />
                <h3 className="fw-bold">Notic</h3>
              </div>
              <p>Get Noticed with Notic.</p>
            </div>
            <div className="col-md-2">
              <h5 className="fw-bold">Products</h5>
              <ul className="list-unstyled">
                <li><a href="#">Overview</a></li>
                <li><a href="#">Supplier</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="fw-bold">Company</h5>
              <ul className="list-unstyled">
                <li><a href="/aboutUs">About us</a></li>
                <li><a href="/contactUs">Contact us</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="fw-bold">Further Information</h5>
              <ul className="list-unstyled">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold text-center">Follow us</h5>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-angellist"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center mt-3">
            <p>&copy; 2024 Notic. All rights reserved.</p>
          </div>
          </Container>
      </footer>


    </div>
  );
};

export default Header;
