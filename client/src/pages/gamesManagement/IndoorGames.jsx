import React from 'react';
import styles from '../gamesManagement/IndoorGames.module.css';

const games = [
  { name: 'Bowling', image: `url(${badminton})` },
  { name: 'Horse Riding', image: 'horse-riding.jpg' },
  { name: 'Archery', image: 'archery.jpg' },
  { name: 'Football', image: 'football.jpg' },
  { name: 'Water Sports', image: 'water-sports.jpg' },
  { name: 'Badminton', image: 'badminton.jpg' },
  { name: 'Gaming', image: 'gaming.jpg' },
  { name: 'Cricket', image: 'cricket.jpg' },
];

const Games = () => {
  return (
    <div className={styles.gamesContainer}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search Games" />
        <button className={styles.searchButton}>🔍</button>
      </div>
      <div className={styles.gamesGrid}>
        {games.map((game, index) => (
          <div key={index} className={styles.gameCard}>
            <img src={`../Images/${game.image}`} alt={game.name} />
            <h2>{game.name}</h2>
            <button className={styles.viewButton}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
