import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FoodOrderStart from "./pages/foodManagement/FoodOrderStart.jsx";
//import AdminLogins from './components/logins/AdminLogins.jsx';
//import IndoorGames from './pages/gamesManagement/IndoorGames.jsx';
//import LoginPage from './components/logins/LoginPage.jsx';
<<<<<<< HEAD
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
import games from './pages/gamesManagement/gameMainPage.jsx';
import AddGames from './pages/gamesManagement/Dashboards/AddGames.jsx';
import AvailableTimes from './pages/gamesManagement/Dashboards/AvailableTimes.jsx';
import ChangeAvailableTimes from './pages/gamesManagement/Dashboards/ChangeAvailableTimes.jsx';
import MovieSection from './pages/movieManagement/MoviePage.jsx';
import AddnewMovie from './pages/movieManagement/AddnewMovie.jsx';
import MovieManagerDashboard from './pages/movieManagement/MovieManagerDashboard.jsx';
import ShowtimesPage from './pages/movieManagement/ShowtimesPage.jsx';
import ResourceManagerDashboard from './pages/resourceMaintenance/ResourceManagerDashboard.jsx';
import SalaryCalculator from './pages/staffManagement/CalculateSalary.jsx';
import LeaveRequests from './pages/staffManagement/LeaveDashboard.jsx';
import Myleaves from './pages/staffManagement/Myleaves.jsx';
import StaffDashboard from './pages/staffManagement/StaffDashboard.jsx';
import StaffmemberDash from './pages/staffManagement/StaffMemberDash.jsx';
import StaffRegistrationForm from './pages/staffManagement/StafftRegForm.jsx';
import ViewAttendance from './pages/staffManagement/ViewAttendance.jsx';
import StaffTable from './pages/staffManagement/ViewStaffDetails.jsx';
import LeaveDetails from './pages/staffManagement/ViewLeaveDetails.jsx';
import SalaryTable from './pages/staffManagement/ViewSalaryDetails.jsx';

=======
import FoodPage from "./pages/foodManagement/FoodPage.jsx";
import { CartProvider } from "./pages/foodManagement/context/CartContext.jsx";
import Cart from "./pages/foodManagement/Cart.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import StaffLoginPage from "./pages/StaffLoginPage.jsx";
import AdminLoginPage from "./pages/AdminLogin.jsx";
import CommonLoginPage from "./pages/CommonLoginPage.jsx";
import GameMainPage from "./pages/gamesManagement/gameMainPage.jsx";
import GamesDetails from "./pages/gamesManagement/Dashboards/GamesDetails.jsx";
import CategorizeNav from "./components/core/CategorizeNav.jsx";
import ManageFoood from "./pages/foodManagement/ManageFood.jsx";
import UpdateFood from "./pages/foodManagement/UpdateFoodItems.jsx";
import CustomerSupportManagerDashboard from "./pages/customerSupport/CustomerSupportDashboard.jsx";
import CustomerSupport from "./pages/customerSupport/customerSupportpage.jsx";
import FoundForm from "./pages/customerSupport/FoundForm.jsx";
import InquiryForm from "./pages/customerSupport/InqueryPage.jsx";
import CustomerInquiries from "./pages/customerSupport/InqueryTable.jsx";
import TransportPage from "./pages/customerSupport/TransportPage.jsx";
import BillInfo from "./pages/eventManagement/BillInfo.jsx";
import BookingEvent from "./pages/eventManagement/BookingEvent.jsx";
import CardPay from "./pages/eventManagement/CardPay.jsx";
import EventDashboard from "./pages/eventManagement/EventDashboard.jsx";
import MusicalEvent from "./pages/eventManagement/MusicalEvent.jsx";
import OtherEvent from "./pages/eventManagement/OtherEvent.jsx";
import ViewEvent from "./pages/eventManagement/ViewEvent.jsx";
import AddGames from "./pages/gamesManagement/Dashboards/AddGames.jsx";
import AvailableTimes from "./pages/gamesManagement/Dashboards/AvailableTimes.jsx";
import ChangeAvailableTimes from "./pages/gamesManagement/Dashboards/ChangeAvailableTimes.jsx";
import MoviePage from "./pages/movieManagement/MoviePage.jsx";
import MovieManagerDashboard from "./pages/movieManagement/MovieManagerDashboard.jsx";
import AddnewMovie from "./pages/movieManagement/AddnewMovie.jsx";
import Movie1 from "./pages/movieManagement/Movie1.jsx";
import ShowtimesPage from "./pages/movieManagement/ShowtimesPage.jsx";
>>>>>>> b386fc60a66a27619defd9340eeb1e7926e552f4

