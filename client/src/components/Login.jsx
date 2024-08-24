import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Value" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Value" required />
          </div>
          <button type="submit" className="btn-signin">Sign In</button>
          <div className="links">
            <a href="#" className="forgot-password">Forgot password?</a>
            <a href="#" className="sign-up">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login