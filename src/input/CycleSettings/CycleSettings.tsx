import React, { useState } from "react";
import { Mode } from "../../timer/timerUtils";
import AllowChangeCheckbox from "../AllowChangeCheckbox";
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
  const [allowChangeCycle, setAllowChangeCycle] = useState(true);

  return (
    <div>
      <AllowChangeCheckbox
        allowChange={allowChangeCycle}
        setAllowChange={setAllowChangeCycle}
        label={"See cycle"}
      />
      {allowChangeCycle && (
        <div className={styles.settings}>
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
