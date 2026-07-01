import { AsciiPageTitle } from "@/components/brand/AsciiPageTitle";
import { MetadataLine } from "@/components/ui/MetadataLine";

export function HeroSection() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <AsciiPageTitle title="Home" />
        <div className="mx-auto mt-5 max-w-3xl">
          <MetadataLine
            items={[
              "LOCATION: APPLE VALLEY, CA",
              "STATUS: ACCEPTING FILM ORDERS",
              "PROCESS: C-41",
              "PICKUP: INSIDE WILD GOOSE"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
