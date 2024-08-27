
import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const CustomerSupportManagerDashboard = () => {
  return (
   <div>
    <NavBar></NavBar>
     <div style={styles.container}>
      <h2 style={styles.title}>Customer Support Manager Dashboard</h2>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Add Found Items</button>
        <button style={styles.button}>View Customer Inquiry</button>
        <button style={styles.button}>View Lost Items</button>
        <button style={styles.button}>View Found Items</button>
        <button style={styles.button}>Add Transport</button>
      </div>
    </div>
    <Footer></Footer>
   </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#0D1B2A',
    color: '#FFFFFF',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '100%',
    height: '70vh',
  },
  title: {
    marginBottom: '30px',
    fontSize: '24px',
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  button: {
    backgroundColor: '#FFFFFF',
    color: '#0D1B2A',
    padding: '15px',
    borderRadius: '10px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default CustomerSupportManagerDashboard;
