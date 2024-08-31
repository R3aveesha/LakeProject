import React, { useState } from "react";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../foodManagement/context/authContext";
import axios from "axios";

const LostItemsForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const userId = user.user ? user.user._id : "";
  const userName = user.user ? user.user.name : "";
  const userEmail = user.user ? user.user.email : "";

  console.log(user); 

  const [formData, setFormData] = useState({
    userName: userName,
    userId: userId,
    email: userEmail,
    contactNumber: "",
    foundItem: "",
    lostPlace: "",
    foundItemsCategory: "Sport",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost:3000/api/lostNFound/add-lost-and-found",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200 || response.status === 201) {
        navigate("/success");
      } else {
        console.error("Form submission failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };
  
  

  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        <div style={styles.dashboard}>
          <button style={styles.dashboardButton}>Dashboard</button>
          <h2 style={styles.title}>Lost Items Form</h2>
        </div>

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <div style={styles.formRow}>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              readOnly
              style={styles.input}
            />
            <select
              name="foundItemsCategory"
              value={formData.foundItemsCategory}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="Sport">Sport</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div style={styles.formRow}>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              style={styles.input}
            />
            <input
              type="text"
              name="foundItem"
              value={formData.foundItem}
              onChange={handleChange}
              placeholder="Lost Item"
              style={styles.input}
            />
          </div>
          <div style={styles.formRow}>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              style={styles.input}
            />
            <input
              type="text"
              name="lostPlace"
              value={formData.lostPlace}
              onChange={handleChange}
              placeholder="Lost Place"
              style={styles.input}
            />
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
          </div>
        </form>

        <div style={styles.buttonContainer}>
          <button style={styles.editButton}>Edit</button>
          <button style={styles.deleteButton}>Delete</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#161E38",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  dashboard: {
    marginBottom: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dashboardButton: {
    backgroundColor: "#1E2A47",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    marginBottom: "10px",
    cursor: "pointer",
  },
  title: {
    fontSize: "24px",
    color: "#ffffff",
    marginBottom: "20px",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "20px",
    width: "500px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  formRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  input: {
    width: "48%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  submitButton: {
    backgroundColor: "#FFA800",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  editButton: {
    backgroundColor: "#FFA800",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  deleteButton: {
    backgroundColor: "#FFA800",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LostItemsForm;
