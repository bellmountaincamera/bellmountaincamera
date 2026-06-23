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
          ? "border-[#FFFFFF]/20 bg-[#FFFFFF]/10 text-[#FFFFFF]"
          : "border-[#111111] bg-[#FFFFFF] text-[#111111]"
      ].join(" ")}
    >
      {rows.map(([label, value]) => (
        <div
          key={label}
          className={[
            "grid gap-2 border-b p-4 last:border-b-0 sm:border-r sm:last:border-r-0",
            tone === "dark" ? "border-[#FFFFFF]/20" : "border-[#111111]/15"
          ].join(" ")}
        >
          <dt className="mono text-[0.68rem] uppercase tracking-[0.14em] text-[#0B3D91]">
            {label}
          </dt>
          <dd className="mono text-xs uppercase tracking-[0.1em]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
