import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/games/indoor" element={<IndoorGames />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
