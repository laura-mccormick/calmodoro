"use client";
import Timer from "../timer/Timer";
import TimeSettings from "../input/TimeSettings/TimeSettings";
import Attributions from "./Attributions";
import styles from "./page.module.css";
import { Grid } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { Mode } from "../timer/timerUtils";
import PauseButton from "@/input/PauseButton";
import CycleSettings from "@/input/CycleSettings/CycleSettings";

import ambienceOceanSound from "../sounds/ambienceOcean.mp3";
import SoundSettings from "@/input/SoundSettings/SoundSettings";

export default function Home() {
  const pomodoroCycle = [
    Mode.WORK,
    Mode.SHORT_BREAK,
    Mode.WORK,
    Mode.SHORT_BREAK,
    Mode.WORK,
    Mode.SHORT_BREAK,
    Mode.WORK,
    Mode.LONG_BREAK,
  ];

  const [mode, setMode] = useState(Mode.WORK);
  const [workTimeMinutes, setWorkTimeMinutes] = useState(20);
  const [shortBreakTimeMinutes, setShortBreakTimeMinutes] = useState(5);
  const [longBreakTimeMinutes, setLongBreakTimeMinutes] = useState(15);
  const [currentTimeMinutes, setCurrentTimeMinutes] = useState(workTimeMinutes);
  const [paused, setPaused] = useState(true);
  const [cycleIndex, setCycleIndex] = useState(0);

  const incrementCycleIndex = () => {
    setCycleIndex(cycleIndex > 7 ? cycleIndex + 1 : 0);
  };

  const sound = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(ambienceOceanSound) : undefined
  );

  useEffect(() => {
    setMode(pomodoroCycle[cycleIndex]);
  }, [cycleIndex]);

  useEffect(() => {
    if (mode == Mode.WORK) {
      setCurrentTimeMinutes(workTimeMinutes);
    } else {
      if (mode == Mode.SHORT_BREAK) {
        setCurrentTimeMinutes(shortBreakTimeMinutes);
      } else {
        setCurrentTimeMinutes(longBreakTimeMinutes);
      }
    }
  }, [mode]);

  useEffect(() => {
    if (mode == Mode.WORK) {
      setCurrentTimeMinutes(workTimeMinutes);

      sound.current?.play();
    }
  }, [workTimeMinutes]);

  useEffect(() => {
    if (mode == Mode.SHORT_BREAK) {
      setCurrentTimeMinutes(shortBreakTimeMinutes);
    }
  }, [shortBreakTimeMinutes]);

  useEffect(() => {
    if (mode == Mode.LONG_BREAK) {
      setCurrentTimeMinutes(longBreakTimeMinutes);
    }
  }, [longBreakTimeMinutes]);

  return (
    <main className={styles.main}>
      <Grid container spacing={1}>
        {/* Timer row */}
        <Grid item xs={12}>
          <div className={styles.timer}>
            <Timer
              currentTimeMinutes={currentTimeMinutes}
              mode={mode}
              incrementCycleIndex={incrementCycleIndex}
              paused={paused}
            />
          </div>
        </Grid>

        {/* Pause button row */}
        <Grid item xs={3} />
        <Grid item xs={6}>
          <div className={styles.pauseButton}>
            <PauseButton paused={paused} setPaused={setPaused} />
          </div>
        </Grid>
        <Grid item xs={3} />

        {/* Settings row */}

        <Grid item xs={12} md={3} className={styles.settingBox}>
          <CycleSettings
            pomodoroCycle={pomodoroCycle}
            cycleIndex={cycleIndex}
          />
        </Grid>
        <Grid item xs={12} md={3} className={styles.settingBox}>
          <TimeSettings
            workTimeMinutes={workTimeMinutes}
            setWorkTimeMinutes={setWorkTimeMinutes}
            shortBreakTimeMinutes={shortBreakTimeMinutes}
            setShortBreakTimeMinutes={setShortBreakTimeMinutes}
            longBreakTimeMinutes={longBreakTimeMinutes}
            setLongBreakTimeMinutes={setLongBreakTimeMinutes}
          />
        </Grid>
        <Grid item xs={12} md={3} className={styles.settingBox}>
          <SoundSettings />
        </Grid>
        <Grid item xs={12} md={3} className={styles.settingBox} />

        {/* Attributions row */}
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Attributions />
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </main>
  );
}
