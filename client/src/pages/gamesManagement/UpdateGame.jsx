import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";


const UpdateGame = () => {
  const [gameName, setGameName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [image, setImage] = useState(null); // New state for image

  // Validation states
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");

  // Real-time validation
  useEffect(() => {
    const namePattern = /^[A-Za-z\s]+$/;
    if (gameName && !namePattern.test(gameName)) {
      setNameError("Game name can only contain letters and spaces.");
    } else {
      setNameError("");
    }
  }, [gameName]);

  useEffect(() => {
    if (price < 0) {
      setPriceError("Price cannot be negative.");
    } else {
      setPriceError("");
    }
  }, [price]);

  const handleAddGame = async (e) => {
    e.preventDefault();

    // Check for validation errors before submitting
    if (nameError || priceError) {
      alert("Please fix validation errors before submitting.");
      return;
    }

    const formData = new FormData(); // Create form data object
    formData.append("name", gameName);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("availableTimes", JSON.stringify(availableTimes)); // Send available times as a JSON string
    formData.append("price", price);
    if (image) formData.append("image", image); // Append the image if it exists

    try {
      const response = await axios.post(
        "http://localhost:3000/api/games/games",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Game added successfully:", response.data);
      alert("Game added successfully!");
      setGameName("");
      setCategory("");
      setDescription("");
      setPrice(0);
      setAvailableTimes([]);
      setImage(null); // Reset image state
    } catch (error) {
      console.error("There was an error adding the game:", error);
      console.error("Error details:", error.response?.data || error.message);
    }
  };

  const handleDateChange = (date) => {
    if (date) {
      setAvailableTimes([...availableTimes, date]);
    }
  };

  const removeTime = (index) => {
    setAvailableTimes(availableTimes.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.pageContainer}>
      <NavBar />
      <div style={styles.addGamesContainer}>
        <form style={styles.form} onSubmit={handleAddGame}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Category:</label>
            <select
              style={styles.select}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Water">Water</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Game Name:</label>
            <input
              type="text"
              placeholder="Game Name"
              style={styles.input}
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
            />
            {nameError && <p style={styles.errorText}>{nameError}</p>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Description:</label>
            <input
              type="text"
              placeholder="Description"
              style={styles.input}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Price:</label>
            <input
              type="number"
              placeholder="Price"
              style={styles.input}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            {priceError && <p style={styles.errorText}>{priceError}</p>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Available Times:</label>
            <DatePicker
              selected={null} // This keeps the picker empty after selection
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="Pp"
              placeholderText="Select a date and time"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Game Image:</label> {/* New label for image */}
            <input
              type="file"
              style={styles.input}
              onChange={(e) => setImage(e.target.files[0])} // Set image state to the selected file
            />
          </div>

          {availableTimes.length > 0 && (
            <div style={styles.timesContainer}>
              <h4 style={styles.timesTitle}>Picked Times:</h4>
              <ul style={styles.timesList}>
                {availableTimes.map((time, index) => (
                  <li key={index} style={styles.timeItem}>
                    {time.toLocaleString()}{" "}
                    <button
                      type="button"
                      onClick={() => removeTime(index)}
                      style={styles.removeButton}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

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
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#fff",
    color: "#000",
  },
  timesContainer: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#2E3553",
    borderRadius: "5px",
  },
  timesTitle: {
    marginBottom: "10px",
    fontSize: "16px",
    color: "#FFD700",
  },
  timesList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  timeItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 0",
    borderBottom: "1px solid #FFD700",
  },
  removeButton: {
    padding: "5px 10px",
    backgroundColor: "#FF6347",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
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
    marginTop: "20px",
  },
  errorText: {
    color: "#FF6347",
    fontSize: "14px",
    marginTop: "5px",
  },
};

export default UpdateGame;
