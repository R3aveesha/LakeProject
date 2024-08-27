import React, { useState } from 'react';

const StaffTable = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to track search query
  const [staffData, setStaffData] = useState([
    { id: 1, name: 'John Doe', nic: '123456789V', email: 'john@example.com', address: '123 Street', jobPosition: 'Manager', salary: '50000' },
    { id: 2, name: 'Jane Smith', nic: '987654321V', email: 'jane@example.com', address: '456 Avenue', jobPosition: 'Developer', salary: '45000' },
    // Add more staff data here
  ]);

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredStaff = staffData.filter((staff) =>
    staff.name.toLowerCase().includes(searchQuery) ||
    staff.nic.toLowerCase().includes(searchQuery) ||
    staff.email.toLowerCase().includes(searchQuery) ||
    staff.address.toLowerCase().includes(searchQuery) ||
    staff.jobPosition.toLowerCase().includes(searchQuery)
  );

  return (
    <div style={containerStyle}>
      <input
        type="text"
        placeholder="Search staff..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '10px', width: '100%', maxWidth: '400px' }}
      />
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
          {filteredStaff.map((staff) => (
            <tr key={staff.id}>
              <td style={tdStyle}>{staff.id}</td>
              <td style={tdStyle}>{staff.name}</td>
              <td style={tdStyle}>{staff.nic}</td>
              <td style={tdStyle}>{staff.email}</td>
              <td style={tdStyle}>{staff.address}</td>
              <td style={tdStyle}>{staff.jobPosition}</td>
              <td style={tdStyle}>{staff.salary}</td>
              <td style={tdStyle}>
                <button style={updateButtonStyle}>Update</button>
                <button style={deleteButtonStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
