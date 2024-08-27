import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const ShowtimesPage = () => {
  return (
    <>
      <NavBar name="home" />
      <div style={styles.container}>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Date</th>
                <th style={styles.tableHeader}>Showtime</th>
                <th style={styles.tableHeader}>Name</th>
                <th style={styles.tableHeader}>Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableData}>24/08/2024</td>
                <td style={styles.tableData}>10.30</td>
                <td style={styles.tableData}>Despicable Me 4</td>
                <td style={styles.tableData}>English</td>
              </tr>
              <tr>
                <td style={styles.tableData}></td>
                <td style={styles.tableData}>02.30</td>
                <td style={styles.tableData}>Kambili</td>
                <td style={styles.tableData}>Sinhala</td>
              </tr>
              <tr>
                <td style={styles.tableData}></td>
                <td style={styles.tableData}>06.30</td>
                <td style={styles.tableData}>Demonte Colony 2</td>
                <td style={styles.tableData}>Tamil</td>
              </tr>
              <tr>
                <td style={styles.tableData}>25/08/2024</td>
                <td style={styles.tableData}>10.30</td>
                <td style={styles.tableData}>Deadpool and Wolverine</td>
                <td style={styles.tableData}>English</td>
              </tr>
              <tr>
                <td style={styles.tableData}></td>
                <td style={styles.tableData}>02.30</td>
                <td style={styles.tableData}>My Red Comrade</td>
                <td style={styles.tableData}>Sinhala</td>
              </tr>
              <tr>
                <td style={styles.tableData}></td>
                <td style={styles.tableData}>06.30</td>
                <td style={styles.tableData}>Thangalaan</td>
                <td style={styles.tableData}>Hindi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 150px)', // Adjust height to consider header and footer height
    backgroundColor: '#1b1b2f',
    color: '#fff',
  },
  tableContainer: {
    width: '80%',
    maxWidth: '900px',
    backgroundColor: '#2d2d44',
    padding: '20px',
    borderRadius: '10px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  tableHeader: {
    padding: '15px',
    backgroundColor: '#f8c444',
    color: '#000',
    fontWeight: 'bold',
    borderRadius: '5px',
  },
  tableData: {
    padding: '15px',
    borderBottom: '1px solid #ccc',
    color: '#f8f8f8',
  },
};

export default ShowtimesPage;
