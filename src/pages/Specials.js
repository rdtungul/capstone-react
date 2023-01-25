import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import CallToAction2 from "../components/CallToAction2";
export default function Specials() {
  return (
    <div className="specials">
      <Box
        display="flex"
        justifyContent="space-between"
        paddingX={150}
        paddingY={50}
        backgroundColor="#FFFFFF"
      >
        <Heading as="h2">This Weeks Specials</Heading>
        <CallToAction2 />
      </Box>
    </div>
  );
}
