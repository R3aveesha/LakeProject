import React from 'react';

const CustomerInquiries = () => {
  return (
    <div style={styles.container}>
      <div style={styles.dashboard}>
        <h3 style={styles.dashboardTitle}>My Dashboard</h3>
      </div>
      
      <div style={styles.inquiriesContainer}>
        <h2 style={styles.title}>Customer Inquiries</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Contact Number</th>
              <th style={styles.th}>Inquiry Category</th>
              <th style={styles.th}>Inquiry</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Harith</td>
              <td style={styles.td}>harithd@gmail.com</td>
              <td style={styles.td}>0772553475</td>
              <td style={styles.td}>Foods</td>
              <td style={styles.td}>More food items</td>
            </tr>
            <tr>
              <td style={styles.td}>Chanuka</td>
              <td style={styles.td}>chanuxl89@gmail.com</td>
              <td style={styles.td}>0743564637</td>
              <td style={styles.td}>Games</td>
              <td style={styles.td}>Bad facilities</td>
            </tr>
            <tr>
              <td style={styles.td}>Randy</td>
              <td style={styles.td}>randy65@gmail.com</td>
              <td style={styles.td}>0793456789</td>
              <td style={styles.td}>Movie</td>
              <td style={styles.td}>More movie categories</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <button style={styles.deleteButton}>Delete</button>
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
    width: '100%',
    textAlign: 'left',
  },
  dashboardTitle: {
    margin: 0,
    color: '#FFFFFF',
  },
  inquiriesContainer: {
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
  deleteButton: {
    backgroundColor: '#F4D35E',
    color: '#000',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
  },
};

export default CustomerInquiries;
