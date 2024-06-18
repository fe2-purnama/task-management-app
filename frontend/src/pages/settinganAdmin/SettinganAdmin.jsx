import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { FiSun, FiMoon } from 'react-icons/fi';
import "./settinganAdmin.css";

const SettinganAdmin = () => {
  const { user } = useContext(AuthContext);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCancel = () => {
    setNewUsername("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleConfirm = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Implement save changes logic here
    alert("Changes saved successfully!");
  };

  return (
    <div className="konten-setting settingan-page">
      <Container className="mt-4">
        <h4 className="card-title fw-bold mb-4">Settings</h4>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="card-setting mb-4">
              <Card.Body className="card-body-setting">
                <Card.Title className="mb-4">Profile Pic</Card.Title>
                <div className="d-flex flex-column align-items-center">
                  <div className="profile-pic-wrapper position-relative">
                    <img
                      src="path-to-your-profile-pic.jpg"
                      alt="Profile"
                      className="rounded-circle profile-pic mb-3"
                      width="120"
                      height="120"
                    />
                  </div>
                  <Button
                    variant="primary"
                    className="mt-2 btn-primary"
                    onClick={() => {}}
                  >
                    Change Profile Pic
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="card-setting mb-4">
              <Card.Body className="card-body-setting text-center">
                <Card.Title className="mb-2">Change Your Theme</Card.Title>
                <div className="theme-switcher d-flex align-items-center justify-content-center">
                  <span className="me-2">What do you prefer?</span>
                  <Button
                    onClick={toggleDarkMode}
                    variant="outline-secondary"
                    className="ms-2 btn-secondary theme-button"
                  >
                    {darkMode ? <FiSun /> : <FiMoon />}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="card-setting mb-4">
              <Card.Body className="card-body-setting">
                <Card.Title className="mb-0">Change Username</Card.Title>
                <Form>
                  <Form.Group controlId="formCurrentUsername">
                    <Form.Label>Current Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter current username"
                      readOnly
                      value={user?.username || ''}
                      className="form-control"
                    />
                  </Form.Group>
                  <Form.Group controlId="formNewUsername" className="mt-1">
                    <Form.Label>New Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter new username"
                      value={newUsername}
                      onChange={handleUsernameChange}
                      className="form-control"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end mt-4">
                    <Button variant="secondary" onClick={handleCancel} className="me-3">
                      Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirm}>
                      Save Changes
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            <Card className="card-setting mb-4">
              <Card.Body className="card-body-setting">
                <Card.Title className="mb-0">Change Password</Card.Title>
                <Form>
                  <Form.Group controlId="formCurrentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter current password"
                      className="form-control"
                    />
                  </Form.Group>
                  <Form.Group controlId="formNewPassword" className="mt-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={handlePasswordChange}
                      className="form-control"
                    />
                  </Form.Group>
                  <Form.Group controlId="formConfirmPassword" className="mt-3">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      className="form-control"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end mt-4">
                    <Button variant="secondary" onClick={handleCancel} className="me-3">
                      Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirm}>
                      Change Password
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SettinganAdmin;
