import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, Modal } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { FiSun, FiMoon } from 'react-icons/fi';
import axios from 'axios';
import "./settingan.css";

const Settingan = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [profilePic, setProfilePic] = useState(""); 
  const [newUsername, setNewUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      // Set initial profile picture if available
      setProfilePic(user.profilePic || user.foto); // Assuming user object has profilePic field
    }
  }, [user, navigate]);

  const getToken = () => {
    return localStorage.getItem('token'); // Assuming the token is stored with the key 'token'
  };

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('foto', file);
  
      try {
        const response = await axios.put('http://localhost:3004/profile/foto', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${getToken()}`
          }
        });
        setProfilePic(response.data.foto); // Assuming the column name matches the server response
        showModalMessage("Profile picture updated successfully!");
      } catch (error) {
        console.error("Error uploading the image", error);
        showModalMessage("Failed to upload image");
      }
    }
  };

  const handleCancel = () => {
    setNewUsername("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleConfirmUsername = async () => {
    try {
      await axios.put('http://localhost:3004/profile/username', { username: newUsername }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      });
      showModalMessage("Username updated successfully!");
      setNewUsername("");
    } catch (error) {
      console.error("Error updating username", error);
      showModalMessage("Failed to update username");
    }
  };

  const handleConfirmPassword = async () => {
    if (newPassword !== confirmPassword) {
      showModalMessage("Passwords do not match!");
      return;
    }

    try {
      await axios.put(
        'http://localhost:3004/profile/password',
        { currentPassword, password: newPassword, confirmPassword },
        {
          headers: { Authorization: `Bearer ${getToken()}` }
        }
      );
      showModalMessage("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error updating password", error);
      showModalMessage("Failed to change password");
    }
  };

  const showModalMessage = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const handleLogout = () => {
    logout(); // Assuming logout function is provided by AuthContext
    navigate("/login");
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
                      src={profilePic}
                      alt="Profile"
                      className="rounded-circle profile-pic mb-3"
                    />
                  </div>
                  <Button
                    variant="primary"
                    className="mt-2 btn-primary"
                    onClick={() => fileInputRef.current.click()}
                  >
                    Change Profile Pic
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleProfilePicChange}
                      accept="image/*"
                      className="d-none"
                    />
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
                      onChange={(e) => setNewUsername(e.target.value)}
                      className="form-control"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end mt-4">
                    <Button variant="secondary" onClick={handleCancel} className="me-3">
                      Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmUsername}>
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
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="form-control"
                    />
                  </Form.Group>
                  <Form.Group controlId="formNewPassword" className="mt-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="form-control"
                    />
                  </Form.Group>
                  <Form.Group controlId="formConfirmPassword" className="mt-3">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end mt-4">
                    <Button variant="secondary" onClick={handleCancel} className="me-3">
                      Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmPassword}>
                      Change Password
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal for Action Status */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Action Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Settingan;
