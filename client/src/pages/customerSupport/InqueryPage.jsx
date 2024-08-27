import React from "react";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";

const InquiryForm = () => {
  return (
 <div>
  <NavBar></NavBar>
   <div style={styles.background}>
      <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarHeading}>Dashboard</h2>
        <button style={styles.sidebarButton}>Inquiry Form</button>
      </div>
      <div style={styles.formContainer}>
        <h2 style={styles.formHeading}>Inquiry Form</h2>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Name"
              style={styles.inputField}
            />
            <input
              type="text"
              placeholder="Inquiry Category"
              style={styles.inputField}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="email"
              placeholder="Email"
              style={styles.inputField}
            />
            <textarea
              placeholder="Inquiry"
              style={{ ...styles.inputField, height: "100px" }}
            ></textarea>
          </div>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Contact Number"
              style={styles.inputField}
            />
          </div>
          <div style={styles.buttonGroup}>
            <button style={styles.submitButton}>Submit</button>
            <button style={styles.editButton}>Edit</button>
            <button style={styles.deleteButton}>Delete</button>
          </div>
        </form>
      </div>
     
    </div>

  </div>
  <Footer></Footer>
 </div>
  );
};

const styles = {
  background: {
    height: "80vh",
      backgroundColor: "#161E38"

  },
  container: {
    display: "flex",
    padding: "50px",
    backgroundColor: "#161E38",
    color: "#fff",
  },
  sidebar: {
    width: "200px",
    backgroundColor: "#1a243b",
    padding: "20px",
    borderRadius: "10px",
  },
  sidebarHeading: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#fff",
  },
  sidebarButton: {
    backgroundColor: "#17abf9",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    width: "100%",
    cursor: "pointer",
  },
  formContainer: {
    flex: 1,
    paddingLeft: "20px",
  },
  formHeading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  inputField: {
    width: "48%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#eef0f3",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  submitButton: {
    backgroundColor: "#f8b619",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  editButton: {
    backgroundColor: "#f8b619",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#f8b619",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "1px solid #333",
    color: "#fff",
    textAlign: "center",
  },
  contactInfo: {
    marginBottom: "10px",
  },
  aboutSection: {
    maxWidth: "400px",
    margin: "0 auto",
    fontSize: "14px",
  },
};

export default InquiryForm;
