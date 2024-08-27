import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import FoodOrderStart from './pages/foodManagement/FoodOrderStart.jsx';
//import AdminLogins from './components/logins/AdminLogins.jsx';
//import IndoorGames from './pages/gamesManagement/IndoorGames.jsx';
//import LoginPage from './components/logins/LoginPage.jsx';
import FoodPage from './pages/foodManagement/FoodPage.jsx'
import { CartProvider } from './pages/foodManagement/context/CartContext.jsx';
import Cart from './pages/foodManagement/Cart.jsx';
import LoginPage from './pages/LoginPage.jsx';
import StaffLoginPage from './pages/StaffLoginPage.jsx';
import AdminLoginPage from './pages/AdminLogin.jsx';
import CommonLoginPage from './pages/CommonLoginPage.jsx';
import GameMainPage from './pages/gamesManagement/gameMainPage.jsx';
import GamesDetails from './pages/gamesManagement/Dashboards/GamesDetails.jsx';
import CategorizeNav from './components/core/CategorizeNav.jsx';
import ManageFoood from './pages/foodManagement/ManageFood.jsx'
import UpdateFood from './pages/foodManagement/UpdateFoodItems.jsx'




function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/staff" element={<StaffLoginPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/games" element={<GameMainPage />} />
        <Route path="//games/:activity" element={<GamesDetails />} />
        <Route path="/commomLoign" element={<CommonLoginPage />} />
        <Route path="/categorize" element={<CategorizeNav />} />

        {/* <Route path="/games/indoor" element={<IndoorGames />} /> */}
        <Route path="/food/start" element={<FoodOrderStart />} />
        <Route path="/foods" element={<FoodPage />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/manageFoods" element={<ManageFoood />} />
        <Route path='/updateFoodItem/:id' element={<UpdateFood/>} />

      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
