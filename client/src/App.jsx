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
import CustomerSupportManagerDashboard from './pages/customerSupport/CustomerSupportDashboard.jsx';
import CustomerSupport from './pages/customerSupport/customerSupportpage.jsx';
import FoundForm from './pages/customerSupport/FoundForm.jsx'
import InquiryForm from './pages/customerSupport/InqueryPage.jsx';
import CustomerInquiries from './pages/customerSupport/InqueryTable.jsx'
import TransportPage from './pages/customerSupport/TransportPage.jsx';
import BillInfo from './pages/eventManagement/BillInfo.jsx';
import BookingEvent from './pages/eventManagement/BookingEvent.jsx';
import CardPay from './pages/eventManagement/CardPay.jsx';
import EventDashboard from './pages/eventManagement/EventDashboard.jsx';
import MusicalEvent from './pages/eventManagement/MusicalEvent.jsx';
import OtherEvent from './pages/eventManagement/OtherEvent.jsx';
import ViewEvent from './pages/eventManagement/ViewEvent.jsx';

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
        <Route path='/food' element={<FoodPage />} />
        <Route path='/cart' element={<Cart />} /> 
        
        <Route path="/foods" element={<FoodPage />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/manageFoods" element={<ManageFoood />} />
        <Route path='/updateFoodItem/:id' element={<UpdateFood/>} />

         {/*customer support*/}

        <Route path='/CustomerSupportManagerDashboard' element={<CustomerSupportManagerDashboard/>}></Route>
        <Route path='/CustomerSupport' element={<CustomerSupport/>}/>
        <Route path='/FoundForm' element={<FoundForm/>}/>
        <Route path='/InqueryPage' element={<InquiryForm/>}/>
        <Route path='/CustomerInquiries' element={<CustomerInquiries/>}/>
        <Route path='/TransportPage' element={<TransportPage/>}/>
         {/*cshould add lost item table*/}


         {/*event management*/}
         <Route path='/BillInfo' element={<BillInfo/>}/>
         <Route path='/BookingEvent' element={<BookingEvent/>}/>
         <Route path='/CardPay' element={<CardPay/>}/>
         <Route path='/EventDashboard' element={<EventDashboard/>}/>
        <Route path='/MusicalEvent' element={<MusicalEvent/>}/>
        <Route path='/OtherEvent' element={<OtherEvent/>}/>
        <Route path='/ViewEvent' element={<ViewEvent/>}/>
        </Routes>
        

    
    </Router>
    </CartProvider>
  );
}

export default App;
