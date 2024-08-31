import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";

const StaffRegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    role: "",
    email: "",
    password: "",
    nic: "",
    salary: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/staff/add",
        formData
      );
      console.log("Staff member registered:", response.data);
      // Optionally, reset the form after successful submission
      setFormData({
        username: "",
        role: "",
        email: "",
        password: "",
        nic: "",
        salary: "",
        address: "",
        phone: "",
      });
    } catch (error) {
      console.error("There was an error registering the staff member!", error);
    }
  };

  const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    backgroundColor: "#1b1f38",
    padding: "20px",
    boxSizing: "border-box",
  };

  const formStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px",
    backgroundColor: "#d1d1d1",
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "800px",
    width: "100%",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    fontWeight: "bold",
    marginRight: "10px",
  };

  const inputContainerStyle = {
    display: "flex",
    alignItems: "center",
    width: "100%",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  };

  const titleStyle = {
    gridColumn: "span 2",
    fontSize: "24px",
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "bold",
  };

  const buttonContainerStyle = {
    gridColumn: "span 2",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
  };

  const registerButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f9a825",
    color: "#ffffff",
  };

  const clearButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#000000",
    color: "#ffffff",
  };

  const responsiveGrid = {
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  };

  return (
    <div>
      <NavBar />
      <div style={formContainerStyle}>
        <form
          onSubmit={handleSubmit}
          style={{ ...formStyle, ...responsiveGrid }}
        >
          <h2 style={titleStyle}>Staff Registration Form</h2>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="username">
              username
            </label>
            <input
              style={inputStyle}
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="role">
              Position
            </label>
            <input
              style={inputStyle}
              type="text"
              id="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="email">
              Email
            </label>
            <input
              style={inputStyle}
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="password">
              Password
            </label>
            <input
              style={inputStyle}
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="nic">
              NIC
            </label>
            <input
              style={inputStyle}
              type="text"
              id="nic"
              value={formData.nic}
              onChange={handleChange}
              required
            />
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="salary">
              Salary
            </label>
            <input
              style={inputStyle}
              type="number"
              id="salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="address">
              Address
            </label>
            <input
              style={inputStyle}
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="phone">
              Phone
            </label>
            <input
              style={inputStyle}
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div style={buttonContainerStyle}>
            <button type="submit" style={registerButtonStyle}>
              Register
            </button>
            <button type="reset" style={clearButtonStyle}>
              Clear
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default StaffRegistrationForm;
