type TerminalDividerProps = {
  label?: string;
  tone?: "light" | "dark";
};

export function TerminalDivider({
  label = "BMC SYSTEM LINE",
  tone = "light"
}: TerminalDividerProps) {
  return (
    <div
      className={[
        "mono flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.14em]",
        tone === "dark" ? "text-[#D8D8D2]" : "text-[#666666]"
      ].join(" ")}
    >
      <span className="h-px flex-1 bg-current opacity-40" />
      <span className="hidden sm:block">{label}</span>
      <span className="h-px flex-1 bg-current opacity-40" />
    </div>
  );
}
