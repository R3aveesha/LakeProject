import React from 'react';

const StaffDashboard = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#1b1f38",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    boxSizing: "border-box",
  };

  const titleStyle = {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
  };

  const buttonGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px",
    width: "100%",
    maxWidth: "800px",
  };

  const buttonStyle = {
    padding: "35px 55px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    color: "#000000",
    width: "100%",
  };

  const responsiveButtonGridStyle = {
    ...buttonGridStyle,
    gridTemplateColumns: "repeat(2, 1fr)",
  };

  const mobileButtonGridStyle = {
    ...buttonGridStyle,
    gridTemplateColumns: "1fr",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>STAFF MANAGER DASHBOARD</h1>
      <div
        style={{
          ...buttonGridStyle,
          ...(window.innerWidth <= 768 && window.innerWidth > 480
            ? responsiveButtonGridStyle
            : window.innerWidth <= 480
            ? mobileButtonGridStyle
            : {}),
        }}
      >
        <button style={buttonStyle}>Add Staff Member</button>
        <button style={buttonStyle}>View Staff Member Details</button>
        <button style={buttonStyle}>View Leave Requests</button>
        <button style={buttonStyle}>View Attendance</button>
        <button style={buttonStyle}>View Salary</button>
        <button style={buttonStyle}>Calculate Salary</button>
      </div>
    </div>
  );
};

export default StaffDashboard;
