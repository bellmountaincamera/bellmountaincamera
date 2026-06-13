type AsciiBlockLogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function AsciiBlockLogo({
  tone = "light",
  className = ""
}: AsciiBlockLogoProps) {
  return (
    <pre
      aria-hidden="true"
      className={[
        "ascii-mark overflow-hidden text-[0.42rem] font-bold sm:text-[0.5rem]",
        tone === "dark" ? "text-[#FAFAF8]" : "text-[#111111]",
        className
      ].join(" ")}
    >{`######  ##   ##  ######
##   ## ### ### ##     
######  ## # ## ##     
##   ## ##   ## ##     
######  ##   ##  ######
BELL MOUNTAIN CAMERA`}</pre>
  );
}
