import React, { useState } from "react";
import { Mode } from "../../timer/timerUtils";
import AllowChangeCheckbox from "../AllowChangeButton";
import styles from "../../app/page.module.css";

type SoundSettingsProps = {};

export default function SoundSettings({}: SoundSettingsProps) {
  const [allowChangeCycle, setAllowChangeCycle] = useState(false);

  return (
    <div className={styles.settings}>
      <AllowChangeCheckbox
        allowChange={allowChangeCycle}
        setAllowChange={setAllowChangeCycle}
        label={"Sounds"}
      />
      {allowChangeCycle && (
        <div>
          <label htmlFor="workSound">Work End Sound</label>
          <select name="workSound" id="workSound">
            <option value="bell">Bell</option>
          </select>
        </div>
      )}
    </div>
  );
}
