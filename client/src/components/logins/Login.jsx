import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (for demonstration)
    if (email === 'user@example.com' && password === 'password') {
      setError('');
      alert('Login successful!');
      // Handle successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <input
          type="email"
          className={styles.inputField}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.inputField}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
