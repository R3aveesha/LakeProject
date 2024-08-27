import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const MoviePage = () => {
  return (
    <>
      <NavBar name="home" />
      <div style={styles.container}>
        <div style={styles.filterSection}>
          <input
            type="text"
            placeholder="Search Movies"
            style={styles.searchBox}
          />
          <div style={styles.filterContainer}>
            <div style={styles.filterCategory}>
              <h3 style={styles.filterTitle}>Filter By Genre</h3>
              <ul style={styles.filterList}>
                <li>Family</li>
                <li>Action</li>
                <li>Comedy</li>
                <li>Horror</li>
                <li>Romantic</li>
              </ul>
            </div>
            <div style={styles.filterCategory}>
              <h3 style={styles.filterTitle}>Filter By Language</h3>
              <ul style={styles.filterList}>
                <li>Sinhala</li>
                <li>Tamil</li>
                <li>Hindi</li>
                <li>English</li>
              </ul>
            </div>
            <div style={styles.filterCategory}>
              <h3 style={styles.filterTitle}>Filter By Date</h3>
              <ul style={styles.filterList}>
                <li>Now Showing</li>
                <li>Upcoming</li>
              </ul>
            </div>
          </div>
          <button style={styles.showtimesButton}>View Showtimes</button>
        </div>

        <div style={styles.moviesSection}>
          <div style={styles.movieCard}>
            <img
              src="https://via.placeholder.com/120x160"
              alt="My Red Comrade"
              style={styles.movieImage}
            />
            <p>My Red Comrade</p>
          </div>
          <div style={styles.movieCard}>
            <img
              src="https://via.placeholder.com/120x160"
              alt="Thangalaan"
              style={styles.movieImage}
            />
            <p>Thangalaan</p>
          </div>
          <div style={styles.movieCard}>
            <img
              src="https://via.placeholder.com/120x160"
              alt="Despicable Me 4"
              style={styles.movieImage}
            />
            <p>Despicable Me 4</p>
          </div>
          <div style={styles.movieCard}>
            <img
              src="https://via.placeholder.com/120x160"
              alt="Kambili"
              style={styles.movieImage}
            />
            <p>Kambili</p>
          </div>
          <div style={styles.movieCard}>
            <img
              src="https://via.placeholder.com/120x160"
              alt="Deadpool and Wolverine"
              style={styles.movieImage}
            />
            <p>Deadpool and Wolverine</p>
          </div>
          <div style={styles.movieCard}>
            <img
              src="https://via.placeholder.com/120x160"
              alt="Demonte Colony 2"
              style={styles.movieImage}
            />
            <p>Demonte Colony 2</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '#1b1b2f',
    color: '#fff',
  },
  filterSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#2d2d44',
    borderRadius: '10px',
    width: '25%',
  },
  searchBox: {
    padding: '10px',
    marginBottom: '20px',
    width: '100%',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
  },
  filterContainer: {
    width: '100%',
  },
  filterCategory: {
    marginBottom: '20px',
  },
  filterTitle: {
    marginBottom: '10px',
    color: '#f8f8f8',
  },
  filterList: {
    listStyleType: 'none',
    padding: '0',
    color: '#bbb',
  },
  showtimesButton: {
    padding: '10px 20px',
    backgroundColor: '#f8c444',
    border: 'none',
    borderRadius: '5px',
    color: '#000',
    cursor: 'pointer',
    marginTop: '20px',
  },
  moviesSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    width: '70%',
  },
  movieCard: {
    textAlign: 'center',
    backgroundColor: '#2d2d44',
    borderRadius: '10px',
    padding: '10px',
  },
  movieImage: {
    width: '120px',
    height: '160px',
    borderRadius: '10px',
  },
};

export default MoviePage;
