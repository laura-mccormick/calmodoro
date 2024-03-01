import React, { useState } from "react";
import AllowChangeCheckbox from "../AllowChangeButton";
import TimeEntry from "./TimeEntry";
import { Mode } from "../../timer/timerUtils";
import styles from "../../app/page.module.css";

type TimeSettingsProps = {
  workTimeMinutes: number;
  setWorkTimeMinutes: Function;
  shortBreakTimeMinutes: number;
  setShortBreakTimeMinutes: Function;
  longBreakTimeMinutes: number;
  setLongBreakTimeMinutes: Function;
};

export default function TimeSettings({
  workTimeMinutes,
  setWorkTimeMinutes,
  shortBreakTimeMinutes,
  setShortBreakTimeMinutes,
  longBreakTimeMinutes,
  setLongBreakTimeMinutes,
}: TimeSettingsProps) {
  const [allowChangeTimes, setAllowChangeTimes] = useState(false);

  return (
    <div className={styles.settings}>
      <AllowChangeCheckbox
        allowChange={allowChangeTimes}
        setAllowChange={setAllowChangeTimes}
        label={"Times"}
      />
      {allowChangeTimes && (
        <div>
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
