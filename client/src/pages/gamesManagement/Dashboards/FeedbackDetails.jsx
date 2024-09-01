import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../foodManagement/context/authContext";

const FeedbackDetails = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const { user } = useAuth();

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/games/games/feedbacks"
      );
      setFeedbacks(response.data);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleDelete = async (gameId, feedbackId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/games/games/${gameId}/feedbacks/${feedbackId}`
      );
      setFeedbacks((prevFeedbacks) =>
        prevFeedbacks.filter((feedback) => feedback._id !== feedbackId)
      );
      fetchFeedbacks();
    } catch (err) {
      console.error("Error deleting feedback:", err);
    }
  };

  return (
    <div className="feedback-details">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Game Name</th>
            <th>User</th>
            <th>Feedback</th>
            {user.user.role ? <th>Action</th> : <></>}
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.feedbackId}>
              <td>{feedback.gameId}</td>
              <td>{feedback.gameName}</td>
              <td>{feedback.user}</td>
              <td>{feedback.feedback}</td>
              {user.user.role ? (
                <td>
                  <button
                    className="delete-button"
                    onClick={() =>
                      handleDelete(feedback.gameId, feedback.feedbackId)
                    }
                  >
                    Delete
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => {
                      // Handle edit button click
                    }}
                  >
                    Edit
                  </button>
                </td>
              ) : (
                <></>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackDetails;
