type MetadataLineProps = {
  items: string[];
  tone?: "dark" | "light";
};

export function MetadataLine({ items, tone = "light" }: MetadataLineProps) {
  return (
    <div
      className={[
        "mono flex flex-wrap gap-x-3 gap-y-2 text-[0.66rem] uppercase leading-5 tracking-[0.1em] sm:gap-x-5 sm:text-[0.7rem] sm:tracking-[0.12em]",
        tone === "dark" ? "text-[#D8D8D2]" : "text-[#2457C5]"
      ].join(" ")}
    >
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
