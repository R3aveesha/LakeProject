import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../../../components/core/NavBar";
import Footer from "../../../components/core/Footer";
import FeedbackGame from "../FeedbackGame"; // Import the FeedbackForm component
import { BookingContext } from "../../foodManagement/context/BookingContext";

const GamesDetails = () => {
  const { id } = useParams(); // Get the game ID from the URL
  const [game, setGame] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const { setBookingItem } = useContext(BookingContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch game details
    axios
      .get(`http://localhost:3000/api/games/games/${id}`)
      .then((response) => {
        setGame(response.data);
        // Set feedbacks from the game details if available
        setFeedbacks(response.data.ratings || []);
      })
      .catch((error) => {
        console.error("There was an error fetching the game details!", error);
      });
  }, [id]);

  const handleBookNow = () => {
    // Implement booking logic here
    setBookingItem('game', game._id, game.price);
    navigate('/selectSeats');
  };

  const handleFeedbackSubmit = () => {
    // Refresh feedbacks after submitting a new one
    axios
      .get(`http://localhost:3000/api/games/games/${id}`)
      .then((response) => {
        setFeedbacks(response.data.ratings || []);
      })
      .catch((error) => {
        console.error("There was an error fetching the updated feedbacks!", error);
      });
  };

  console.log(feedbacks);

  if (!game) {
    return <p style={loadingStyle}>Loading...</p>;
  }

  return (
    <div>
      <NavBar />
      <div style={containerStyle}>
        <img src={game.image} style={{width:"300px"}} />
        <div style={cardStyle}>
          <h2 style={cardTitleStyle}>{game.name}</h2>
          <p><strong>Category:</strong> {game.category}</p>
          <p><strong>Description:</strong> {game.description}</p>
          <p><strong>Price:</strong> RS.{game.price}</p>
          <button style={buttonStyle} onClick={handleBookNow}>
            Book Now
          </button>
          <br />
        </div>

        <FeedbackGame onFeedbackSubmit={handleFeedbackSubmit} />

        <div style={feedbackContainerStyle}>
          <h3 style={feedbackTitleStyle}>Feedbacks</h3>
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <div key={feedback._id} style={feedbackStyle}>
                <p><strong>Reviewer:</strong> {feedback.customerId ? `Customer : ${feedback.customerId}` : feedback.customerId.name}</p>
                <p><strong>Rating:</strong> {feedback.score}</p>
                <p><strong>Comment:</strong> {feedback.feedback}</p>
              </div>
            ))
          ) : (
            <p>No feedbacks available.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Inline CSS Styles
const containerStyle = {
  backgroundColor: '#161E38',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  color: '#fff',
};

const cardStyle = {
  backgroundColor: '#222',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  maxWidth: '400px',
  width: '100%',
  textAlign: 'left',
};

const cardTitleStyle = {
  fontSize: '24px',
  marginBottom: '15px',
  color: '#ffcc00',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#ffcc00',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const loadingStyle = {
  color: '#fff',
  textAlign: 'center',
};

const feedbackContainerStyle = {
  marginTop: '20px',
  backgroundColor: '#333',
  padding: '15px',
  borderRadius: '10px',
  width: '80%',
  marginLeft: '10px',
};

const feedbackTitleStyle = {
  fontSize: '20px',
  color: '#ffcc00',
  marginBottom: '10px',
};

const feedbackStyle = {
  backgroundColor: '#444',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
};

export default GamesDetails;
