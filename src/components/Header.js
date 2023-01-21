import React from "react";
// importing logo for header
import headerLogo from "../Logo.svg";
import Nav from "./Nav";
import { VStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <header>
        <VStack
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <img className="headerImage" src={headerLogo} alt="logo" />
        </VStack>
        <Nav />
      </header>
    </div>
  );
}
