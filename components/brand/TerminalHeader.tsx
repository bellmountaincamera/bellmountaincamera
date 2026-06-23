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
        "border-b pb-6",
        tone === "dark" ? "border-[#FFFFFF]/20" : "border-[#111111]"
      ].join(" ")}
    >
      <div>
        <p className="mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#0B3D91]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold uppercase leading-none tracking-[0.02em] sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p
            className={[
              "mt-4 max-w-2xl text-sm leading-7",
              tone === "dark" ? "text-[#FFFFFF]" : "text-[#111111]"
            ].join(" ")}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
