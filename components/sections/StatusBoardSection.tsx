import { TerminalStatusPanel } from "@/components/brand/TerminalStatusPanel";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { statusBoard } from "@/lib/site";

export function StatusBoardSection() {
  return (
    <section className="bg-[#111111] text-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <TerminalLabel tone="dark">Current Lab / Shop Status</TerminalLabel>
        </div>
        <TerminalStatusPanel
          title="CURRENT LAB / SHOP STATUS"
          rows={statusBoard as Array<[string, string]>}
          tone="dark"
        />
      </div>
    </section>
  );
}
