import React from 'react';
import LogoLake from '../assets/LogoLake.png'; 

function Navbar() {
  return (
    <div className="admin-login-page">
      <div className="navbar">
        <div className="logo">
          <img src={LogoLake} alt="LakeLogo" />
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
      </div>
    </div>
  );
}

export default Navbar;
