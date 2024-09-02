import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BookingContext } from "../foodManagement/context/BookingContext";
import { useNavigate } from "react-router-dom";

// SeatSelection Component
const SeatSelection = ({ movieId, pricePerSeat }) => {
  const [unavailableSeats, setUnavailableSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { bookingDetails, setBookingItem, addSeats } =
    useContext(BookingContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if itemId is valid before making API requests
    if (!bookingDetails.itemId) {
      console.warn("No itemId set in bookingDetails");
      return;
    }

    const fetchUnavailableSeats = async () => {
      try {
        let response;
        if (bookingDetails.type === "movie") {
          response = await axios.get(
            `http://localhost:3000/api/bkm/bookings/movie/${bookingDetails.itemId}`
          );
        } else if (bookingDetails.type === "game") {
          response = await axios.get(
            `http://localhost:3000/api/bkg/bookings/game/${bookingDetails.itemId}`
          );
        } else {
          console.warn("Invalid booking type:", bookingDetails.type);
          return;
        }

        const bookingsData = response.data || [];
        // Flatten the seatNumbers arrays from all bookings into one array
        const seats = bookingsData.flatMap((booking) => booking.seatNumbers);
        setUnavailableSeats(seats);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchUnavailableSeats();
  }, [bookingDetails.itemId, bookingDetails.type]);

  const handleSeatClick = (seatNumber) => {
    if (unavailableSeats.includes(seatNumber)) {
      return; // If the seat is unavailable, do nothing
    }

    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  const confirmSelection = () => {
    addSeats(selectedSeats);
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= 50; i++) {
      const seatNumber = `S${i}`;
      seats.push(
        <div
          key={seatNumber}
          className={`seat ${
            unavailableSeats.includes(seatNumber) ? "unavailable" : ""
          } ${selectedSeats.includes(seatNumber) ? "selected" : ""}`}
          onClick={() => handleSeatClick(seatNumber)}
        >
          {seatNumber}
        </div>
      );
    }
    return seats;
  };

  return (
    <div className="seat-selection">
      <h3>Select Your Seats</h3>
      <div className="seats-container">{renderSeats()}</div>
      <button onClick={confirmSelection} className="confirm-button">
        Confirm Selection
      </button>
      <button
        onClick={() =>
          bookingDetails.type === "movie"
            ? navigate("/movieBillInfo")
            : navigate("/gameBillInfo")
        }
        className="confirm-button"
      >
        Proceed
      </button>
    </div>
  );
};

// CSS for SeatSelection Component (in the same file)
const styles = `
.seat-selection {
  text-align: center;
  margin-top: 20px;
}

.seats-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
}

.seat {
  width: 35px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #333;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  user-select: none;
}

.seat.unavailable {
  background-color: grey;
  cursor: not-allowed;
}

.seat.selected {
  background-color: green;
  color: #fff;
}

.confirm-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.confirm-button:hover {
  background-color: #218838;
}
`;

// Adding CSS to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default SeatSelection;
