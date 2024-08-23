import React from 'react';
import '../pages/AdiminLogin.css'
import Navbar from '../common/navbar';
import Footer from '../common/Footer';

const AdminLogin = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>

            <main className="admin-login-container">
                <h1>Admin Login</h1>
                <form className="login-form">
                    <label>Email</label>
                    <input type="email" placeholder="Value"/>
                    <label>Password</label>
                    <input type="password" placeholder="Value"/>
                    <button type="submit" className="sign-in-button">Sign In</button>
                    <a href="/forgot-password" className="forgot-password-link">Forgot password?</a>
                </form>
            </main>
            <Footer/>
        </div>
    );
};

export default AdminLogin;
