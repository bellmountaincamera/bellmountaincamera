type StatusIndicatorProps = {
  label: string;
  status: string;
  tone?: "light" | "dark";
};

export function StatusIndicator({
  label,
  status,
  tone = "light"
}: StatusIndicatorProps) {
  return (
    <div
      className={[
        "mono inline-grid min-w-0 grid-cols-[auto_auto_1fr] items-center gap-x-2 border px-2 py-1 text-[0.65rem] uppercase tracking-[0.12em]",
        tone === "dark"
          ? "border-[#FFFFFF]/25 text-[#FFFFFF]"
          : "border-[#111111] text-[#111111]"
      ].join(" ")}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#0B3D91]" />
      <span className="text-[#0B3D91]">{label}:</span>
      <span>{status}</span>
    </div>
  );
}
