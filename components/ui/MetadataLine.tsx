type MetadataLineProps = {
  items: string[];
  tone?: "dark" | "light";
};

export function MetadataLine({ items, tone = "light" }: MetadataLineProps) {
  return (
    <div
      className={[
        "mono flex flex-wrap gap-x-5 gap-y-2 text-[0.7rem] uppercase tracking-[0.12em]",
        tone === "dark" ? "text-[#D8D8D2]" : "text-[#2457C5]"
      ].join(" ")}
    >
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
