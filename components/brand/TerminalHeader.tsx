import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";

type TerminalHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function TerminalHeader({
  eyebrow,
  title,
  description,
  tone = "light"
}: TerminalHeaderProps) {
  return (
    <div
      className={[
        "grid gap-5 border-b pb-6 md:grid-cols-[1fr_auto] md:items-end",
        tone === "dark" ? "border-[#FAFAF8]/20" : "border-[#2A2A2A]"
      ].join(" ")}
    >
      <div>
        <p className="mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold uppercase leading-none tracking-[0.02em] sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p
            className={[
              "mt-4 max-w-2xl text-sm leading-7",
              tone === "dark" ? "text-[#D8D8D2]" : "text-[#333333]"
            ].join(" ")}
          >
            {description}
          </p>
        ) : null}
      </div>
      <AsciiLineLogo tone={tone} />
    </div>
  );
}
