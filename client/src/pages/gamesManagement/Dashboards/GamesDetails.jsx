import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GamesDetails = () => {
  const { id } = useParams(); // Get the game ID from the URL
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/games/games/${id}`)
      .then((response) => {
        setGame(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the game details!", error);
      });
  }, [id]);

  console.log(game);

  if (!game) {
    return <p>Loading...</p>;
  }

  return (
    <div className="games-details">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Game Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr key={game.id}>
            <td>{game.id}</td>
            <td>{game.category}</td>
            <td>{game.name}</td>
            <td>{game.description}</td>
            <td>{game.price}</td>
            <td>
              <button className="edit-button">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GamesDetails;
