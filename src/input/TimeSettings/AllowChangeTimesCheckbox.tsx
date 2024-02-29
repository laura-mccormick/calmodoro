import React from "react";

type AllowChangeTimesCheckboxProps = {
  allowChangeTimes: boolean;
  setAllowChangeTimes: Function;
};

export default function WorkTimeEntry({
  allowChangeTimes,
  setAllowChangeTimes,
}: AllowChangeTimesCheckboxProps) {
  return (
    <div>
      <input
        type="checkbox"
        id="allowChangeTimes"
        checked={allowChangeTimes}
        onChange={() => setAllowChangeTimes(!allowChangeTimes)}
      />
      <label htmlFor="allowChangeTimes"> Set times</label>
    </div>
  );
}
