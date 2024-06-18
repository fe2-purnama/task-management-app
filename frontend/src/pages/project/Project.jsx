import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommenting,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./project.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Project = () => {
  const { id_project } = useParams();
  const [projectName, setProjectName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [modalTask, setModalTask] = useState(null);
  const [modalMode, setModalMode] = useState("add");

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
          `http://localhost:3004/projects/${id_project}/tasks`,
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
      await axios.delete(
        `http://localhost:3004/projects/${id_project}/tasks/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTasks(tasks.filter((task) => task.id_task !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCheckboxChange = (id, checked) => {
    const task = tasks.find((task) => task.id_task === id);
    const updatedTask = {
      ...task,
      status: checked ? "Finished" : "Not Started",
    };
    handleEdit(updatedTask.id_task);
  };

  const handleSaveTask = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!modalTask.name.trim()) {
        alert("Task name cannot be empty");
        return;
      }
      if (!modalTask.description.trim()) {
        alert("Task description cannot be empty");
        return;
      }

      if (modalMode === "add") {
        const response = await axios.post(
          `http://localhost:3004/projects/${id_project}/tasks`,
          modalTask,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setTasks([...tasks, response.data]);
      } else if (modalMode === "edit") {
        await axios.put(
          `http://localhost:3004/projects/${id_project}/tasks/${modalTask.id_task}`,
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

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-10">
          <h2>Project: {projectName}</h2>
          <div className="d-flex justify-content-between mb-3">
            <input
              type="text"
              className="form-control w-50"
              placeholder="Search by everything data"
            />
            <div>
              <DropdownButton
                as={ButtonGroup}
                id="sort-dropdown"
                title="Sort"
                variant="light"
                className="me-2"
              >
                <Dropdown.Item>Date</Dropdown.Item>
                <Dropdown.Item>Priority</Dropdown.Item>
                <Dropdown.Item>Status</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                as={ButtonGroup}
                id="filter-dropdown"
                title="Filter"
                variant="light"
                className="me-2"
              >
                <Dropdown.Item>Priority: Low</Dropdown.Item>
                <Dropdown.Item>Priority: Medium</Dropdown.Item>
                <Dropdown.Item>Priority: High</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Status: Not Started</Dropdown.Item>
                <Dropdown.Item>Status: On Process</Dropdown.Item>
                <Dropdown.Item>Status: Complete</Dropdown.Item>
                <Dropdown.Item>Status: Finished</Dropdown.Item>
              </DropdownButton>
              <button
                className="btn btn-new-task"
                onClick={() => {
                  setShowTaskModal(true);
                  setModalMode("add");
                  setModalTask({
                    id_project: id_project,
                    name: "",
                    description: "",
                    tags: [],
                    status: "Not Started",
                    dueDate: "",
                    priority: "LOW",
                  });
                }}
              >
                + Add New Task
              </button>
            </div>
          </div>
          <TaskTable
            tasks={tasks}
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
                    value={modalTask?.description || ""}
                    onChange={(e) =>
                      setModalTask({
                        ...modalTask,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Task Tags</Form.Label>
                  <Form.Control
                    type="text"
                    value={modalTask?.tags ? modalTask.tags.join(", ") : ""}
                    onChange={(e) =>
                      setModalTask({
                        ...modalTask,
                        tags: e.target.value
                          .split(",")
                          .map((tag) => tag.trim()),
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={modalTask?.dueDate || ""}
                    onChange={(e) =>
                      setModalTask({ ...modalTask, dueDate: e.target.value })
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
              <p>{modalTask?.description}</p>
            </Modal.Body>
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
          <th>Description</th>
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
            <td>{task.name}</td>
            <td>{task.description}</td>
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
              <button onClick={() => handleCommentClick(task.id_task)}>
                <FontAwesomeIcon icon={faCommenting} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Project;

