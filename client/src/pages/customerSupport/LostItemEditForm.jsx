import React, { useState } from "react";

const LostItemEditForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    lostItemCategory: "",
    lostItem: "",
    lostPlace: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form data submitted:", formData);
  };

  return (
    <div style={styles.formContainer}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formRow}>
          <label style={styles.label}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Lost item Category:
            <input
              type="text"
              name="lostItemCategory"
              value={formData.lostItemCategory}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formRow}>
          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Lost item:
            <input
              type="text"
              name="lostItem"
              value={formData.lostItem}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formRow}>
          <label style={styles.label}>
            Contact Number:
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Lost place:
            <input
              type="text"
              name="lostPlace"
              value={formData.lostPlace}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
        </div>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    padding: "20px",
    backgroundColor: "#1b1f38",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "auto",
  },
  form: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
  },
  formRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    width: "48%",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginTop: "5px",
    backgroundColor: "#d3d3d3", // Matches the greyish background in the image
  },
  submitButton: {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#ff9800",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LostItemEditForm;
