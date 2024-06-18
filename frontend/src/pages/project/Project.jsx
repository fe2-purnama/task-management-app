import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommenting,
  faEdit,
  faTrash,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./project.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Project = ({ updateSidebarProjectName }) => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const { id_project } = useParams();
  const [projectName, setProjectName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [modalTask, setModalTask] = useState(null);
  const [modalMode, setModalMode] = useState("add");
  const [showProjectNameModal, setShowProjectNameModal] = useState(false);
  const [showDeleteProjectModal, setShowDeleteProjectModal] = useState(false);

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3004/${id_project}/tasks?status=Finished`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCompletedTasks(response.data);
      } catch (error) {
        console.error("Error fetching completed tasks:", error);
      }
    };

    fetchCompletedTasks();
  }, [id_project]);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3004/projects/${id_project}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProjectName(response.data.nama);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3004/${id_project}/tasks`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchProjectDetails();
    fetchTasks();
  }, [id_project]);

  const handleEdit = (id) => {
    const task = tasks.find((task) => task.id_task === id);
    setModalTask(task);
    setModalMode("edit");
    setShowTaskModal(true);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3004/${id_project}/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.filter((task) => task.id_task !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleDeleteProject = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3004/projects/${id_project}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Redirect or update the UI after project deletion
    } catch (error) {
      console.error("Error deleting project:", error);
    }
    setShowDeleteProjectModal(false);
  };

  const handleCheckboxChange = (id, checked) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id_task === id) {
        return {
          ...task,
          status: checked ? "Finished" : "Not Started",
        };
      }
      return task;
    });
    const taskToMove = updatedTasks.find((task) => task.id_task === id);
    if (taskToMove) {
      if (checked) {
        setCompletedTasks([...completedTasks, taskToMove]);
      } else {
        setCompletedTasks(completedTasks.filter((task) => task.id_task !== id));
      }
    }

    setTasks(updatedTasks);
  };

  const handleSaveTask = async () => {
    try {
      const token = localStorage.getItem("token");

      // Validate and set defaults if necessary
      if (!modalTask.name.trim()) {
        alert("Task name cannot be empty");
        return;
      }
      if (!modalTask.deskripsi.trim()) {
        alert("Task description cannot be empty");
        return;
      }
      if (!modalTask.tag) {
        modalTask.tag = ""; // Set default tag if not provided
      }
      if (!modalTask.date) {
        modalTask.date = new Date().toISOString().split("T")[0]; // Set default date if not provided
      }

      if (modalMode === "add") {
        const response = await axios.post(
          `http://localhost:3004/${id_project}/tasks`,
          modalTask,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setTasks([...tasks, response.data]);
      } else if (modalMode === "edit") {
        await axios.put(
          `http://localhost:3004/${id_project}/tasks/${modalTask.id_task}`,
          modalTask,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setTasks(
          tasks.map((task) =>
            task.id_task === modalTask.id_task ? modalTask : task
          )
        );
      }
      setShowTaskModal(false);
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const handleCommentClick = (id) => {
    const task = tasks.find((task) => task.id_task === id);
    setModalTask(task);
    setShowDescriptionModal(true);
  };

  const handleSaveProjectName = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:3004/projects/${id_project}`,
        { nama: projectName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setShowProjectNameModal(false);
      window.location.reload(); 
    } catch (error) {
      console.error("Error updating project name:", error);
    }
  };

  useEffect(() => {
    const completed = tasks.filter((task) => task.status === "Finished");
    setCompletedTasks(completed);
  }, [tasks]);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className="d-flex align-items-center">
            Project: {projectName}
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="ms-2 pencil-icon"
              onClick={() => setShowProjectNameModal(true)}
              style={{ cursor: "pointer", fontSize: "15px" }}
            />
          </h2>
          <div className="d-flex justify-content-end mb-3">
            <div>
              <button
                className="btn btn-danger me-2"
                onClick={() => setShowDeleteProjectModal(true)}
              >
                Delete Project
              </button>
              <button
                className="btn btn-new-task"
                onClick={() => {
                  setShowTaskModal(true);
                  setModalMode("add");
                  setModalTask({
                    id_project: id_project,
                    name: "",
                    deskripsi: "",
                    tags: [],
                    status: "Not Started",
                    date: "",
                    priority: "LOW",
                  });
                }}
              >
                + Add New Task
              </button>
            </div>
          </div>
          <h5>Current Projects ({tasks.length})</h5>
          <TaskTable
            tasks={tasks.filter((task) => task.status !== "Finished")}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleCheckboxChange={handleCheckboxChange}
            handleCommentClick={handleCommentClick}
          />
          <h5 className="mt-5">Completed Projects ({completedTasks.length})</h5>
          {/* Completed project table */}
          <TaskTable
            tasks={completedTasks}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleCheckboxChange={handleCheckboxChange}
            handleCommentClick={handleCommentClick}
          />
          <Modal show={showTaskModal} onHide={() => setShowTaskModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>
                {modalMode === "add" ? "Add New Task" : "Edit Task"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Task Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={modalTask?.name || ""}
                    onChange={(e) =>
                      setModalTask({ ...modalTask, name: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Task Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={modalTask?.deskripsi || ""}
                    onChange={(e) =>
                      setModalTask({
                        ...modalTask,

                        deskripsi: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Task Tags</Form.Label>
                  <Form.Control
                    type="text"
                    value={modalTask?.tag || ""}
                    onChange={(e) =>
                      setModalTask({
                        ...modalTask,
                        tag: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={modalTask?.date || ""}
                    onChange={(e) =>
                      setModalTask({ ...modalTask, date: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Priority</Form.Label>
                  <Form.Control
                    as="select"
                    value={modalTask?.priority || "LOW"}
                    onChange={(e) =>
                      setModalTask({ ...modalTask, priority: e.target.value })
                    }
                  >
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={modalTask?.status || "Not Started"}
                    onChange={(e) =>
                      setModalTask({ ...modalTask, status: e.target.value })
                    }
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="On Process">On Process</option>
                    <option value="Complete">Complete</option>
                    <option value="Finished">Finished</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowTaskModal(false)}
              >
                Close
              </Button>
              <Button variant="primary" onClick={handleSaveTask}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal
            show={showDescriptionModal}
            onHide={() => setShowDescriptionModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Task Description</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{modalTask?.deskripsi}</p>
            </Modal.Body>
          </Modal>
          <Modal
            show={showProjectNameModal}
            onHide={() => setShowProjectNameModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Project Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowProjectNameModal(false)}
              >
                Close
              </Button>
              <Button variant="primary" onClick={handleSaveProjectName}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal
            show={showDeleteProjectModal}
            onHide={() => setShowDeleteProjectModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Project Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to delete this project?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowDeleteProjectModal(false)}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={handleDeleteProject}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

const TaskTable = ({
  tasks,
  handleEdit,
  handleDelete,
  handleCheckboxChange,
  handleCommentClick,
}) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Check</th>
          <th>Task Name</th>
          <th>Tag</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id_task}>
            <td>
              <input
                type="checkbox"
                checked={task.status === "Finished"}
                onChange={(e) =>
                  handleCheckboxChange(task.id_task, e.target.checked)
                }
              />
            </td>
            <td>
              {task.name}
              <button onClick={() => handleCommentClick(task.id_task)}>
                <FontAwesomeIcon icon={faCommenting} />
              </button>
            </td>
            <td>{task.tag}</td>
            <td>{task.priority}</td>
            <td>{task.date}</td>
            <td>{task.status}</td>
            <td>
              <button onClick={() => handleEdit(task.id_task)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button onClick={() => handleDelete(task.id_task)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Project;
