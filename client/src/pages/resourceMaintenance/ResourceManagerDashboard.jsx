
import React from 'react';

const ResourceManagerDashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Customer Support Manager Dashboard</h2>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>View Resources</button>
        <button style={styles.button}>Add new Resources</button>
        <button style={styles.button}>Delete Resources</button>
        <button style={styles.button}>Generate Report</button>
        <button style={styles.button}>Shedule & Maintenance Task</button>
        <button style={styles.button}>Update & Maintenance Task</button>

      </div>
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

export default ResourceManagerDashboard;
