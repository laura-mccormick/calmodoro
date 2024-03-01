import { useState, useEffect, useRef } from "react";
import { padWithZeroes } from "./timerUtils";

import ModeDescription from "./ModeDescription";

import "@fontsource/oswald";
import "./Timer.css";
import { Mode } from "./timerUtils";

import workOverSound from "../sounds/workOver.mp3";

type TimerProps = {
  currentTimeMinutes: number;
  mode: Mode;
  incrementCycleIndex: Function;
  paused: boolean;
};

export default function Timer({
  currentTimeMinutes,
  mode,
  incrementCycleIndex,
  paused = false,
}: TimerProps) {
  const sound = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(workOverSound) : undefined
  );

  useEffect(() => {
    setSecondsRemaining(currentTimeMinutes * 60);
  }, [currentTimeMinutes, mode]);
  const [secondsRemaining, setSecondsRemaining] = useState(
    currentTimeMinutes * 60
  );
  const minutes = padWithZeroes(Math.floor(secondsRemaining / 60));
  const seconds = padWithZeroes(secondsRemaining % 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!paused) {
        if (secondsRemaining > 0) {
          setSecondsRemaining((secondsRemaining) => secondsRemaining - 1);
        } else {
          sound.current?.play();
          incrementCycleIndex();
          clearInterval(intervalId);
        }
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [secondsRemaining, paused]);

  return (
    <div className="timer">
      <ModeDescription mode={mode} />
      <div className={mode == Mode.WORK ? "workTimer" : "breakTimer"}>
        <span className={`twoCharacters${paused ? " paused" : ""}`}>
          {minutes}
        </span>
        <span className={`${paused ? " paused" : ""}`}>m</span>
        <span className={`twoCharacters${paused ? " paused" : ""}`}>
          {seconds}
        </span>
        <span className={`${paused ? " paused" : ""}`}>s</span>
      </div>
    </div>
  );
}
