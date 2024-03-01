import React from "react";
import "./AllowChangeButton.scss";

type AllowChangeButtonProps = {
  allowChange: boolean;
  setAllowChange: Function;
  label: string;
};

export default function AllowChangeButton({
  allowChange,
  setAllowChange,
  label,
}: AllowChangeButtonProps) {
  return (
    <>
      <input
        type="button"
        className="allowChangeButton"
        value={label}
        onClick={() => setAllowChange(!allowChange)}
      />
    </>
  );
}
