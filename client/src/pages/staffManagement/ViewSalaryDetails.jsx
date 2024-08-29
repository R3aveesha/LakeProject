import React from 'react';
import Footer from '../../components/core/Footer';
import NavBar from '../../components/core/NavBar';

const SalaryTable = () => {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#161E38',
    color: '#234151',
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
     <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>SalaryId</th>
            <th style={thStyle}>Month</th>
            <th style={thStyle}>Total Hours</th>
            <th style={thStyle}>OT Hours</th>
            <th style={thStyle}>Normal Salary</th>
            <th style={thStyle}>OT salary</th>
            <th style={thStyle}>Salary for hours</th>
            <th style={thStyle}>Final Salary</th>
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
            <td style={tdStyle}></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer></Footer>
   </div>
  );
};

export default SalaryTable;
