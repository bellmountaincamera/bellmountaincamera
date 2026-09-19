export function LedAccent() {
  return <span className="led-accent" aria-hidden="true">
    {Array.from({ length: 9 }, (_, index) => <i key={index} />)}
  </span>;
}
