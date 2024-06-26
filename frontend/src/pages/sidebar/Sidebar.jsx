import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";
import logo from "../../assets/letter-n.png";
import { ThemeContext } from "../../context/ThemeContext";
import { Collapse, Modal, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ user }) => {
  const { logout } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  const [openProjects, setOpenProjects] = useState(true);
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://api-msib-6-travel-management-03.educalab.id/projects",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleAddProject = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://api-msib-6-travel-management-03.educalab.id/projects",
        { nama: newProjectName },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Project added: ", response.data);
      setNewProjectName("");
      setShowModal(false);
      window.location.reload(); // Refresh the page to load new projects
    } catch (error) {
      console.error("Failed to add project:", error);
      alert(
        `Failed to add project: ${
          error.response ? error.response.data : error.message
        }`
      );
    }
  };

  return (
    <div
      className={`sidebar-container ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <CDBSidebar
        textColor={darkMode ? "#ffffff" : "#000000"}
        backgroundColor={darkMode ? "#333333" : "white"}
        className="sidebar"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <a
              
              className="text-decoration-none"
              style={{ color: darkMode ? "white" : "black" }}
            >
              Notic
            </a>
          </div>
          <div className="profile-info">
            <img
              src={user && user.foto}
              alt="Profile"
              className="profile-picture"
            />
            <div className="profile-details">
              <p className="username">{user && user.username}</p>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-email">{user && user.email}</Tooltip>}
              >
                <p className="email">
                  {user && (user.email.length > 15
                    ? user.email.substring(0, 15) + "..."
                    : user.email)}
                </p>
              </OverlayTrigger>
            </div>
          </div>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              to="/dashboarduser"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem
                icon="columns"
                style={{ color: darkMode ? "white" : "black" }}
              >
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/settingan"
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem
                icon="cog"
                style={{ color: darkMode ? "white" : "black" }}
              >
                Settings
              </CDBSidebarMenuItem>
            </NavLink>
            <div>
              <div
                onClick={() => setOpenProjects(!openProjects)}
                aria-controls="example-collapse-text"
                aria-expanded={openProjects}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CDBSidebarMenuItem
                  icon="folder-open"
                  style={{ color: darkMode ? "white" : "black" }}
                >
                  Project
                </CDBSidebarMenuItem>
                <FontAwesomeIcon
                  icon={openProjects ? faChevronDown : faChevronRight}
                  style={{ marginLeft: "auto", marginRight: "15px" }}
                />
              </div>
              <Collapse in={openProjects}>
                <div className="collapse-scroll">
                  {projects.map((project) => (
                    <NavLink
                      key={project.id_project}
                      to={`/project/${project.id_project}`}
                      className="dropdown-item"
                    >
                      <CDBSidebarMenuItem
                        icon="circle"
                        style={{
                          paddingLeft: "30px",
                          color: darkMode ? "white" : "black",
                        }}
                      >
                        {project.nama}
                      </CDBSidebarMenuItem>
                    </NavLink>
                  ))}
                </div>
              </Collapse>
              <hr />
            </div>
            <CDBSidebarMenuItem
              className="add-new-project"
              icon="plus-square"
              style={{ color: darkMode ? "white" : "black" }}
              onClick={() => setShowModal(true)}
            >
              Add new project
            </CDBSidebarMenuItem>
            <div
              style={{
                color: "red",
                position: "absolute",
                bottom: "10px",
                width: "100%",
              }}
            >
              <CDBSidebarMenuItem onClick={logout} icon="sign-out-alt">
                Logout
              </CDBSidebarMenuItem>
            </div>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProjectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project name"
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProject}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Sidebar;
