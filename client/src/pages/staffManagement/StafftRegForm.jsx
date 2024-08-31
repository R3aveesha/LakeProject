import React, { useState } from 'react';
import NavBar from '../../components/core/NavBar';
import Footer from '../../components/core/Footer';

const StaffRegistrationForm = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nic, setNic] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    position: '',
    phone: '',
  });

  const validateName = (value) => {
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name can only contain letters and spaces.' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }
  };

  const validatePosition = (value) => {
    const positionPattern = /^[A-Za-z\s]+$/;
    if (!positionPattern.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, position: 'Position can only contain letters and spaces.' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, position: '' }));
    }
  };

  const validatePhone = (value) => {
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, phone: 'Phone number must be exactly 10 digits.' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setName(value);
        validateName(value);
        break;
      case 'job':
        setPosition(value);
        validatePosition(value);
        break;
      case 'phone':
        setPhone(value);
        validatePhone(value);
        break;
      default:
        if (id === 'email') setEmail(value);
        if (id === 'password') setPassword(value);
        if (id === 'nic') setNic(value);
        if (id === 'address') setAddress(value);
        break;
    }
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    backgroundColor: '#1b1f38',
    padding: '20px',
    boxSizing: 'border-box',
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

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
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

  const responsiveGrid = {
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  };

  return (
    <div>
      <NavBar />
      <div style={formContainerStyle}>
        <form style={{ ...formStyle, ...responsiveGrid }}>
          <h2 style={titleStyle}>Staff Registration Form</h2>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="name">Name</label>
            <input
              style={inputStyle}
              type="text"
              id="name"
              value={name}
              onChange={handleChange}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="job">Position</label>
            <input
              style={inputStyle}
              type="text"
              id="job"
              value={position}
              onChange={handleChange}
            />
            {errors.position && <p style={{ color: 'red' }}>{errors.position}</p>}
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="email">Email</label>
            <input
              style={inputStyle}
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="password">Password</label>
            <input
              style={inputStyle}
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="nic">NIC</label>
            <input
              style={inputStyle}
              type="text"
              id="nic"
              value={nic}
              onChange={handleChange}
            />
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="address">Address</label>
            <input
              style={inputStyle}
              type="text"
              id="address"
              value={address}
              onChange={handleChange}
            />
          </div>

          <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="phone">Phone</label>
            <input
              style={inputStyle}
              type="text"
              id="phone"
              value={phone}
              onChange={handleChange}
            />
            {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
          </div>

          <div style={buttonContainerStyle}>
            <button type="submit" style={registerButtonStyle}>Register</button>
            <button type="reset" style={clearButtonStyle}>Clear</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default StaffRegistrationForm;
