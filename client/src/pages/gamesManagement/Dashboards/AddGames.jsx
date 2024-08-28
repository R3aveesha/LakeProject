import React from "react";
import Footer from "../../../components/core/Footer";
import NavBar from "../../../components/core/NavBar";

const AddGames = () => {
  return (
    <div style={styles.pageContainer}>
      <NavBar />
      <div style={styles.addGamesContainer}>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Category:</label>
            <select style={styles.select}>
              <option value="">Select category</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Puzzle">Puzzle</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Upload Photo:</label>
            <input type="file" style={styles.uploadPhoto} />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Game Name:</label>
            <input type="text" placeholder="Game Name" style={styles.input} />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Description:</label>
            <input
              type="text"
              placeholder="Description"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Price:</label>
            <input type="number" placeholder="Price" style={styles.input} />
          </div>

          <button type="submit" style={styles.addButton}>
            Add
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#161E38",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  addGamesContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  form: {
    backgroundColor: "#1E2749",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
    width: "100%",
  },
  formGroup: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "10px",
    fontSize: "16px",
    color: "#FFD700",
  },
  select: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#fff",
    color: "#000",
  },
  uploadPhoto: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#fff",
    color: "#000",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#fff",
    color: "#000",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#FFD700",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default AddGames;
