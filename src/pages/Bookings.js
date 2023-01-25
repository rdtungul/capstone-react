import { Box } from "@chakra-ui/react";
import React from "react";
import Bookings from "../components/BookingForm";

export default function BookingPage() {
  return (
    <div>
      <Box paddingY={50}>
        <Bookings />
      </Box>
    </div>
  );
}
