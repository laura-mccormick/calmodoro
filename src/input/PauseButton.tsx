import React from "react";
import "./PauseButton.css";

type PauseButtonProps = {
  paused: boolean;
  setPaused: Function;
};
const PauseButton = ({ paused, setPaused }: PauseButtonProps) => {
  const onClick = () => {
    setPaused(!paused);
  };
  return (
    <button onClick={onClick} className="button">
      {paused ? `Start` : `Pause`}
    </button>
  );
};

export default PauseButton;
