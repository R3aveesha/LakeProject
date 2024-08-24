import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className="login-container">
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Value" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Value" />
        </div>
        <button type="submit" className="login-button">Sign In</button>
      </form>
      <div className="login-footer">
        <a href="#">Forgot password?</a>
        <a href="#">Sign Up</a>
      </div>
    </div>
  </div>
  )
}

export default Login