import React from "react";
import Nav from "./Nav";
// importing logo for header
import headerLogo from "../Logo.svg";

export default function Header() {
  return (
    <div>
      <header>
        <img className="headerImage" src={headerLogo} alt="logo" />
        <Nav />
      </header>
    </div>
  );
}
