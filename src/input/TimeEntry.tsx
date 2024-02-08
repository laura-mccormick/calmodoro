import React from "react";
import { Mode } from "../timer/timerUtils";

type TimeEntryProps = {
  allowChangeTimes: boolean;
  timeMinutes: number;
  setTimeMinutes: Function;
  mode: Mode;
};

export default function TimeEntry({
  allowChangeTimes,
  timeMinutes,
  setTimeMinutes,
  mode,
}: TimeEntryProps) {
  return (
    <div>
      <label htmlFor="timeMinutes">
        {mode == Mode.WORK ? "Work time (minutes): " : "Break time (minutes): "}
      </label>
      <input
        type="number"
        disabled={!allowChangeTimes}
        value={timeMinutes}
        onChange={(event) => setTimeMinutes(Number(event.target.value))}
      />
    </div>
  );
}
