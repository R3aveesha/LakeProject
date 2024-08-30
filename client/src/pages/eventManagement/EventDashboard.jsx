import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';
import game1 from '../../../public/game1.jpeg';
import game2 from '../../../public/game2.png';
import game3 from '../../../public/game3.png';

const EventDashboard = () => {
  return (
    <>
      <NavBar name="home" />
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <h2 style={styles.categoryTitle}>Category</h2>
          <div style={styles.categoryList}>
            <button style={styles.categoryItemhigh}>Gaming Tournaments</button>
            <button style={styles.categoryItem}>Musical Events</button>
            <button style={styles.categoryItem}>Others</button>
          </div>
        </div>
        <div style={styles.mainContent}>
          <div style={styles.eventCard}>
            <img src={game1} alt="Victory Arena" style={styles.eventImage} />
            <h3 style={styles.cardTitle}>Victory Arena</h3>
            <button style={styles.viewButton}>View</button>
          </div>
          <div style={styles.eventCard}>
            <img src={game2} alt="Gaming Legends" style={styles.eventImage} />
            <h3 style={styles.cardTitle}>Gaming Legends</h3>
            <button style={styles.viewButton}>View</button>
          </div>
          <div style={styles.eventCard}>
            <img src={game3} alt="The Ultimate Gamefest" style={styles.eventImage} />
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
    display: 'flex',
    flexDirection: 'column',
  },
  categoryItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#ffff',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none', // To remove the default button border
  },
  categoryItemhigh: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#FFBB00',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#0a1e42',
    border: 'none', // To remove the default button border
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
