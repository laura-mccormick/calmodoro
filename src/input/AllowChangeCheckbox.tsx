import React from "react";

type AllowChangeCheckboxProps = {
  allowChange: boolean;
  setAllowChange: Function;
  label: string;
};

export default function AllowChangeCheckbox({
  allowChange,
  setAllowChange,
  label,
}: AllowChangeCheckboxProps) {
  return (
    <div>
      <input
        type="checkbox"
        checked={allowChange}
        onChange={() => setAllowChange(!allowChange)}
      />
      <label htmlFor="allowChangeTimes"> {label}</label>
    </div>
  );
}
