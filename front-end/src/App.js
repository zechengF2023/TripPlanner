import './App.css';
import Home from "./pages/Home.js"
import Results from "./pages/Results"
import About from "./pages/About.js"
import MyTrips from "./pages/MyTrips.js"
import Profile from "./pages/Profile.js"
import Settings from "./pages/Settings.js"
import Help from "./pages/Help.js"
import Login from "./pages/Login.js"
import Contact from "./pages/Contact.js"
import ResultMap from "./pages/ResultMap.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react"

function App() {
  return (
    <div className="App">
      <Router>  
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/myTrips" element={<MyTrips />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/help" element={<Help />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/map" element={<ResultMap />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
