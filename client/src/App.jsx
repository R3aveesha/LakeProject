import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Home from './pages/Home.jsx'
import LoginPage from './components/LoginPage.jsx';
import AdminLogins from './components/AdminLogins.jsx';
import IndoorGames from './pages/gamesManagement/IndoorGames.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/adminlogins" element={<AdminLogins />} />

        <Route path="/games/indoor" element={<IndoorGames />} />

      </Routes>
    </Router>
  );
}

export default App;
