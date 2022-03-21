import './App.css';
import Home from "./pages/Home.js"
import Results from "./pages/Results"
import SingleResult from "./pages/SingleResult"
import About from "./pages/About.js"
import MyTrips from "./pages/MyTrips.js"
import Profile from "./pages/Profile.js"
import Settings from "./pages/Settings.js"
import Login from "./pages/Login.js"
import Contact from "./pages/Contact.js"
import ResultMap from "./pages/ResultMap.js"
import Filters from "./pages/Filters.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react"

function App() {
  return (
    <div className="App">
      <Router>  
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/results" element={<Results/>}/>
        <Route path = "/results/:id" element={<SingleResult/>}></Route>
        <Route path="/myTrips" element={<MyTrips />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/map" element={<ResultMap />}/>
        <Route path="/filters" element={<Filters />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
