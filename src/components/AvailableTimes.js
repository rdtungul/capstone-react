import React from "react";
import { FormLabel, Select } from "@chakra-ui/react";

export default function AvailableTimes() {
  return (
    <div>
      <FormLabel htmlFor="res-time">Choose time:</FormLabel>
      <Select name="resTime" id="res-time" marginBottom={5}>
        <option value=""></option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </Select>
    </div>
  );
}
