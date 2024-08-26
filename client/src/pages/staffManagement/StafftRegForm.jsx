import React from 'react';

const StaffRegistrationForm = () => {
  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#1b1f38',
    padding: '20px',
  };

  const formStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '20px',
    backgroundColor: '#d1d1d1',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '800px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    marginRight: '10px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  };

  const titleStyle = {
    gridColumn: 'span 2',
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    gridColumn: 'span 2',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
  };

  const registerButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f9a825',
    color: '#ffffff',
  };

  const clearButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#000000',
    color: '#ffffff',
  };

  return (
    <div style={formContainerStyle}>
      <form style={formStyle}>
        <h2 style={titleStyle}>Staff Registration Form</h2>
        <label style={labelStyle} htmlFor="name">Name</label>
        <input style={inputStyle} type="text" id="name" />
        
        <label style={labelStyle} htmlFor="job">Job Position</label>
        <input style={inputStyle} type="text" id="job" />
        
        <label style={labelStyle} htmlFor="email">Email</label>
        <input style={inputStyle} type="email" id="email" />
        
        <label style={labelStyle} htmlFor="password">Password</label>
        <input style={inputStyle} type="password" id="password" />
        
        <label style={labelStyle} htmlFor="nic">NIC</label>
        <input style={inputStyle} type="text" id="nic" />
        
        <div style={{ gridColumn: 'span 1' }}></div> {/* Empty space */}
        
        <label style={labelStyle} htmlFor="address">Address</label>
        <input style={inputStyle} type="text" id="address" />
        
        <div style={{ gridColumn: 'span 1' }}></div> {/* Empty space */}
        
        <label style={labelStyle} htmlFor="phone">Phone</label>
        <input style={inputStyle} type="text" id="phone" />
        
        <div style={buttonContainerStyle}>
          <button type="submit" style={registerButtonStyle}>Register</button>
          <button type="reset" style={clearButtonStyle}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default StaffRegistrationForm;
