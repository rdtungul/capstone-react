import { Select } from "@chakra-ui/react";
import { useState } from "react";

let nextId = 6;
const availableTimes = [
  { id: 0, time: "18:00" },
  { id: 1, time: "19:00" },
  { id: 2, time: "20:00" },
  { id: 4, time: "21:00" },
  { id: 5, time: "22:00" },
];

export default function AvailableTimes() {
  const [time, setTime] = useState("");
  const [availTimes, setAvailTimes] = useState(availableTimes);

  return (
    <>
      <Select name="resTime" id="res-time" time={time} onChange={setTime}>
        {availTimes.map((times) => (
          <option key={times.id}>{times.time}</option>
        ))}
      </Select>
    </>
  );
}
