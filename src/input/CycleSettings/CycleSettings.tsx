import React, { useState } from "react";
import { Mode } from "../../timer/timerUtils";
import AllowChangeCheckbox from "../AllowChangeButton";
import "./CycleSettings.scss";
import styles from "../../app/page.module.css";

type CycleSettingsProps = {
  pomodoroCycle: Mode[];
  cycleIndex: number;
};

export default function CycleSettings({
  pomodoroCycle,
  cycleIndex,
}: CycleSettingsProps) {
  const [allowChangeCycle, setAllowChangeCycle] = useState(false);

  return (
    <div className={styles.settings}>
      <AllowChangeCheckbox
        allowChange={allowChangeCycle}
        setAllowChange={setAllowChangeCycle}
        label={"Cycle"}
      />
      {allowChangeCycle && (
        <div>
          {pomodoroCycle.map((mode, index) => (
            <div
              key={index}
              className={`cycle__${mode}${
                index == cycleIndex ? "__current" : ""
              }`}
            >
              {index == cycleIndex ? <>&#9679; </> : <>&#9675; </>}
              {mode == Mode.WORK
                ? "Work"
                : mode == Mode.SHORT_BREAK
                ? "Short Break"
                : "Long Break"}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
