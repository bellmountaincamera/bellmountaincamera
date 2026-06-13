type AsciiLineLogoProps = {
  tone?: "light" | "dark";
  className?: string;
  variant?: "compact" | "full";
};

export function AsciiLineLogo({
  tone = "light",
  className = "",
  variant = "compact"
}: AsciiLineLogoProps) {
  const mark =
    variant === "full"
      ? `++++---+     +++        ++      +--+++
|+++-++++    ++++       ++     ++++++++
||     ++    ++++++--++-++    ++---+++
||---+++     +++ ++ ++ ++    ++
||+-++++     +++    ++ ++    ++   ++
||     ++    +++       ++    ++---+++
+++--+++     +++       ++     +--+++`
      : `+-- B M C --+
| LAB/SHOP |
+- AV, CA -+`;

  return (
    <pre
      aria-hidden="true"
      className={[
        "ascii-mark max-w-full overflow-x-auto",
        variant === "full"
          ? "text-[0.3rem] sm:text-[0.42rem] md:text-[0.56rem]"
          : "text-[0.62rem] sm:text-xs",
        tone === "dark" ? "text-[#D8D8D2]" : "text-[#2457C5]",
        className
      ].join(" ")}
    >
      {mark}
    </pre>
  );
}
