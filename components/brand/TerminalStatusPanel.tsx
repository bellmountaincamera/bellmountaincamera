import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";
import { StatusIndicator } from "@/components/brand/StatusIndicator";

type TerminalStatusPanelProps = {
  title: string;
  rows: Array<[string, string]>;
  tone?: "light" | "dark";
};

export function TerminalStatusPanel({
  title,
  rows,
  tone = "light"
}: TerminalStatusPanelProps) {
  return (
    <section
      className={[
        "border p-4",
        tone === "dark"
          ? "border-[#FFFFFF]/20 bg-[#111111] text-[#FFFFFF]"
          : "border-[#111111] bg-[#FFFFFF] text-[#111111]"
      ].join(" ")}
    >
      <div className="flex flex-wrap items-start justify-center gap-4 border-b border-current/20 pb-4 text-center sm:justify-between">
        <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
          {title}
        </p>
        <AsciiLineLogo
          tone={tone}
          lines={["BMC", "STATUS", "AV, CA"]}
        />
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {rows.map(([label, status]) => (
          <StatusIndicator
            key={label}
            label={label}
            status={status}
            tone={tone}
          />
        ))}
      </div>
    </section>
  );
}
