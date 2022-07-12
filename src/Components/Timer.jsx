import React from "react";
import CountdownTimer from "./CountdownTimer";

import "../App.css";

export default function Timer({ time, id }) {
  const dateTimeAfterThisDays = time - 19800000;

  return (
    <div>
      <CountdownTimer targetDate={dateTimeAfterThisDays} id={id} />
    </div>
  );
}
