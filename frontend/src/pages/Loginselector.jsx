import React from 'react';
import Navbar from '../common/navbar';
import '../pages/LoginSelector.css'
import Footer from '../common/Footer';


function App() {
  return (
    <div className="login-page">
        <Navbar/>
      
      <main className="login-options">
        <button className="login-btn customer-login">Customer Login</button>
        <button className="login-btn staff-login">Staff Login</button>
        <button className="login-btn admin-login">Administrator Login</button>
      </main>

        <Footer/>
        
    </div>
  );
}

export default App;
