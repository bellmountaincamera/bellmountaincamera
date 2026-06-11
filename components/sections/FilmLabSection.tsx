import { CTAButton } from "@/components/ui/CTAButton";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export function FilmLabSection() {
  return (
    <section className="bg-[#111111] text-[#e8e2d8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <TerminalLabel tone="dark">Film Lab / C-41</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">
            Processing and scans with a clean paper trail
          </h2>
          <p className="mt-6 text-sm leading-7 text-[#c7b8a3]">
            The lab is built for real rolls: local drop-off, mail-in workflow,
            roll numbers, digital scan delivery, and useful customer updates
            without turning the order process into a maze.
          </p>
          <div className="mt-8">
            <CTAButton href="/lab" variant="dark">
              View Film Lab
            </CTAButton>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["PROCESS", "35mm C-41 color negative film"],
            ["SCAN", "Digital files for archive and edit"],
            ["TURNAROUND", "Usually 3-7 business days"],
            ["DELIVERY", "Download link delivery"]
          ].map(([label, value]) => (
            <div key={label} className="terminal-panel p-5">
              <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-[#8c7b6a]">
                {label}
              </p>
              <p className="mt-4 text-xl font-semibold">{value}</p>
            </div>
          ))}
          <div className="sm:col-span-2">
            <MetadataLine
              tone="dark"
              items={["ROLL NO. 4821", "STATUS: SCANNED", "QUALITY CHECK: PASS"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
