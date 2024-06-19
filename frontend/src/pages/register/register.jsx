import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import "./register.css";
import NoticLogo from "../../assets/letter-n.png";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { username, email, pass, role };

    try {
      const response = await fetch("http://localhost:3004/register/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success("Registration successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Redirect to login page after a short delay to show the toast
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        // Handle error
        const errorData = await response.json();
        setError(errorData.message);
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      setError("Failed to register. Please try again later.");
      console.error("Error:", error);
    }
  };

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
    <div className="register-page">
      <ToastContainer />
      <div className="wave-container-atas mb-5">
        <img
          src="/waveatas.png"
          alt="Wave"
          className="wave-image-atas mb-5"
        />
      </div>
      <div className="logo-container">
        <img
          src={NoticLogo}
          width="40"
          height="auto"
          className="d-inline-block align-top ms-4 mt-3"
          alt="Notic logo"
        />
        <span className="fw-bold ms-2 mt-3 register-title">Notic</span>
      </div>
      <div className="register-container">
        <Card className="register-card">
          <Card.Body className="register-card-body">
            <div className="back-to-landing mb-3">
              <Link to="/" className="text-decoration-none">
                <FaArrowLeft className="me-2" />
              </Link>
            </div>
            <Card.Title className="register-title text-center fw-bold mb-4">
              Register
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formUsername" className="mb-3">
                    <Form.Label className="bold">Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label className="bold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@notic.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label className="bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Input password"
                  value={pass}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {error && <p className="text-danger">{error}</p>}

              <div className="d-flex justify-content-center mb-3">
                <Button type="submit" className="btn-register w-50">
                  Register
                </Button>
              </div>
            </Form>

            <div className="text-left mb-3 register-putih">
              Already have an account?{" "}
              <a href="/login" className="text-decoration-none">
                Login here
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Register;
