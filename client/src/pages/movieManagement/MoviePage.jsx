import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';
import movie1 from '../../../public/movie1.jpeg';
import movie2 from '../../../public/movie2.jpeg';
import movie3 from '../../../public/movie3.jpeg';
import movie4 from '../../../public/movie4.jpeg';
import movie5 from '../../../public/movie5.jpeg';
import movie6 from '../../../public/movie6.jpeg';

const MovieSection = () => {
  const movies = [
    {
      title: 'My Red Comrade',
      image: movie1,
    },
    {
      title: 'Thangalaan',
      image: movie2,
    },
    {
      title: 'Despicable Me4',
      image: movie3,
    },
    {
      title: 'Kambili',
      image: movie4,
    },
    {
      title: 'Deadpool and Wolverine',
      image: movie5,
    },
    {
      title: 'Demote Colony 2',
      image: movie6,
    },
  ];

  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <div style={styles.filterGroup}>
            <h3>Filter By Genre</h3>
            <ul style={styles.list}>
              <li>Family</li>
              <li>Action</li>
              <li>Comedy</li>
              <li>Horror</li>
              <li>Romantic</li>
            </ul>
          </div>
          <div style={styles.filterGroup}>
            <h3>Filter By Language</h3>
            <ul style={styles.list}>
              <li>Sinhala</li>
              <li>Tamil</li>
              <li>Hindi</li>
              <li>English</li>
            </ul>
          </div>
          <div style={styles.filterGroup}>
            <h3>Filter By Date</h3>
            <button style={styles.button}>Now Showing</button>
            <button style={styles.button}>Upcoming</button>
          </div>
          <button style={styles.showtimesButton}>View Showtimes</button>
        </div>
        <div style={styles.moviesGrid}>
          {movies.map((movie, index) => (
            <div key={index} style={styles.movieCard}>
              <img src={movie.image} alt={movie.title} style={styles.movieImage} />
              <p style={styles.movieTitle}>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    backgroundColor: '#1b1f38',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#0c1024',
    padding: '15px',
    borderRadius: '10px',
    marginRight: '20px',
    color: 'white',  // Set sidebar text color to white
  },
  filterGroup: {
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    color: 'white',  // Set list item text color to white
  },
  button: {
    backgroundColor: '#1b5e20',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    margin: '10px 0',
    cursor: 'pointer',
    display: 'block',
  },
  showtimesButton: {
    backgroundColor: '#ff9800',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
  moviesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
    flexGrow: 1,
  },
  movieCard: {
    textAlign: 'center',
    backgroundColor: '#0c1024',
    padding: '15px',
    borderRadius: '10px',
  },
  movieImage: {
    width: '90%',
    borderRadius: '10px',
  },
  movieTitle: {
    color: '#fff',
    marginTop: '10px',
  },
};

export default MovieSection;
