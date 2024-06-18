import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/About";
import ContactUs from "./pages/contact/Contact";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import DashboardUser from "./pages/dahsboardUser/DashboardUser";
import Sidebar from "./pages/sidebar/Sidebar";
import Settingan from "./pages/settingan/Settingan";
import DashboardAdmin from "./pages/dashboardAdmin/DashboardAdmin";
import SidebarAdmin from "./pages/sidebarAdmin/SidebarAdmin";
import UserList from "./pages/userList/UserList";
import SettinganAdmin from "./pages/settinganAdmin/SettinganAdmin";
import Project from "./pages/project/Project";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/home" element={<ProtectedRoute component={Home} />} />
            <Route
              path="/aboutus"
              element={<ProtectedRoute component={AboutUs} />}
            />
            <Route
              path="/contactus"
              element={<ProtectedRoute component={ContactUs} />}
            />
            <Route
              path="/dashboarduser"
              element={<ProtectedRoute component={DashboardUser} />}
            />
            <Route
              path="/settingan"
              element={<ProtectedRoute component={Settingan} />}
            />
            <Route
              path="/project/:id_project"
              element={<ProtectedRoute component={Project} />}
            />
            <Route
              path="/dashboardadmin"
              element={<ProtectedRouteAdmin component={DashboardAdmin} />}
            />
            <Route
              path="/userlist"
              element={<ProtectedRouteAdmin component={UserList} />}
            />
            <Route
              path="/settinganadmin"
              element={<ProtectedRouteAdmin component={SettinganAdmin} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

// Component to protect routes
const ProtectedRoute = ({ component: Component }) => {
  const { user } = React.useContext(AuthContext);
  return user ? (
    <div className="protected-route-container d-flex">
      <Sidebar user={user} />
      <Component user={user} />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

const ProtectedRouteAdmin = ({ component: Component }) => {
  const { user } = React.useContext(AuthContext);
  return user ? (
    <div className="protected-route-container d-flex">
      <SidebarAdmin user={user} />
      <Component user={user} />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default App;
