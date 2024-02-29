import React, { useState } from "react";
import AllowChangeTimesCheckbox from "./AllowChangeTimesCheckbox";
import TimeEntry from "./TimeEntry";
import { Mode } from "../../timer/timerUtils";
import "./TimeSettings.css";

type TimeSettingsProps = {
  workTimeMinutes: number;
  setWorkTimeMinutes: Function;
  shortBreakTimeMinutes: number;
  setShortBreakTimeMinutes: Function;
  longBreakTimeMinutes: number;
  setLongBreakTimeMinutes: Function;
};

export default function WorkTimeEntry({
  workTimeMinutes,
  setWorkTimeMinutes,
  shortBreakTimeMinutes,
  setShortBreakTimeMinutes,
  longBreakTimeMinutes,
  setLongBreakTimeMinutes,
}: TimeSettingsProps) {
  const [allowChangeTimes, setAllowChangeTimes] = useState(true);

  return (
    <div>
      <AllowChangeTimesCheckbox
        allowChangeTimes={allowChangeTimes}
        setAllowChangeTimes={setAllowChangeTimes}
      />
      {allowChangeTimes && (
        <div className="timeSettings">
          <TimeEntry
            allowChangeTimes={allowChangeTimes}
            timeMinutes={workTimeMinutes}
            setTimeMinutes={setWorkTimeMinutes}
            mode={Mode.WORK}
          />
          <TimeEntry
            allowChangeTimes={allowChangeTimes}
            timeMinutes={shortBreakTimeMinutes}
            setTimeMinutes={setShortBreakTimeMinutes}
            mode={Mode.SHORT_BREAK}
          />
          <TimeEntry
            allowChangeTimes={allowChangeTimes}
            timeMinutes={longBreakTimeMinutes}
            setTimeMinutes={setLongBreakTimeMinutes}
            mode={Mode.LONG_BREAK}
          />
        </div>
      )}
    </div>
  );
}
