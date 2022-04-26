import './App.css';
import Home from "./pages/Home.js"
import SearchResults from "./pages/SearchResults"
import Hotel from "./pages/SingleHotelResult.js"
import About from "./pages/About.js"
import Profile from "./pages/Profile.js"
import Settings from "./pages/Settings.js"
import Login from "./pages/Login.js"
import Contact from "./pages/Contact.js"
import SignUp from "./pages/Signup.js"
import TripView from "./pages/TripView"
import HotelToTrip from "./pages/HotelToTrip"
import DestinationDescription from './pages/DestinationDescription';
// import Landing from "./pages/Landing.js"
import Filters from "./pages/Filters.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React,{useState} from "react"
import AppContext from './AppContext';

function App() {
  //for profile page routing purpose
  const [isSaved, setSaved]=useState(false)
  const tripSettings={
    isSaved, setSaved
  }
  return (
    <AppContext.Provider value={tripSettings}>
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/searchResults" element={<SearchResults/>}/>
        <Route path = "/hotel" element={<Hotel/>}></Route>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/filters" element={<Filters />}/>
        <Route path="/trip" element={<TripView/>}/>
        <Route path="/hotelToTrip" element={<HotelToTrip/>}/>
        <Route path="/destinationDescription" element={<DestinationDescription/>}/>
        </Routes>
      </Router>
    </div>
    </AppContext.Provider>
  );
}

export default App;

