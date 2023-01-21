import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import CallToAction2 from "../components/CallToAction2";
import FullScreenSection from "../components/FullScreenSection";
export default function Specials() {
  return (
    <div className="specials">
      <FullScreenSection alignItems="center">
        <Box
          display="flex"
          //   alignItems="center"
          width="1280px"
          justifyContent="space-between"
        >
          <Heading as="h2">This Weeks Specials</Heading>
          <CallToAction2 />
        </Box>
      </FullScreenSection>
    </div>
  );
}
