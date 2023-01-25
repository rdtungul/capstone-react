import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// navigation pages
import HomePage from "../pages/HomePage";
import Bookings from "../pages/Bookings";
// importing logo for header
import headerLogo from "../Logo.svg";
import { Box } from "@chakra-ui/react";

export default function Nav() {
  return (
    <div className="navigationContainer">
      <Router>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingX={150}
          paddingY={25}
          backgroundColor="#FFFFFF"
        >
          <header>
            <img className="headerImage" src={headerLogo} alt="logo" />
          </header>
          <nav>
            <Link to="/capstone-react"> Homepage</Link>
            <Link to="/booking"> Booking Page</Link>
          </nav>
        </Box>
        <Routes>
          <Route path="/capstone-react" element={<HomePage />} />
          <Route path="/booking" element={<Bookings />} />
        </Routes>
      </Router>
    </div>
  );
}
