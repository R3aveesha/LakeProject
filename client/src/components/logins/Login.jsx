// src/components/logins/Login.jsx
import React from 'react';
import styles from '../../styles/login.module.css'; // Ensure this path is correct

const Login = () => {
  return (
    <div className={styles['login-container']}>
      <div className={styles['login-box']}>
        <h2>Login</h2>
        <form>
          <div className={styles['input-group']}>
            <label>Email</label>
            <input type="email" placeholder="Value" />
          </div>
          <div className={styles['input-group']}>
            <label>Password</label>
            <input type="password" placeholder="Value" />
          </div>
          <button type="submit" className={styles['sign-in-button']}>Sign In</button>
        </form>
        <div className={styles['footer-links']}>
          <a href="#" className={styles['forgot-password']}>Forgot password?</a>
          <a href="#" className={styles['sign-up']}>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
