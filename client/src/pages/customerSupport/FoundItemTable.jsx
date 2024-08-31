import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const FoundItemsTable = () => {
  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        <div style={styles.dashboard}>
          <h3 style={styles.dashboardTitle}>My Dashboard</h3>
        </div>

        <div style={styles.tableContainer}>
          <h2 style={styles.title}>Found Items Form</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Contact Number</th>
                <th style={styles.th}>Found Items Category</th>
                <th style={styles.th}>Found Item</th>
                <th style={styles.th}>Found Item Place</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example data row with action buttons */}
              <tr>
                <td style={styles.td}>Example Name</td>
                <td style={styles.td}>example@gmail.com</td>
                <td style={styles.td}>1234567890</td>
                <td style={styles.td}>Category Example</td>
                <td style={styles.td}>Item Example</td>
                <td style={styles.td}>Place Example</td>
                <td style={styles.actionsTd}>
                  <button style={styles.actionButton}>Edit</button>
                  <button style={styles.actionButton}>Delete</button>
                  <button style={styles.actionButton}>View</button>
                </td>
              </tr>
              {/* Add more data rows as needed */}
            </tbody>
          </table>
        </div>

      </div>
      <Footer />
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
  actionsTd: {
    display: 'flex',
    justifyContent: 'space-around',
    borderBottom: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
  actionButton: {
    backgroundColor: '#F4D35E',
    color: '#000',
    padding: '5px 10px',
    margin: '2px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default FoundItemsTable;
