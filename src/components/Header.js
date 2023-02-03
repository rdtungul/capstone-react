import React from "react";
import "../App.css";
// importing header logo
import HeaderLogo from "../Logo.svg";
// importing router navigation using react-router-dom dependencies
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// importing components
import BookingPage from "../pages/BookingPage";
import HomePage from "./HomePage";

export default function Header() {
  return (
    <div className="Header d-flex flex-wrap space-between align-items-center">
      <header>
        <img src={HeaderLogo} alt="Header Logo" />
      </header>

      <Router>
        <nav>
          <Link to="/capstone-react">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservation">Reservations</Link>
          <Link to="/order-online">Order Online</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/capstone-react" element={<HomePage />} />
          <Route path="/reservation" element={<BookingPage />} />
        </Routes>
      </Router>
    </div>
  );
}
