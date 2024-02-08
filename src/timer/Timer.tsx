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
  setMode: Function;
};

export default function Timer({
  currentTimeMinutes,
  mode,
  setMode,
}: TimerProps) {
  const sound = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("") : undefined
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
      if (secondsRemaining > 0) {
        setSecondsRemaining((secondsRemaining) => secondsRemaining - 1);
      } else {
        sound.play();
        mode == Mode.WORK ? setMode(Mode.BREAK) : setMode(Mode.WORK);
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [secondsRemaining]);

  return (
    <div className="timer">
      <ModeDescription mode={mode} />
      <div className={mode == Mode.WORK ? "workTimer" : "breakTimer"}>
        <span className="twoCharacters">{minutes}</span>
        <span>m</span>
        <span className="twoCharacters">{seconds}</span>
        <span>s</span>
      </div>
    </div>
  );
}
