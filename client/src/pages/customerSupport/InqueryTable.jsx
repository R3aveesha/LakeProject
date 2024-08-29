import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/core/NavBar";
import Footer from "../../components/core/Footer";

const CustomerInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all inquiries on component mount
    const fetchInquiries = async () => {
      try {
        // Update this URL to match your backend server port
        const response = await axios.get("http://localhost:3000/api/inquiry/inquiries");
        setInquiries(response.data);
      } catch (error) {
        console.error("Error fetching inquiries:", error);
        setError("Error fetching inquiries. Please try again later.");
      }
    };

    fetchInquiries();
  }, []);

  console.log(inquiries);

  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        <div style={styles.dashboard} />
        <div style={styles.inquiriesContainer}>
          <h2 style={styles.title}>Customer Inquiries</h2>
          {error && <p style={styles.error}>{error}</p>}
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Contact Number</th>
                <th style={styles.th}>Inquiry Category</th>
                <th style={styles.th}>Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length > 0 ? (
                inquiries.map((inquiry) => (
                  <tr key={inquiry._id}>
                    <td style={styles.td}>{inquiry.userName?.name || "N/A"}</td> {/* Adjust based on actual data structure */}
                    <td style={styles.td}>{inquiry.email}</td>
                    <td style={styles.td}>{inquiry.contactNumber}</td>
                    <td style={styles.td}>{inquiry.inquiryCategory}</td>
                    <td style={styles.td}>{inquiry.inquiryMessage}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={styles.td}>No inquiries available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <button style={styles.deleteButton} onClick={handleDelete}>Delete</button> {/* Add functionality for delete */}
      </div>
      <Footer />
    </div>
  );

  // Define handleDelete function
  function handleDelete() {
    // Implement delete functionality as needed
    console.log("Delete button clicked");
  }
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#0D1B2A",
    color: "#FFFFFF",
    padding: "20px",
    minHeight: "70vh",
  },
  inquiriesContainer: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  title: {
    color: "#000000",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    textAlign: "left",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
  },
  deleteButton: {
    backgroundColor: "#F4D35E",
    color: "#000",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    display: "block",
    margin: "0 auto",
  },
  error: {
    color: "#FF0000",
    marginBottom: "20px",
  },
};

export default CustomerInquiries;
