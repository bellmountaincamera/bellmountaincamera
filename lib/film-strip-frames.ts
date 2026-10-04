export type FilmStripFrame = {
  src: string;
  alt: string;
  rotation?: 90;
};

// Portrait exposures turn sideways in the film gate to keep the complete scan.
export const filmStripFrames: FilmStripFrame[] = [
  { src: "/images/film-lab-scans/test-scan-desert-road.jpg", alt: "High Desert road beneath a pale evening sky" },
  { src: "/images/film-lab-scans/test-scan-sunset-palms.jpg", alt: "Palm trees at sunset in a High Desert parking lot" },
  { src: "/images/film-lab-scans/test-scan-cafe-interior.jpg", alt: "Warmly lit cafe interior on film" },
  { src: "/images/film-lab-scans/test-scan-concert-wide.jpg", alt: "Wide film scan of a live concert and crowd" },
  { src: "/images/film-lab-scans/test-scan-concert-soft.jpg", alt: "Soft glowing stage lights at a concert" },
  { src: "/images/film-lab-scans/test-scan-concert-vertical.jpg", alt: "Band on stage above a concert crowd", rotation: 90 },
  { src: "/images/film-lab-scans/test-scan-stage-color.jpg", alt: "Colorful stage lights seen over a crowd" },
  { src: "/images/film-lab-scans/test-scan-shoes.jpg", alt: "Friends' shoes arranged around a circle on the ground" },
  { src: "/images/film-lab-scans/test-scan-mortuary.jpg", alt: "Red mortuary sign on a High Desert building", rotation: 90 },
  { src: "/images/film-strip-scans/0096-13.webp", alt: "Hiking boots resting on a sunlit rock", rotation: 90 },
  { src: "/images/film-strip-scans/0096-11.webp", alt: "Agave leaves and prickly pear cactus", rotation: 90 },
  { src: "/images/film-strip-scans/0099-19.webp", alt: "Two people walking beneath tall forest trees" },
  { src: "/images/film-strip-scans/0099-32.webp", alt: "Longhorn in a meadow beneath distant mountains" },
  { src: "/images/film-strip-scans/0099-2.webp", alt: "Breakfast sandwiches on a camping table", rotation: 90 },
  { src: "/images/film-strip-scans/R0075-33.webp", alt: "Platas Mexican Food storefront in afternoon light" },
  { src: "/images/film-strip-scans/R0083-8.webp", alt: "Person standing on a hillside at sunset" },
  { src: "/images/film-strip-scans/R0083-10.webp", alt: "Donuts arranged inside a bakery display case" },
];
