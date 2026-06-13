type MetadataPanelProps = {
  rows: Array<[string, string]>;
  tone?: "light" | "dark";
};

export function MetadataPanel({ rows, tone = "light" }: MetadataPanelProps) {
  return (
    <dl
      className={[
        "grid border text-sm sm:grid-cols-2",
        tone === "dark"
          ? "border-[#FAFAF8]/20 bg-[#FAFAF8]/10 text-[#FAFAF8]"
          : "border-[#2A2A2A] bg-[#FAFAF8] text-[#111111]"
      ].join(" ")}
    >
      {rows.map(([label, value]) => (
        <div
          key={label}
          className={[
            "grid gap-2 border-b p-4 last:border-b-0 sm:border-r sm:last:border-r-0",
            tone === "dark" ? "border-[#FAFAF8]/20" : "border-[#D8D8D2]"
          ].join(" ")}
        >
          <dt className="mono text-[0.68rem] uppercase tracking-[0.14em] text-[#2457C5]">
            {label}
          </dt>
          <dd className="mono text-xs uppercase tracking-[0.1em]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
