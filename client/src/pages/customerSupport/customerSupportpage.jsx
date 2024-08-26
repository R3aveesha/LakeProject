import React from "react";


const CustomerSupport = () => {
  return (
    <div style={styles.container}>
      <div style={styles.supportSection}>
        <h2 style={styles.heading}>Customer Support</h2>
        <img
          src=""
          alt="Customer Support"
          style={styles.image}
        />
      </div>
      <div style={styles.searchSection}>
        <input
          type="text"
          placeholder="Search"
          style={styles.searchInput}
        />
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Inquiries</button>
          <button style={styles.button}>Lost & Found Items</button>
          <button style={styles.button}>Transport</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#212a49",
    color: "#fff",
  },
  supportSection: {
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "8px",
  },
  searchSection: {
    marginTop: "20px",
    textAlign: "center",
  },
  searchInput: {
    width: "100%",
    maxWidth: "300px",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    marginBottom: "15px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    backgroundColor: "#FFD700", // Updated to yellow color
    color: "#000", // Changed text color to black for contrast
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  contactInfo: {
    marginTop: "20px",
    textAlign: "center",
    lineHeight: "1.6",
  },
  aboutSection: {
    marginTop: "20px",
    maxWidth: "500px",
    textAlign: "center",
    fontSize: "14px",
  },
};

export default CustomerSupport;
