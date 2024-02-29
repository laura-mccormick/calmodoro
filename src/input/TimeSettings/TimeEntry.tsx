import React from "react";
import { Mode } from "../../timer/timerUtils";
import "./TimeEntry.css";

type TimeEntryProps = {
  allowChangeTimes: boolean;
  timeMinutes: number;
  setTimeMinutes: Function;
  mode: Mode;
};

const inputLabel = {
  [Mode.WORK]: "Work",
  [Mode.SHORT_BREAK]: "Short break",
  [Mode.LONG_BREAK]: "Long break",
};

export default function TimeEntry({
  allowChangeTimes,
  timeMinutes,
  setTimeMinutes,
  mode,
}: TimeEntryProps) {
  return (
    <div className="timeEntry">
      <label htmlFor="timeMinutes">{inputLabel[mode]}</label>
      <input
        type="number"
        disabled={!allowChangeTimes}
        value={timeMinutes}
        onChange={(event) => setTimeMinutes(Number(event.target.value))}
      />
    </div>
  );
}
