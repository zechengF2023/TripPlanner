import './App.css';
import Header from "./components/Header.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import MyTrips from "./pages/MyTrips.js"
import Profile from "./pages/Profile.js"
import Settings from "./pages/Settings.js"
import Help from "./pages/Help.js"
import Login from "./pages/Login.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react"

function App() {
  return (
    <div className="App">
      <Router>  
        <Header />
        <Routes>
        <Route path="/" element={<Home />}/>
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
