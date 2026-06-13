import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";

// Kept as a compatibility wrapper for earlier pages. Prefer MetadataPanel or
// TerminalStatusPanel for new terminal/documentation surfaces.
type TerminalMetaPanelProps = {
  rows: Array<[string, string]>;
  tone?: "light" | "dark";
  title?: string;
};

export function TerminalMetaPanel({
  rows,
  tone = "light",
  title = "BMC STATUS"
}: TerminalMetaPanelProps) {
  return (
    <div
      className={[
        "border p-4",
        tone === "dark"
          ? "border-[#FAFAF8]/20 bg-[#111111] text-[#FAFAF8]"
          : "border-[#2A2A2A] bg-[#FAFAF8] text-[#111111]"
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
          {title}
        </p>
        <AsciiLineLogo tone={tone} className="hidden sm:block" />
      </div>
      <dl className="mt-4 grid gap-2">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-[8rem_1fr] gap-3 border-t border-current/15 pt-2"
          >
            <dt className="mono text-[0.68rem] uppercase tracking-[0.12em] text-[#666666]">
              {label}
            </dt>
            <dd className="mono text-[0.72rem] uppercase tracking-[0.1em]">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
