import React from 'react';

const LeaveRequests = () => {
  const containerStyle = {
    width: '80%',
    margin: '0 auto',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    borderBottom: '2px solid #ddd',
    padding: '10px',
    backgroundColor: '#e0e0e0',
    textAlign: 'left',
  };

  const tdStyle = {
    borderBottom: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  };

  const statusAcceptedStyle = {
    color: 'white',
    backgroundColor: '#f8b400',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  const statusRejectedStyle = {
    color: 'white',
    backgroundColor: '#333',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  return (
    <div>
    

      <div style={containerStyle}>
        <h2>MY LEAVE REQUESTS</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Leave ID</th>
              <th style={thStyle}>Staff ID</th>
              <th style={thStyle}>Leave Need Date</th>
              <th style={thStyle}>Reason</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>L001</td>
              <td style={tdStyle}>S001</td>
              <td style={tdStyle}>30/08/2024</td>
              <td style={tdStyle}>For channeling doctor</td>
              <td style={tdStyle}>
                <span style={statusAcceptedStyle}>Accepted</span>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>L010</td>
              <td style={tdStyle}>S001</td>
              <td style={tdStyle}>02/09/2024</td>
              <td style={tdStyle}>For essential work</td>
              <td style={tdStyle}>
                <span style={statusRejectedStyle}>Rejected</span>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>L030</td>
              <td style={tdStyle}>S001</td>
              <td style={tdStyle}>25/08/2024</td>
              <td style={tdStyle}>For channeling doctor</td>
              <td style={tdStyle}>
                <span style={statusAcceptedStyle}>Accepted</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default LeaveRequests;
