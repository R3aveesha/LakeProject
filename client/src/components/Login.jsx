import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
      
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Value" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Value" />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <div className="login-footer">
          
        </div>
      </div>
    </div>
  )
}

export default Login