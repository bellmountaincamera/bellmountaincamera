import { MetadataLine } from "@/components/ui/MetadataLine";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
  meta: string[];
};

export function PageHeader({ label, title, description, meta }: PageHeaderProps) {
  return (
    <section className="border-b border-[#111111]/15">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <TerminalLabel>{label}</TerminalLabel>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold uppercase leading-[0.95] tracking-[0.02em] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#333333] sm:text-lg">
          {description}
        </p>
        <div className="mt-8">
          <MetadataLine items={meta} />
        </div>
      </div>
    </section>
  );
}
