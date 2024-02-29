import React from "react";
type PauseButtonProps = {
  paused: boolean;
  setPaused: Function;
};
const PauseButton = ({ paused, setPaused }: PauseButtonProps) => {
  const onClick = () => {
    setPaused(!paused);
  };
  return <button onClick={onClick}>{paused ? `Start` : `Pause`}</button>;
};

export default PauseButton;
