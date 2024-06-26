import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext"; // Adjust the path if necessary
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import './dashboardUser.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardUser = () => {
  const { user } = useContext(AuthContext); // Get user data from AuthContext
  const [projectStats, setProjectStats] = useState({
    totalProjects: 0,
    completedProjects: 0,
  });
  const [totalTasks, setTotalTasks] = useState(0); // Updated state for totalTasks

  const data = {
    labels: ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Tasks Done',
        data: [20, 30, 45, 60, 40, 55, 70, 60, 80], // Replace with actual data
        fill: true,
        backgroundColor: 'rgba(108, 99, 255, 0.2)',
        borderColor: '#6c63ff',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Tasks Done Over Time',
      },
    },
  };

  useEffect(() => {
    const fetchProjectStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const projectResponse = await axios.get(
          "https://api-msib-6-travel-management-03.educalab.id/projects", // Adjust endpoint as needed
          {
            headers: {
              Authorization: `Bearer ${token}`, // Ensure token is sent with Bearer format
            },
          }
        );
        console.log("Fetched project data:", projectResponse.data); // Debug log
        // Assuming projectResponse.data contains an array of projects
        const totalProjects = projectResponse.data.length;
        const completedProjects = projectResponse.data.filter(project => project.status === 'completed').length;
        setProjectStats({ totalProjects, completedProjects });
  
        const taskResponse = await axios.get(
          "https://api-msib-6-travel-management-03.educalab.id/53/tasks", // Adjust endpoint as needed
          {
            headers: {
              Authorization: `Bearer ${token}`, // Ensure token is sent with Bearer format
            },
          }
        );
        console.log("Fetched task data:", taskResponse.data); // Debug log
        // Assuming taskResponse.data contains an array of tasks
        const totalTasksCount = taskResponse.data.length; // Count all tasks
        setTotalTasks(totalTasksCount); // Update state with totalTasksCount
      } catch (error) {
        console.error("Failed to fetch project or task stats:", error);
      }
    };
  
    fetchProjectStats();
  }, []);

  const { totalProjects, completedProjects } = projectStats;

  return (
    <Container fluid className={`component-container p-3 ${user ? 'light-mode' : 'dark-mode'}`}>
      {user ? (
        <>
          <Row className="mb-3">
            <Col>
              <h4 className="fw-bold">Dashboard</h4>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Card className="card-hover">
                <Card.Body className="card-body-custom">
                  <img src="/Document.svg" alt="task" className="card-img" />
                  <div className="card-content">
                    <Card.Title className="fw-bold">Tasks</Card.Title>
                    <Card.Text className="card-text-custom">
                      <h1 className="fw-bold">{totalTasks}</h1> {/* Display totalTasks */}
                      <p className="ms-2">You have {totalTasks} unfinished tasks</p> {/* Adjust message */}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-hover">
                <Card.Body className="card-body-custom">
                  <img src="/Hotspot.svg" alt="current-project" className="card-img" />
                  <div className="card-content">
                    <Card.Title className="fw-bold">Projects</Card.Title>
                    <Card.Text className="card-text-custom">
                      <h1 className="fw-bold ms-1">{totalProjects}</h1>
                      <p>You have {totalProjects} projects</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={12}>
              <Card className="card-hover">
                <Card.Body>
                  <Card.Title className="fw-bold">Tasks Done</Card.Title>
                  <Line data={data} options={options} />
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </Container>
  );
};

export default DashboardUser;
