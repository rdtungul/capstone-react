import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// navigation pages
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";

export default function Nav() {
  return (
    <div className="navigationContainer">
      <Router>
        <nav>
          <Link to="/"> Homepage</Link>
          <Link to="/booking"> Booking Page</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Router>
    </div>
  );
}
