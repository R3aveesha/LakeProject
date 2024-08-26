import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Using react-icons for the menu icon

const CategorizeNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarStyle = {
    backgroundColor: '#1b1f38',
    color: 'white',
    padding: isOpen ? '20px' : '10px',
    borderRadius: '10px',
    width: isOpen ? '300px' : '60px',
    height: 'calc(100vh - 40px)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    transition: 'width 0.3s ease',
    display: 'flex',
    flexDirection: isOpen ? 'column' : 'column',
    alignItems: 'center',
  };

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };

  const toggleButtonStyle = {
    display: isOpen ? 'none' : 'block',
    fontSize: '2rem',
    cursor: 'pointer',
    position: 'absolute',
    top: '15px',
    right: '15px',
  };

  const headingStyle = {
    display: isOpen ? 'block' : 'none',
  };

  const listStyle = {
    display: isOpen ? 'block' : 'none',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <h2 style={headingStyle}>Categorize</h2>
        <ul style={listStyle}>
          <li>Indoor Games</li>
          <li>Outdoor Games</li>
          <li>Water Games</li>
        </ul>
      </div>
      <div style={toggleButtonStyle} onClick={toggleSidebar}>
        <FaBars />
      </div>
    </div>
  );
};

export default CategorizeNav;
