import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import FoodOrderStart from './pages/foodManagement/FoodOrderStart.jsx';
//import AdminLogins from './components/logins/AdminLogins.jsx';
//import IndoorGames from './pages/gamesManagement/IndoorGames.jsx';
//import LoginPage from './components/logins/LoginPage.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/games/indoor" element={<IndoorGames />} /> */}
        <Route path="/food/start" element={<FoodOrderStart />} />
      </Routes>
    </Router>
  );
}

export default App;
