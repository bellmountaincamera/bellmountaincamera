import { MetadataPanel } from "@/components/brand/MetadataPanel";
import { TerminalHeader } from "@/components/brand/TerminalHeader";
import { MetadataLine } from "@/components/ui/MetadataLine";

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
  meta: string[];
};

export function PageHeader({ label, title, description, meta }: PageHeaderProps) {
  return (
    <section className="border-b border-[#2A2A2A]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <TerminalHeader eyebrow={label} title={title} description={description} />
        <div className="mt-6">
          <MetadataPanel rows={meta.map((item, index) => [`META ${index + 1}`, item])} />
        </div>
        <div className="mt-5">
          <MetadataLine items={["BMC PUBLIC RECORD", "APPLE VALLEY, CA"]} />
        </div>
      </div>
    </section>
  );
}
