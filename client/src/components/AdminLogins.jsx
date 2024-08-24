import React from 'react';
import './AdminLogins.css';

const AdminLogins = () => {
  const managers = [
    'Games Manager',
    'Staff Manager',
    'Restaurant Manager',
    'Ticket Booking Manager',
    'Movie Manager',
    'Customer Support Manager',
    'Event Manager',
    'Resource Manager',
  ];

  return (
    <div className="admin-dashboard">
      <h2>Administrators</h2>
      <div className="manager-grid">
        {managers.map((manager, index) => (
          <button key={index} className="manager-button">
            {manager}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminLogins;
