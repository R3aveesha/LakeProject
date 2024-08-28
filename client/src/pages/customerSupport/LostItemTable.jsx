import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const LostItemsTable = () => {
  return (
   <div>
    <NavBar></NavBar>
     <div style={styles.container}>
      <div style={styles.dashboard}>
        <h3 style={styles.dashboardTitle}>My Dashboard</h3>
      </div>

      <div style={styles.tableContainer}>
        <h2 style={styles.title}>Lost Items Form</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Contact Number</th>
              <th style={styles.th}>Lost Items Category</th>
              <th style={styles.th}>Lost Item</th>
              <th style={styles.th}>Lost Item Place</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Harith</td>
              <td style={styles.td}>harithd@gmail.com</td>
              <td style={styles.td}>0772553475</td>
              <td style={styles.td}>Sports</td>
              <td style={styles.td}>Shuttle Cock</td>
              <td style={styles.td}>Badminton Court</td>
            </tr>
            <tr>
              <td style={styles.td}>Chanuka</td>
              <td style={styles.td}>chanuxl89@gmail.com</td>
              <td style={styles.td}>0743564637</td>
              <td style={styles.td}>Accessories</td>
              <td style={styles.td}>Sunglasses</td>
              <td style={styles.td}>Horse Riding Area</td>
            </tr>
            <tr>
              <td style={styles.td}>Randy</td>
              <td style={styles.td}>randy65@gmail.com</td>
              <td style={styles.td}>0793456789</td>
              <td style={styles.td}>Watch</td>
              <td style={styles.td}>Movie Theater</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={styles.buttonGroup}>
        <button style={styles.editButton}>Edit</button>
        <button style={styles.generateButton}>Generate Reports</button>
        <button style={styles.deleteButton}>Delete</button>
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
    minHeight: '100vh',
  },
  dashboard: {
    backgroundColor: '#1B263B',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
    textAlign: 'left',
  },
  dashboardTitle: {
    margin: 0,
    color: '#FFFFFF',
  },
  tableContainer: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  title: {
    color: '#000000',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '2px solid #ddd',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    textAlign: 'left',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  editButton: {
    backgroundColor: '#F4D35E',
    color: '#000',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  generateButton: {
    backgroundColor: '#F4D35E',
    color: '#000',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#F4D35E',
    color: '#000',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default LostItemsTable;
