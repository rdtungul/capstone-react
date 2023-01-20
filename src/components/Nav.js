import React from "react";

const navLinks = {
  home: "#home",
  about: "#about",
  menu: "#menu",
  reservations: "#reservations",
  order: "#order-online",
  login: "#login",
};
export default function Nav() {
  return (
    <div className="navigationContainer">
      <nav>
        <ul>
          <li>
            <a href={navLinks.home} rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li>
            <a href={navLinks.about} rel="noopener noreferrer">
              About
            </a>
          </li>
          <li>
            <a href={navLinks.menu} rel="noopener noreferrer">
              Menu
            </a>
          </li>
          <li>
            <a href={navLinks.reservations} rel="noopener noreferrer">
              Reservations
            </a>
          </li>
          <li>
            <a href={navLinks.order} rel="noopener noreferrer">
              Order Online
            </a>
          </li>
          <li>
            <a href={navLinks.login} rel="noopener noreferrer">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
