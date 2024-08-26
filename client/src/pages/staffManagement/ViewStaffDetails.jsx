import React from 'react';

const StaffTable = () => {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#161E38', // Changed background color
    color: '#234151', // Changed text color to be readable on dark background
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
    <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>NIC</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Address</th>
            <th style={thStyle}>Job Position</th>
            <th style={thStyle}>Salary for hours</th>
            <th style={thStyle}>Option</th>
          </tr>
        </thead>
        <tbody>
          {/* Add rows here */}
          <tr>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>
              <button style={updateButtonStyle}>Update</button>
              <button style={deleteButtonStyle}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
