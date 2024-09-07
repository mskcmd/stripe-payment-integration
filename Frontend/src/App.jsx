import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Success from "./Page/Success";
import Cancel from "./Page/Cancel";
import Home from "./Page/Home";
import './App.css'; // Include your styles


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
