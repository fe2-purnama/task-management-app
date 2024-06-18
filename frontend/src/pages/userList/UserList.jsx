import React, { Component } from "react";
import { Table, Container, Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./userList.css";

class UserList extends Component {
  state = {
    users: [],
    error: null,
    showModal: false,
    userToDelete: null,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3004/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      this.setState({ users: response.data });
    } catch (error) {
      this.setState({
        error: error.response?.data?.error || "Failed to fetch users",
      });
    }
  };

  handleShowModal = (user) => {
    this.setState({ showModal: true, userToDelete: user });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, userToDelete: null });
  };

  handleConfirmDelete = async () => {
    const { userToDelete } = this.state;
    if (userToDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `http://localhost:3004/users/${userToDelete.id_user}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        this.setState({
          users: this.state.users.filter(
            (user) => user.id_user !== userToDelete.id_user
          ),
          showModal: false,
          userToDelete: null,
        });
      } catch (error) {
        this.setState({
          error: error.response?.data?.error || "Failed to delete user",
        });
      }
    }
  };

  render() {
    const { users, error, showModal, userToDelete } = this.state;

    return (
      <Container className="mt-5">
        <h2 className="mb-4">User List</h2>
        {error && <p className="text-danger">{error}</p>}
        <Table striped bordered hover className="table">
          <thead className="thead-dark">
            <tr>
              <th className="text-center">No</th>
              <th>Username</th>
              <th>Email</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id_user}>
                <td className="text-center">{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  <Button
                    variant="danger"
                    onClick={() => this.handleShowModal(user)}
                    className="delete-button"
                  >
                    <i className="fas fa-trash-alt"></i> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal
          show={showModal}
          onHide={this.handleCloseModal}
          centered
          size="sm"
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete user "{userToDelete?.username}"?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={this.handleConfirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default UserList;
