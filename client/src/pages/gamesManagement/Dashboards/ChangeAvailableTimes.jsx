import React, { useState, useEffect } from "react";
import axios from "axios";

const ChangeAvailableTimes = () => {
  const [gameId, setGameId] = useState("");
  const [gameName, setGameName] = useState("");
  const [availableTime, setAvailableTime] = useState("");
  const [games, setGames] = useState([]);

  // Fetch game IDs when the component loads
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/games/games"); // Adjust the endpoint as needed
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  // Update the game name when the gameId changes
  useEffect(() => {
    const selectedGame = games.find((game) => game._id === gameId);
    setGameName(selectedGame ? selectedGame.name : "");
  }, [gameId, games]);

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/games/games/${gameId}`, {
        availableTimes: [new Date(availableTime)],
      });
      console.log("Available time updated:", response.data);
    } catch (error) {
      console.error("Error updating available time:", error);
    }
  };

  return (
    <div className="change-available-times">
      <form>
        <div className="form-group">
          <label>Game ID:</label>
          <select value={gameId} onChange={(e) => setGameId(e.target.value)}>
            <option value="">Select Game ID</option>
            {games.map((game) => (
              <option key={game._id} value={game._id}>
                {game._id}
              </option>
            ))}
          </select>
        </div>

        {gameName && (
          <div className="form-group">
            <p>Game Name: {gameName}</p>
          </div>
        )}

        <div className="form-group">
          <label>Available Time:</label>
          <input
            type="datetime-local"
            value={availableTime}
            onChange={(e) => setAvailableTime(e.target.value)}
          />
        </div>

        <button type="button" className="save-button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ChangeAvailableTimes;
