export type FilmStripFrame = {
  src: string;
  alt: string;
  focalPoint?: string;
};

// The two portrait scans use deliberate focal points in the 3:2 film gate.
export const filmStripFrames: FilmStripFrame[] = [
  { src: "/images/film-lab-scans/test-scan-desert-road.jpg", alt: "High Desert road beneath a pale evening sky" },
  { src: "/images/film-lab-scans/test-scan-sunset-palms.jpg", alt: "Palm trees at sunset in a High Desert parking lot" },
  { src: "/images/film-lab-scans/test-scan-cafe-interior.jpg", alt: "Warmly lit cafe interior on film" },
  { src: "/images/film-lab-scans/test-scan-concert-wide.jpg", alt: "Wide film scan of a live concert and crowd" },
  { src: "/images/film-lab-scans/test-scan-concert-soft.jpg", alt: "Soft glowing stage lights at a concert" },
  { src: "/images/film-lab-scans/test-scan-concert-vertical.jpg", alt: "Band on stage above a concert crowd", focalPoint: "50% 68%" },
  { src: "/images/film-lab-scans/test-scan-stage-color.jpg", alt: "Colorful stage lights seen over a crowd" },
  { src: "/images/film-lab-scans/test-scan-shoes.jpg", alt: "Friends' shoes arranged around a circle on the ground" },
  { src: "/images/film-lab-scans/test-scan-mortuary.jpg", alt: "Red mortuary sign on a High Desert building", focalPoint: "50% 39%" },
];
