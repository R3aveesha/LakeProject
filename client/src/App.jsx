import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import AdminLogins from './components/logins/AdminLogins.jsx';
import LoginPage from './components/logins/LoginPage.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
