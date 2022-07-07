import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
import Home from './components/User/Home/Home';
import HomeBooking from './components/User/Home_Booking/Home_Booking';
import HotelInfo from './components/User/HotelInfo/HotelInfo';
import GoogleMap from './components/User/GoogleMap/GoogleMap';
import About from './components/User/About/About';
import Search from './components/User/Search/Search';
import BookingConfirmation from './components/User/BookingConfirmation/BookingConfirmation';

import AdminHome from './components/Admin/AdminHome/AdminHome';


function App() {
  return (
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home_book' element={<HomeBooking />} />
          <Route exact path='/hotel_info' element={<HotelInfo />} />
          <Route exact path='/google_map' element={<GoogleMap />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/confirmation' element={<BookingConfirmation />} />
          <Route exact path='/admin_home' element={<AdminHome />} />

        </Routes>
      </Router>
  );

}
export default App;