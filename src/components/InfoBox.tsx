import { type ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function InfoBox({ mode, children }: InfoBoxProps) {
  // info, warning
  if (mode === "hint") {
    return (
      <aside className="infoBox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className="infoBox infoBox-warning warning--high">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
