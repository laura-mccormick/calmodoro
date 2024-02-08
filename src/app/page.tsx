"use client";
import Timer from "../timer/Timer";
import WorkTimeEntry from "../input/TimeEntry";
import AllowChangeTimesCheckbox from "../input/AllowChangeTimesCheckbox";
import Attributions from "./Attributions";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Mode } from "../timer/timerUtils";
import TimeEntry from "../input/TimeEntry";

export default function Home() {
  const [mode, setMode] = useState(Mode.WORK);
  const [workTimeMinutes, setWorkTimeMinutes] = useState(20);
  const [breakTimeMinutes, setBreakTimeMinutes] = useState(5);
  const [currentTimeMinutes, setCurrentTimeMinutes] = useState(workTimeMinutes);
  const [allowChangeTimes, setAllowChangeTimes] = useState(true);

  useEffect(() => {
    if (mode == Mode.WORK) {
      setCurrentTimeMinutes(workTimeMinutes);
    } else {
      setCurrentTimeMinutes(breakTimeMinutes);
    }
  }, [mode]);

  useEffect(() => {
    if (mode == Mode.WORK) {
      setCurrentTimeMinutes(workTimeMinutes);
    }
  }, [workTimeMinutes]);

  useEffect(() => {
    if (mode == Mode.BREAK) {
      setCurrentTimeMinutes(breakTimeMinutes);
    }
  }, [breakTimeMinutes]);

  return (
    <main className={styles.main}>
      <AllowChangeTimesCheckbox
        allowChangeTimes={allowChangeTimes}
        setAllowChangeTimes={setAllowChangeTimes}
      />
      {allowChangeTimes && (
        <>
          <TimeEntry
            allowChangeTimes={allowChangeTimes}
            timeMinutes={workTimeMinutes}
            setTimeMinutes={setWorkTimeMinutes}
            mode={Mode.WORK}
          />
          <TimeEntry
            allowChangeTimes={allowChangeTimes}
            timeMinutes={breakTimeMinutes}
            setTimeMinutes={setBreakTimeMinutes}
            mode={Mode.BREAK}
          />
        </>
      )}

      <div className={styles.timer}>
        <Timer
          currentTimeMinutes={currentTimeMinutes}
          mode={mode}
          setMode={setMode}
        />
      </div>

      <Attributions />
    </main>
  );
}