function App() {
  return (
    <CartProvider>
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
          <Route path="/food" element={<FoodPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/manageFoods" element={<ManageFoood />} />
          <Route path="/updateFoodItem/:id" element={<UpdateFood />} />

          {/*customer support*/}

          <Route
            path="/CustomerSupportManagerDashboard"
            element={<CustomerSupportManagerDashboard />}
          ></Route>
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="/FoundForm" element={<FoundForm />} />
          <Route path="/InqueryPage" element={<InquiryForm />} />
          <Route path="/CustomerInquiries" element={<CustomerInquiries />} />
          <Route path="/TransportPage" element={<TransportPage />} />
          {/*cshould add lost item table*/}

          {/*event management*/}
          <Route path="/BillInfo" element={<BillInfo />} />
          <Route path="/BookingEvent" element={<BookingEvent />} />
          <Route path="/CardPay" element={<CardPay />} />
          <Route path="/EventDashboard" element={<EventDashboard />} />
          <Route path="/MusicalEvent" element={<MusicalEvent />} />
          <Route path="/OtherEvent" element={<OtherEvent />} />
          <Route path="/events" element={<ViewEvent />} />

          {/* movie management */}

<<<<<<< HEAD
         {/*games management*/}
        <Route path="/games" element={<GameMainPage />} />
        <Route path="//games/:activity" element={<GamesDetails />} />
        <Route path='/AddGames' element={<AddGames/>}/>
        <Route path='/AvailableTimes' element={<AvailableTimes/>}/>
        <Route path='/ChangeAvailableTimes' element={<ChangeAvailableTimes/>}/>

        {/*movie management*/}
            <Route path='/moviesection' element={<MovieSection/>}/> {/*for movie page*/}
            <Route path='/AddnewMovie' element={<AddnewMovie/>}/>
            <Route path='/MovieManagerDashboard' element={<MovieManagerDashboard/>}/>
            <Route path='/AddnewMovie' element ={<AddnewMovie/>}/>
            <Route path='/ShowtimesPage' element ={<ShowtimesPage/>}/>

        {/*resource management*/}
            <Route path='/ResourceManagerDashboard' element={<ResourceManagerDashboard/>}/>

          {/*staff management*/}
            <Route path='/SalaryCalculator' element={<SalaryCalculator/>}/>   
            <Route path='/LeaveRequests' element={<LeaveRequests/>}/>  
            <Route path='/Myleaves' element={<Myleaves/>}/>
            <Route path='/StaffDashboard' element={<StaffDashboard/>}/> 
            <Route path='/StaffmemberDash' element={<StaffmemberDash/>}/> 
            <Route path='/StaffRegistrationForm' element={<StaffRegistrationForm/>}/>
            <Route path='/ViewAttendance' element={<ViewAttendance/>}/>
            <Route path='/LeaveDetails' element ={<LeaveDetails/>}/>
            <Route path ='/SalaryTable' element={<SalaryTable/>}/>
            <Route path='/StaffTable' element ={<StaffTable/>}/>

        </Routes>
    </Router>
=======
          <Route path="/movies" element={<MoviePage />} />  {/** done */}
          <Route path="/movies/showtimes" element={<ShowtimesPage />} />  {/** done */}
          <Route path="/movies/addnewmovie" element={<AddnewMovie />} />    {/** done */}
          <Route path="/movie/:id" element={<Movie1 />} />      {/** done */}
          <Route
            path="/movieManagerDashboard"
            element={<MovieManagerDashboard />}     
          />      {/** done */}                   {/** inc ui */}

          {/*games management*/}
          <Route path="/games" element={<GameMainPage />} />        {/** done */}
          <Route path="/games/:id" element={<GamesDetails />} />    
          <Route path="/AddGames" element={<AddGames />} />
          <Route path="/AvailableTimes" element={<AvailableTimes />} />
          <Route
            path="/ChangeAvailableTimes"
            element={<ChangeAvailableTimes />}
          />
        </Routes>
      </Router>
>>>>>>> b386fc60a66a27619defd9340eeb1e7926e552f4
    </CartProvider>
  );
}

export default App;
