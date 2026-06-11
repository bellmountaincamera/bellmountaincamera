type TerminalLabelProps = {
  children: React.ReactNode;
  tone?: "dark" | "light";
};

export function TerminalLabel({ children, tone = "light" }: TerminalLabelProps) {
  return (
    <p
      className={[
        "mono inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em]",
        tone === "dark" ? "text-[#e8e2d8]" : "text-[#6f604f]"
      ].join(" ")}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 bg-current" />
      {children}
    </p>
  );
}
