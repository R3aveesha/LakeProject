import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const ViewEvent = () => {
  return (
    <>
      <NavBar name="events" />
      <div style={styles.container}>
        <div style={styles.imageSection}>
          <img src="path_to_victory_arena_image.jpg" alt="Victory Arena" style={styles.eventImage} />
        </div>
        <div style={styles.detailsSection}>
          <h1 style={styles.eventTitle}>Victory Arena</h1>
          <p style={styles.eventDescription}>
            Prepare yourself for an exhilarating competition at Victory Arena, the leading gaming event hosted by Play Zone! 
            This dynamic event unites elite gamers for an extraordinary contest spanning various game genres. Whether you 
            prefer high-octane shooters or tactical battle royals, Victory Arena caters to all preferences. Engage in fierce 
            matchups, relish live commentary, and immerse yourself in the thrill as participants vie for honor and a substantial 
            prize. Seize the opportunity to partake in this unparalleled gaming experience!
          </p>
          <button style={styles.bookButton}>Book Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    backgroundColor: '#0a1e42',
    color: '#fff',
    minHeight: 'calc(100vh - 60px)', // assuming navbar is 60px high
  },
  imageSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20px',
  },
  eventImage: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '8px',
  },
  detailsSection: {
    flex: '1.5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  eventTitle: {
    fontSize: '32px',
    color: '#3cd1c2',
    marginBottom: '20px',
  },
  eventDescription: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  bookButton: {
    padding: '15px 30px',
    backgroundColor: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    cursor: 'pointer',
    alignSelf: 'start',
  },
};

export default ViewEvent;
