import React, { useState, useContext, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./login.css";
import NoticLogo from "../../assets/letter-n.png";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3004/login/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, pass }),
      });

      const data = await response.json();
      console.log("Response dari server:", data);

      if (response.ok) {
        const { token, role, ...user } = data;
        console.log("Role dari server:", role);
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        login(user);
        console.log("Login berhasil, mengarahkan ke dashboard...");

        const profileResponse = await fetch("http://localhost:3004/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const profileData = await profileResponse.json();
        console.log("Profil pengguna:", profileData);
        localStorage.setItem("profile", JSON.stringify(profileData));
        // Redirect berdasarkan peran pengguna
        if (role === "admin") {
          navigate("/dashboardadmin");
        } else {
          navigate("/dashboarduser");
        }
      } else {
        setError(data.message || "Email atau password salah");
      }
    } catch (error) {
      setError("Gagal login. Silakan coba lagi nanti.");
    }
  };

  useEffect(() => {
    if (user) {
      const role = localStorage.getItem("role");
      console.log("Role pengguna setelah login:", role);
      if (role === "admin") {
        navigate("/dashboardadmin");
      } else {
        navigate("/dashboarduser");
      }
    }
  }, [user, navigate]);

  return (
    <div className="login-page">
      <div className="logo-container">
        <img
          src={NoticLogo}
          width="40"
          height="auto"
          className="d-inline-block align-top ms-4 mt-3"
          alt="Notic logo"
        />
        <span className="fw-bold ms-2 mt-3">Notic</span>
      </div>
      <div className="login-container">
        <Card className="login-card mt-2">
          <Card.Body className="login-card-body">
            <div className="back-to-landing mb-3">
              <a href="/" className="text-decoration-none">
                <FaArrowLeft className="me-2" />
              </a>
            </div>
            <Card.Title className="login-title text-center mb-4">
              Login
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsernameOrEmail" className="mb-3">
                <Form.Label className="bold">Username or Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label className="bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={pass}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {error && <p className="text-danger">{error}</p>}

              <div className="d-flex justify-content-center mb-3">
                <Button type="submit" className="btn-login w-50">
                  Login
                </Button>
              </div>
            </Form>

            <div className="text-left mb-3">
              <a
                href="/forgot-password"
                className="text-decoration-none text-social"
              >
                Forgot Password?
              </a>
            </div>

            <div className="text-left mb-3 login-putih">
              Don't have an account?{" "}
              <a href="/register" className="text-decoration-none text-social">
                Register now
              </a>
            </div>

            <div className="divider">
              <span className="divider-text login-putih">or</span>
            </div>

            <div className="d-flex justify-content-center mb-2">
              <Button className="btn-login-social w-50 mb-2">
                <img
                  src="../../public/google.svg"
                  alt="Google"
                  className="me-2"
                />{" "}
                Sign in with Google
              </Button>
            </div>

            <div className="d-flex justify-content-center">
              <Button className="btn-login-social w-50">
                <img
                  src="../../public/discord.svg"
                  alt="Discord"
                  className="me-2"
                />{" "}
                Sign in with Discord
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="wave-container">
        <img src="../../public/wavebwh.png" alt="Wave" className="wave-image" />
      </div>
    </div>
  );
};

export default Login;
