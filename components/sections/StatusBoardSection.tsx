import { MetadataLine } from "@/components/ui/MetadataLine";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { statusBoard } from "@/lib/site";

export function StatusBoardSection() {
  return (
    <section className="bg-[#111111] text-[#FAFAF8]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <TerminalLabel tone="dark">Current Lab / Shop Status</TerminalLabel>
        </div>
        <div className="grid gap-px border border-[#FAFAF8]/20 bg-[#FAFAF8]/20 sm:grid-cols-2 lg:grid-cols-4">
          {statusBoard.map(([label, value]) => (
            <div key={label} className="bg-[#111111] p-4">
              <p className="mono text-[0.68rem] uppercase tracking-[0.14em] text-[#666666]">
                {label}
              </p>
              <p className="mt-2 text-xl font-semibold uppercase tracking-[0.03em]">
                {value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <MetadataLine
            tone="dark"
            items={["ONLINE ORDERS", "LOCAL PICKUP", "SHIPS TO CUSTOMER"]}
          />
        </div>
      </div>
    </section>
  );
}
