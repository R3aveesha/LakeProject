import React from 'react'      // page for choose logins (customer,staft,Admin)
import './LoginPage.css'
function LoginPage() {
  return (
    <div className="login-container">
      <a href="/customer-login" className="login-box customer">
        Customer Login
      </a>
      <a href="/staff-login" className="login-box staff">
        Staff Login
      </a>
      <a href="/admin-login" className="login-box admin">
        Administrator Login
      </a>
    </div>
  )
}

export default LoginPage