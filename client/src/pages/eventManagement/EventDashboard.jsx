import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const EventDashboard = () => {
  return (
    <>
      <NavBar name="home" />
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <h2 style={styles.categoryTitle}>Category</h2>
          <ul style={styles.categoryList}>
            <li style={styles.categoryItemhigh}>Gaming Tournaments</li>
            <li style={styles.categoryItem}>Musical Events</li>
            <li style={styles.categoryItem}>Others</li>
          </ul>
        </div>
        <div style={styles.mainContent}>
          <div style={styles.eventCard}>
            <img src="path_to_victory_arena_image.jpg" alt="Victory Arena" style={styles.eventImage} />
            <h3 style={styles.cardTitle}>Victory Arena</h3>
            <button style={styles.viewButton}>View</button>
          </div>
          <div style={styles.eventCard}>
            <img src="path_to_gaming_legends_image.jpg" alt="Gaming Legends" style={styles.eventImage} />
            <h3 style={styles.cardTitle}>Gaming Legends</h3>
            <button style={styles.viewButton}>View</button>
          </div>
          <div style={styles.eventCard}>
            <img src="path_to_ultimate_gamefest_image.jpg" alt="The Ultimate Gamefest" style={styles.eventImage} />
            <h3 style={styles.cardTitle}>The Ultimate Gamefest</h3>
            <button style={styles.viewButton}>View</button>
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
    height: 'calc(100vh - 60px)', // assuming navbar is 60px high
    backgroundColor: '#0a1e42',
    color: '#fff',
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#1a2b57',
    padding: '20px',
    borderRadius: '8px',
  },
  categoryTitle: {
    marginBottom: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  categoryList: {
    listStyleType: 'none',
    padding: 0,
  },
  categoryItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#0a1e42',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  categoryItemhigh:{
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#ffff',
    borderRadius: '4px',
    cursor: 'pointer',
    color:'#0a1e42',

  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    padding: '20px',
  },
  eventCard: {
    backgroundColor: '#1a2b57',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    flex: '1',
    margin: '0 10px',
  },
  eventImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  cardTitle: {
    margin: '10px 0',
    fontSize: '16px',
  },
  viewButton: {
    padding: '10px 20px',
    backgroundColor: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default EventDashboard;
