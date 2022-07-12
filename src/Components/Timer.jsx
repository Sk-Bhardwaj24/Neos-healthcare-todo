import React from "react";
import CountdownTimer from "./CountdownTimer";

import "../App.css";

export default function Timer({ time, registertime }) {
  const dateTimeAfterThisDays = time - 19800000;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThisDays} />
    </div>
  );
}
