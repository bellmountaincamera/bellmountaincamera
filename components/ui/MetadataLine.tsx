type MetadataLineProps = {
  items: string[];
  tone?: "dark" | "light";
};

export function MetadataLine({ items, tone = "light" }: MetadataLineProps) {
  return (
    <div className={`metadata-line ocr ${tone === "dark" ? "on-dark" : ""}`}>
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}
