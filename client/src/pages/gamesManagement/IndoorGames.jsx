import React from 'react';
import './IndoorGames.css';

const IndoorGames = () => {
    const sports = [
        { id: 1, name: "Bowling", img: "" },
        { id: 2, name: "Horse Riding", img: "" },
        { id: 3, name: "Archery", img: "" },
        { id: 4, name: "Football", img: "" },
        { id: 5, name: "Water Sports", img: "" },
        { id: 6, name: "Badminton", img: "" },
        { id: 7, name: "Video Gaming", img: "" },
        { id: 8, name: "Cricket", img: "" },
      ];
    return (
        <div className="sports-grid">
            <h2>Indoor Games</h2>
      {sports.map(sport => (
        <div key={sport.id} className="sport-card">
          <img src={sport.img} alt={sport.name} />
          <h3>{sport.name}</h3>
          <button>View</button>
        </div>
      ))}
    </div>
  );
};

export default IndoorGames;
