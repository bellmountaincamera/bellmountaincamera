import { AsciiPageTitle } from "@/components/brand/AsciiPageTitle";
import { PagePhotoSlideshow } from "@/components/sections/PagePhotoSlideshow";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { cameraPhotos, homePhotos, labPhotos } from "@/lib/photo-sets";

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
  meta: string[];
  photoSet?: "all" | "camera" | "lab";
  hideIntro?: boolean;
  textOnly?: boolean;
};

export function PageHeader({ title, description, meta, photoSet = "all", hideIntro = false, textOnly = false }: PageHeaderProps) {
  const frames = photoSet === "camera" ? cameraPhotos : photoSet === "lab" ? labPhotos.slice(0, 6) : [...homePhotos, ...cameraPhotos];
  return (
    <section className="page-header">
      <div className="page-masthead">
        <h1 className="sr-only">{title}</h1>
        <AsciiPageTitle title={title} />
      </div>
      <div className="section-container">
        {!hideIntro && <div className="page-intro">
          <p>{description}</p>
          <MetadataLine items={meta} />
        </div>}
        {!textOnly && <PagePhotoSlideshow frames={frames} label={`${title} photos`} priority />}
      </div>
    </section>
  );
}
