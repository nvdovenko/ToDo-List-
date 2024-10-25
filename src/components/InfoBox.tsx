import { type ReactNode } from "react";

type HintBoxProp = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProp = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProp | WarningBoxProp;

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;
  // info, warning
  if (mode === "hint") {
    return (
      <aside className="infoBox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  // mode is not set to hint
  const { severity } = props;

  return (
    <aside className={`infoBox infoBox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
