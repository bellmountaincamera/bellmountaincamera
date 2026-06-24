import { AsciiPageTitle } from "@/components/brand/AsciiPageTitle";
import { TerminalHeader } from "@/components/brand/TerminalHeader";
import { PagePhotoSlideshow } from "@/components/sections/PagePhotoSlideshow";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { allPhotoFrames, cameraPhotos, labPhotos } from "@/lib/photo-sets";

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
  meta: string[];
  photoSet?: "all" | "camera" | "lab";
};

export function PageHeader({
  label,
  title,
  description,
  meta,
  photoSet = "all"
}: PageHeaderProps) {
  const frames =
    photoSet === "camera" ? cameraPhotos : photoSet === "lab" ? labPhotos : allPhotoFrames;

  return (
    <section className="border-b border-[#111111]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-7">
          <AsciiPageTitle title={title} />
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <TerminalHeader eyebrow={label} description={description} />
            <div className="mt-5">
              <MetadataLine items={["BMC PUBLIC RECORD", "APPLE VALLEY, CA"]} />
            </div>
          </div>
          <PagePhotoSlideshow
            frames={frames}
            label={photoSet === "camera" ? "Camera File" : photoSet === "lab" ? "Lab File" : "BMC File"}
          />
        </div>
      </div>
    </section>
  );
}
