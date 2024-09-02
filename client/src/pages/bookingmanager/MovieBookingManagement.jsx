import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/core/Footer";
import NavBar from "../../components/core/NavBar";

const MovieBookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/bkm/MovieBookings")
      .then((response) => setBookings(response.data))
      .catch((error) => console.error("Error fetching movie bookings:", error));
  }, []);

  const handleConfirm = (bookingId) => {
    axios
      .put(`http://localhost:3000/api/bkm/bookings/${bookingId}`)
      .then((response) => {
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === bookingId
              ? { ...booking, confirmed: true }
              : booking
          )
        );
      })
      .catch((error) => console.error("Error confirming booking:", error));
  };

  const handleDelete = (bookingId) => {
    axios
      .delete(`http://localhost:3000/api/bkm/bookings/${bookingId}`)
      .then((response) => {
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking._id !== bookingId)
        );
      })
      .catch((error) => console.error("Error deleting booking:", error));
  };

  const filteredBookings = bookings.filter((booking) =>
    booking.movie?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundColor: "#161E38",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search by movie name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            color: "#000",
          }}
        />
        <table
          style={{ width: "100%", borderCollapse: "collapse", color: "#fff" }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Movie Name</th>
              <th style={thStyle}>Customer Email</th>
              <th style={thStyle}>Seats</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Booking Status</th>
              <th style={thStyle}>Confirm</th>
              <th style={thStyle}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking._id}>
                <td style={tdStyle}>
                  {booking.movie?.name || "Unknown Movie"}
                </td>
                <td style={tdStyle}>
                  {booking.customer?.email || "Unknown Customer"}
                </td>
                <td style={tdStyle}>
                  {booking.seatNumbers ? booking.seatNumbers.length : 0}
                </td>
                <td style={tdStyle}>${booking.totalPrice.toFixed(2)}</td>
                <td style={tdStyle}>
                  {booking.confirmed ? "Paid" : "Not paid"}
                </td>
                <td style={tdStyle}>
                  <button
                    onClick={() => handleConfirm(booking._id)}
                    disabled={booking.confirmed}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: booking.confirmed
                        ? "#28a745"
                        : "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: booking.confirmed ? "default" : "pointer",
                    }}
                  >
                    {booking.confirmed ? "Payment confirmed" : "Confirm Payment"}
                  </button>
                </td>
                <td style={tdStyle}>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

const thStyle = {
  borderBottom: "2px solid #ddd",
  padding: "12px",
  textAlign: "left",
  color: "#ddd",
};

const tdStyle = {
  borderBottom: "1px solid #ddd",
  padding: "12px",
};

export default MovieBookingManagement;
