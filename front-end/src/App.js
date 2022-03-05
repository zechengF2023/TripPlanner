import './App.css';
import Header from "./Header.js"
import Home from "./Home.js"
import About from "./About.js"
import RecommendedTrips from "./RecommendedTrips.js"
import MyTrips from "./MyTrips.js"
import Profile from "./Profile.js"
import Settings from "./Settings.js"
import Help from "./Help.js"
import Login from "./Login.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react"

function App() {
  return (
    <div className="App">
      <Router>  
        <Header />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/recommendedTrips" element={<RecommendedTrips/>}/>
        <Route path="/myTrips" element={<MyTrips />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/help" element={<Help />}/>
        <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
