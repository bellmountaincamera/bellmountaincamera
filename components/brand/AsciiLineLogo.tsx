type AsciiLineLogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function AsciiLineLogo({
  tone = "light",
  className = ""
}: AsciiLineLogoProps) {
  return (
    <pre
      aria-hidden="true"
      className={[
        "ascii-mark overflow-hidden text-[0.62rem] sm:text-xs",
        tone === "dark" ? "text-[#D8D8D2]" : "text-[#2457C5]",
        className
      ].join(" ")}
    >{`+-- B M C --+
| LAB/SHOP |
+- AV, CA -+`}</pre>
  );
}
