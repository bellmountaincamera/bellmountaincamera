type AsciiLineLogoProps = {
  tone?: "light" | "dark";
  className?: string;
  variant?: "compact" | "full";
  lines?: [string, string, string];
};

export function AsciiLineLogo({
  tone = "light",
  className = "",
  variant = "compact",
  lines = ["B M C", "SYSTEM", "AV, CA"]
}: AsciiLineLogoProps) {
  if (variant === "full") {
    return (
      <div
        aria-hidden="true"
        className={[
          "ascii-logo-shell max-w-full overflow-hidden",
          tone === "dark" ? "ascii-logo-dark" : "ascii-logo-light",
          className
        ].join(" ")}
      >
        <img
          src="/images/bmc-ascii-line-logo.png"
          alt=""
          className="ascii-logo-image"
          draggable="false"
        />
      </div>
    );
  }

  const compactWidth = Math.max(...lines.map((line) => line.length), 5) + 2;
  const top = `+${"-".repeat(compactWidth)}+`;
  const compactMark = [
    top,
    ...lines.map((line) => `| ${line.padEnd(compactWidth - 1, " ")}|`),
    top
  ].join("\n");

  return (
    <div
      aria-hidden="true"
      className={[
        "ascii-logo-shell max-w-full overflow-hidden",
        tone === "dark" ? "text-[#D8D8D2]" : "text-[#2457C5]",
        className
      ].join(" ")}
    >
      <pre
        className="ascii-mark ascii-mark-compact"
      >
        {compactMark}
      </pre>
    </div>
  );
}
