type MetadataLineProps = {
  items: string[];
  tone?: "dark" | "light";
};

export function MetadataLine({ items, tone = "light" }: MetadataLineProps) {
  return (
    <div
      className={[
        "ocr flex flex-wrap gap-x-3 gap-y-2 text-[0.66rem] uppercase leading-5 sm:gap-x-5 sm:text-[0.7rem]",
        tone === "dark" ? "text-[#FFFFFF]" : "text-[#2457C5]"
      ].join(" ")}
    >
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
