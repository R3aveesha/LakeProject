import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import FoodOrderStart from './pages/foodManagement/FoodOrderStart.jsx';
//import AdminLogins from './components/logins/AdminLogins.jsx';
//import IndoorGames from './pages/gamesManagement/IndoorGames.jsx';
//import LoginPage from './components/logins/LoginPage.jsx';
import CategorizeNav from './components/core/CategorizeNav.jsx';
import LoginPage from './pages/LoginPage.jsx';
import StaffLoginPage from './pages/StaffLoginPage.jsx';
import AdminLoginPage from './pages/AdminLogin.jsx';
import CommonLoginPage from './pages/CommonLoginPage.jsx';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/staff" element={<StaffLoginPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/commomLoign" element={<CommonLoginPage />} />
        <Route path="/categorize" element={<CategorizeNav />} />

        {/* <Route path="/games/indoor" element={<IndoorGames />} /> */}
        <Route path="/food/start" element={<FoodOrderStart />} />
      </Routes>
    </Router>
  );
}

export default App;
