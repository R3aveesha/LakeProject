import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FoodOrderStart from "./pages/foodManagement/FoodOrderStart.jsx";
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
import ManageFood from './pages/foodManagement/ManageFood.jsx'
import UpdateFood from './pages/foodManagement/UpdateFoodItems.jsx'
import CustomerSupportManagerDashboard from './pages/customerSupport/CustomerSupportDashboard.jsx';
import CustomerSupport from './pages/customerSupport/customerSupportpage.jsx';
import FoundForm from './pages/customerSupport/FoundForm.jsx';
import InquiryForm from './pages/customerSupport/InqueryPage.jsx';
import CustomerInquiries from './pages/customerSupport/InqueryTable.jsx';
import TransportPage from './pages/customerSupport/TransportPage.jsx';
import BillInfo from './pages/eventManagement/BillInfo.jsx';
import BookingEvent from './pages/eventManagement/BookingEvent.jsx';
import CardPay from './pages/eventManagement/CardPay.jsx';
import EventDashboard from './pages/eventManagement/EventDashboard.jsx';
import MusicalEvent from './pages/eventManagement/MusicalEvent.jsx';
import OtherEvent from './pages/eventManagement/OtherEvent.jsx';
import ViewEvent from './pages/eventManagement/ViewEvent.jsx';
import AddGames from './pages/gamesManagement/Dashboards/AddGames.jsx';
import AvailableTimes from './pages/gamesManagement/Dashboards/AvailableTimes.jsx';
import ChangeAvailableTimes from './pages/gamesManagement/Dashboards/ChangeAvailableTimes.jsx';
import MoviePage from './pages/movieManagement/MoviePage.jsx';
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
import LostitemTable from './pages/customerSupport/LostItemTable.jsx';
import LostItemForm from './pages/customerSupport/LostForm.jsx';
import ResourcesTable from "./pages/resourceMaintenance/ViewResource.jsx";
import AddResourceForm from "./pages/resourceMaintenance/AddResourceForm.jsx";
import ResourceReport from "./pages/resourceMaintenance/ReportonResource.jsx";
import GameDetails from "./pages/gamesManagement/Gamedetails.jsx";
import { AuthProvider } from "./pages/foodManagement/context/authContext.jsx";

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <Router>
        <Routes>
          {/* General Routes */}
          <Route path="/" element={<Home />} />{/*done*/}
          <Route path="/login" element={<LoginPage />} />{/*done*/}
          <Route path="/staff/login" element={<StaffLoginPage />} />{/*done*/}
          <Route path="/categorize" element={<CategorizeNav />} />{/*done*/}

          {/* Food Management */}
          <Route path="/food/start" element={<FoodOrderStart />} />{/*done*/}
          <Route path="/food" element={<FoodPage />} /> {/*done*/}
          <Route path="/cart" element={<Cart />} />{/*done*/}
          <Route path="/manageFoods" element={<ManageFood />} />{/*done*/}
          <Route path="/updateFoodItem/:id" element={<UpdateFood />} />{/*done*/}

          {/* Customer Support */}
          <Route path="/customerSupportManagerDashboard" element={<CustomerSupportManagerDashboard />} />{/*done*/}
          <Route path="/support" element={<CustomerSupport />} />{/*done*/}
          <Route path="/foundItm/:id" element={<FoundForm />} />{/*login needed*/}
          <Route path="/inquerypage" element={<InquiryForm />} />{/*login needed*/}
          <Route path="/customerInquiries" element={<CustomerInquiries />} />{/*done*/}
          <Route path="/transport" element={<TransportPage />} />{/*done*/}
          <Route path="/lostitems" element={<LostitemTable />} />{/*done*/}
          <Route path="/lostitemform" element={<LostItemForm />} />{/*login needed*/}

          {/* Event Management */}
          <Route path="/billinfo" element={<BillInfo />} />{/*login needed*/}
          <Route path="/bookingevent" element={<BookingEvent />} />{/*login needed*/}
          <Route path="/cardpay" element={<CardPay />} />{/*login needed*/}
          <Route path="/eventdashboard" element={<EventDashboard />} />
          <Route path="/events/:id" element={<ViewEvent />} />{/*done*/}

          {/* Games Management */}
          <Route path="/games" element={<GameMainPage />} />{/*done*/}
          <Route path="/games/:id" element={<GamesDetails />} />{/*done*/}
          <Route path="/addgames" element={<AddGames />} />{/*done*/}
          <Route path="/availabletimes" element={<AvailableTimes />} />{/*done*/}
          <Route path="/changeavailabletimes" element={<ChangeAvailableTimes />} />{/*n ui*/}
          <Route path="/GameDetails" element={<GameDetails />} />{/*done*/}

          {/* Movie Management */}
          <Route path="/movies" element={<MoviePage />} />{/*done*/}
          <Route path="/movies/showtimes" element={<ShowtimesPage />} />{/*done*/}
          <Route path="/movies/addnewmovie" element={<AddnewMovie />} />{/*done*/}
          <Route path="/movieManagerDashboard" element={<MovieManagerDashboard />} />

          {/* Resource Management */}
          <Route path="/resourceManagerDashboard" element={<ResourceManagerDashboard />} />{/*done*/}
          <Route path='/ResourcesTable' element={<ResourcesTable />} />{/*done*/}
          <Route path="/AddResourceForm" element={<AddResourceForm />} />{/*done*/}
          <Route path="/resource/:id" element={<ResourceReport/>}/>{/*done*/}

          {/* Staff Management */}
          <Route path="/salarycalculator" element={<SalaryCalculator />} />
          <Route path="/leaverequests" element={<LeaveRequests />} />
          <Route path="/myleaves" element={<Myleaves />} />
          <Route path="/staffdashboard" element={<StaffDashboard />} />
          <Route path="/staffmemberdash" element={<StaffmemberDash />} />
          <Route path="/staffregistrationform" element={<StaffRegistrationForm />} />
          <Route path="/viewattendance" element={<ViewAttendance />} />
          <Route path="/leavedetails" element={<LeaveDetails />} />
          <Route path="/salarytable" element={<SalaryTable />} />
          <Route path="/stafftable" element={<StaffTable />} />
        </Routes>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
