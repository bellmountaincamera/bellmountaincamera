type TerminalLabelProps = {
  children: React.ReactNode;
  tone?: "dark" | "light";
};

export function TerminalLabel({ children, tone = "light" }: TerminalLabelProps) {
  return <p className={`terminal-label ${tone === "dark" ? "on-dark" : ""}`}>{children}</p>;
}
