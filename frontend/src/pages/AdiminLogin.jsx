import React from 'react';
    
const AdminLogin = () => {
    return (
        <div className="admin-login-page">
            <header className="navbar">
                <div className="logo">
                    <img src="path_to_logo" alt="LakeView Logo" />
                    <span>LakeView Gaming Zone</span>
                </div>
                <nav className="nav-links">
                    <a href="/home">Home</a>
                    <a href="/games">Games</a>
                    <a href="/movies">Movies</a>
                    <a href="/foods">Foods</a>
                    <a href="/events">Events</a>
                    <a href="/support">Support</a>
                    <a href="/signin" className="sign-in-btn">Sign In</a>
                    <a href="/register" className="register-btn">Register</a>
                </nav>
            </header>

            <main className="admin-login-container">
                <h1>Admin Login</h1>
                <form className="login-form">
                    <label>Email</label>
                    <input type="email" placeholder="Value" />
                    <label>Password</label>
                    <input type="password" placeholder="Value" />
                    <button type="submit" className="sign-in-button">Sign In</button>
                    <a href="/forgot-password" className="forgot-password-link">Forgot password?</a>
                </form>
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <div className="contact-info">
                        <h3>Contact Us</h3>
                        <p>Gampaha, Sri Lanka</p>
                        <p>Telephone: +9478-5347037</p>
                        <p>Telephone: +9471-0768601</p>
                        <p>Email: lakeview01@gmail.com</p>
                    </div>
                    <div className="about-us">
                        <h3>About Us</h3>
                        <p>
                            Introduce the management system of the play zone for Lakeview Gaming Zone, 
                            which is a single platform for managing game bookings, food orders, and event 
                            management to provide an integrated experience to the visitor.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AdminLogin;
