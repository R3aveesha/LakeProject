import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const MovieManagerDashboard = () => {
  return (
    <>
      <NavBar name="home" />
      <div style={styles.container}>
        <h2 style={styles.header}>Movie Manager Dashboard</h2>
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Add New Movie</button>
          <button style={styles.button}>Remove Movies</button>
          <button style={styles.button}>Update Movie Details</button>
          <button style={styles.button}>View Movies</button>
          <button style={styles.button}>Update Movie Showtimes</button>
          <button style={styles.button}>Update Movie Countdown</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 150px)', // Adjust for header and footer height
    backgroundColor: '#1b1b2f',
    color: '#fff',
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    marginBottom: '40px',
    color: '#fff',
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: '15px 25px',
    backgroundColor: '#f8f8f8',
    color: '#1b1b2f',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default MovieManagerDashboard;
