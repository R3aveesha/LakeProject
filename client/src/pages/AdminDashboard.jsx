import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./foodManagement/context/authContext";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  if (!user || !user.user.role) {
    navigate("/login");
    return null;
  }

  return (
    <div style={dashboardStyle}>
      <h1 style={headerStyle}>Admin Dashboard</h1>
      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle}
          onClick={() => navigate("/booking-management")}
        >
          Booking Management
        </button>
        <button
          style={buttonStyle}
          onClick={() => navigate("/customer-support-management")}
        >
          Customer Support Management
        </button>
        <button
          style={buttonStyle}
          onClick={() => navigate("/event-management")}
        >
          Event Management
        </button>
        <button
          style={buttonStyle}
          onClick={() => navigate("/food-management")}
        >
          Food Management
        </button>
        <button
          style={buttonStyle}
          onClick={() => navigate("/gameManagement")}
        >
          Games Management
        </button>
        <button
          style={buttonStyle}
          onClick={() => navigate("/movies-management")}
        >
          Movies Management
        </button>
        <button
          style={buttonStyle}
          onClick={() => navigate("/resource-management")}
        >
          Resource Management
        </button>
        {user.user.role === "Manager" ? (
          <button
            style={buttonStyle}
            onClick={() => navigate("/staff-management")}
          >
            Staff Management
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

// Styles for the dashboard
const dashboardStyle = {
  padding: "20px",
  backgroundColor: "#f4f4f4",
  minHeight: "100vh",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "20px",
};

const buttonContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  fontSize: "16px",
  cursor: "pointer",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "#fff",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default AdminDashboard;
