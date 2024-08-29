import React from 'react';
import Footer from '../../components/core/Footer';
import NavBar from '../../components/core/NavBar';

const LeaveDetails = () => {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#161E38', // Changed background color
    color: '#234151', // Changed text color to be readable on dark background
    height:'60vh'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#f4f4f4',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  const tdStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    textAlign: 'left',
  };

  const buttonStyle = {
    padding: '5px 10px',
    margin: '5px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
  };

  const updateButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f0ad4e',
    color: 'white',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#d9534f',
    color: 'white',
  };

  return (
  <div>
    <NavBar></NavBar>
      <div>
      <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Id</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Attendant Time</th>
            <th style={thStyle}>Leave Time</th>
            <th style={thStyle}>Hours</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    <Footer></Footer>
  </div>
  );
};

export default LeaveDetails;
