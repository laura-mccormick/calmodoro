import { Mode } from "./timerUtils";
import "./ModeDescription.css";

type ModeDescriptionProps = {
  mode: Mode;
};

export default function ModeDescription({ mode }: ModeDescriptionProps) {
  return (
    <div className="description">
      <div
        className={mode == Mode.WORK ? "workDescription" : "breakDescription"}
      >
        {mode == Mode.WORK
          ? "Work"
          : mode == Mode.SHORT_BREAK
          ? "Short Break"
          : "Long Break"}
      </div>
    </div>
  );
}
