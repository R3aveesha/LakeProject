import React, { useEffect } from 'react';
import Footer from '../../components/core/Footer';
import NavBar from '../../components/core/NavBar';

const ResourceReport = () => {
  // Add a background color to the body
  useEffect(() => {
    document.body.style.backgroundColor = '#0c1821'; // Dark blue background
    return () => {
      document.body.style.backgroundColor = ''; // Reset when component unmounts
    };
  }, []);

  const containerStyle = {
    backgroundColor: '#e0e0e0', // Light gray background for the container
    padding: '50px',
    borderRadius: '10px',
    
    width: '60%',
    margin: '0 auto',
    marginTop: '50px' // Adds some space from the top
  };

  const headerStyle = {
    backgroundColor: '#2c303a', // Darker gray header
    color: 'white',
    textAlign: 'center',
    padding: '15px',
    borderRadius: '10px 10px 0 0',
    fontSize: '20px'
  };

  const bodyStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#f2f2f2', // Light background for the form
    borderRadius: '0 0 10px 10px'
  };

  const formGroupStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#dcdcdc', // Alternating row background
    borderRadius: '5px'
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '10px'
  };

  const inputStyle = {
    width: '60%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0'
  };

  const buttonContainerStyle = {
    gridColumn: 'span 2',
    display: 'flex',
    justifyContent: 'space-between'
  };

  const buttonStyle = {
    backgroundColor: '#ffaa00', // Yellow button
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div>
        <NavBar></NavBar>
    <div style={containerStyle}>
      <div style={headerStyle}>
        REPORT ON RESOURCE R001
      </div>
      <div style={bodyStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="resource-name">Name</label>
          <input type="text" id="resource-name" placeholder="Resource Name" style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="price">Price of an each</label>
          <input type="text" id="price" placeholder="Price" style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="quantity">Quantity Available</label>
          <input type="number" id="quantity" placeholder="Quantity" style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="maintenance">Maintenance</label>
          <input type="text" id="maintenance" placeholder="Maintenance Status" style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Location" style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="repair">Need Repair</label>
          <input type="text" id="repair" placeholder="Repair Status" style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="ownership">Ownership</label>
          <input type="text" id="ownership" placeholder="Ownership Status" style={inputStyle} />
        </div>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle}>Print Report</button>
          <button style={buttonStyle}>OK</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ResourceReport;
