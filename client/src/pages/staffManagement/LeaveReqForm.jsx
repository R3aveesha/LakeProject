import React from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const LeaveRequestForm = () => {
  // Inline CSS styles
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#4a5472', // Background similar to the image
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const formStyle = {
    backgroundColor: '#dcdcdc', // Light gray background for form
    padding: '30px',
    borderRadius: '15px',
    width: '400px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '90%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#e0e0e0', // Gray input background
  };

  const buttonStyle = {
    width: '130px',
    padding: '10px',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  };

  const registerButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f0ad4e', // Yellow button
    color: 'white',
  };

  const clearButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#000000', // Black button
    color: 'white',
  };

  return (
    <div>
      <NavBar></NavBar>
      <div style={containerStyle}>
      <div style={formStyle}>
        <h3>Leave Request Form</h3>
        <form>
          <input style={inputStyle} type="text" placeholder="Staff ID" />
          <input style={inputStyle} type="date" placeholder="Leave Need Date" />
          <textarea style={inputStyle} rows="3" placeholder="Reason"></textarea>
          <div>
            <button type="submit" style={registerButtonStyle}>Register</button>
            <button type="button" style={clearButtonStyle}>Clear</button>
          </div>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default LeaveRequestForm;
