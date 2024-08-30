import React from 'react';
import Footer from '../../components/core/Footer';
import NavBar from '../../components/core/NavBar';

const Myleaves = () => {
  const containerStyle = {
    backgroundColor: '#161E38', // Updated background color for the container
    padding: '20px',
    minHeight: '100vh',
  };

  const tableStyle = {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    backgroundColor: '#A0AFC1',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const thTdStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
  };

  const headerStyle = {
    backgroundColor: '#A0AFC1',
    padding: '20px 10px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    color: 'white',
  };

  const rowStyle = {
    backgroundColor: '#e0e0e0',
  };

  const statusAcceptedStyle = {
    backgroundColor: '#FFA500',
    color: '#000',
    padding: '5px 10px',
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const statusRejectedStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const dashboardButtonStyle = {
    backgroundColor: '#44DFF6',
    color: '#000',
    padding: '10px 20px',
    borderRadius: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    margin: '20px',
  };

  return (
    <div>
      <NavBar></NavBar>
      <div style={containerStyle}>
      <button style={dashboardButtonStyle}>My Dashboard</button>
      <div style={headerStyle}>MY LEAVE REQUESTS</div>
      <table style={tableStyle}>
        <thead>
          <tr style={rowStyle}>
            <th style={thTdStyle}>Leave ID</th>
            <th style={thTdStyle}>Staff ID</th>
            <th style={thTdStyle}>Leave Need Date</th>
            <th style={thTdStyle}>Reason</th>
            <th style={thTdStyle}>Status</th>
          </tr>
        </thead>
        
      </table>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Myleaves;
