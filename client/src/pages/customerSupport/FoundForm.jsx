import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const FoundForm = () => {
  return (
    <div>
      <NavBar></NavBar>
    <div style={styles.container}> 
      <div style={styles.dashboard}>
        <button style={styles.dashboardButton}>Dashboard</button>
        <h2 style={styles.title}>Found Items Form</h2>
      </div>

      <div style={styles.formContainer}>
        <div style={styles.formRow}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="text" placeholder="Found Item Category" style={styles.input} />
        </div>
        <div style={styles.formRow}>
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="text" placeholder="Found Item" style={styles.input} />
        </div>
        <div style={styles.formRow}>
          <input type="text" placeholder="Contact Number" style={styles.input} />
          <input type="text" placeholder="Found place" style={styles.input} />
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.submitButton}>Submit</button>
        <button style={styles.editButton}>Edit</button>
        <button style={styles.deleteButton}>Delete</button>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#161E38', // Main background color
    minHeight: '80vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboard: {
    marginBottom: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dashboardButton: {
    backgroundColor: '#1E2A47',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  title: {
    fontSize: '24px',
    color: '#ffffff',
    marginBottom: '20px',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    width: '500px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  input: {
    width: '48%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  submitButton: {
    backgroundColor: '#FFA800',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  editButton: {
    backgroundColor: '#FFA800',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  deleteButton: {
    backgroundColor: '#FFA800',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default FoundForm;
