export type PhotoFrame = {
  src: string;
  title: string;
  label: string;
  text: string;
  alt?: string;
};

export const cameraPhotos: PhotoFrame[] = [
  {
    src: "/images/camera-photos/olympus-closeup.jpg",
    title: "Olympus Superzoom 105",
    label: "BMC-23",
    text: "35mm / autofocus point-and-shoot / 38-105mm zoom / quartz date."
  },
  {
    src: "/images/camera-photos/canon-z115-closeup.jpg",
    title: "Canon Sure Shot Z115",
    label: "BMC-2",
    text: "35mm / autofocus compact / 38-115mm zoom / built-in flash."
  },
  {
    src: "/images/camera-photos/superzoom-detail.jpg",
    title: "Olympus Superzoom 105 Detail",
    label: "BMC-22",
    text: "35mm / autofocus point-and-shoot / 38-105mm zoom / illuminated viewfinder."
  },
  {
    src: "/images/camera-photos/pentax-iqzoom.jpg",
    title: "Pentax IQZoom 110",
    label: "BMC-13",
    text: "35mm / autofocus point-and-shoot / 38-110mm zoom / built-in flash."
  },
  {
    src: "/images/camera-photos/canon-sureshot-film.jpg",
    title: "Canon Sure Shot 85 Zoom",
    label: "BMC-8",
    text: "35mm / autofocus compact / 38-85mm zoom / date imprint model."
  },
  {
    src: "/images/camera-photos/olympus-twin-flatlay.jpg",
    title: "Olympus Infinity Twin",
    label: "BMC CAMERAS-7",
    text: "35mm / autofocus compact / twin-lens system / weatherproof body."
  },
  {
    src: "/images/camera-photos/canon-owl-flatlay.jpg",
    title: "Canon Sure Shot Owl Date",
    label: "BMC CAMERAS-2",
    text: "35mm / autofocus compact / 35mm lens / large viewfinder / date model."
  },
  {
    src: "/images/camera-photos/minolta-7-rangefinder.jpg",
    title: "Minolta Hi-Matic 7s",
    label: "BMC-21",
    text: "35mm / rangefinder / 45mm f/1.8 lens / manual and auto exposure."
  },
  {
    src: "/images/camera-photos/canon-a1-flatlay-wide.jpg",
    title: "Canon A-1 System",
    label: "CAMERA-2",
    text: "35mm / SLR / Canon FD mount / electronic exposure modes."
  },
  {
    src: "/images/camera-photos/canon-ae1-flatlay.jpg",
    title: "Canon AE-1 Program",
    label: "CAMERA-3",
    text: "35mm / SLR / Canon FD mount / program auto exposure."
  },
  {
    src: "/images/camera-photos/olympus-superzoom-flatlay.jpg",
    title: "Olympus Superzoom 105",
    label: "CAMERA-1",
    text: "35mm / autofocus point-and-shoot / 38-105mm zoom / quartz date."
  },
  {
    src: "/images/camera-photos/canon-a1-closeup.jpg",
    title: "Canon A-1 Close-Up",
    label: "BMC CAM-2",
    text: "35mm / SLR / Canon FD mount / 50mm FD lens shown."
  },
  {
    src: "/images/camera-photos/olympus-superzoom-closeup.jpg",
    title: "Olympus Superzoom 105 Close-Up",
    label: "BMC CAM-3",
    text: "35mm / autofocus point-and-shoot / 38-105mm zoom / built-in flash."
  }
];

export const labPhotos: PhotoFrame[] = [
  {
    src: "/images/test-rolls/lab-processor-vertical.jpg",
    label: "PROCESSOR",
    title: "Noritsu Film Processor",
    text: "Film transport and processor detail from the BMC lab setup."
  },
  {
    src: "/images/test-rolls/lab-processor-soft.jpg",
    label: "PROCESSOR DETAIL",
    title: "Processor Path Detail",
    text: "Soft-focus processor frame showing the mechanical film path."
  },
  {
    src: "/images/test-rolls/lab-processor-wide.jpg",
    label: "PROCESSOR PATH",
    title: "Open Processor Bed",
    text: "Wide view of the processor channel and film handling area."
  },
  {
    src: "/images/test-rolls/processor-lines.jpg",
    label: "REGULAR SCAN",
    title: "Regular Border Sample",
    text: "A cropped scan sample focused on the image area."
  },
  {
    src: "/images/test-rolls/processor-open.jpg",
    label: "TRANSPORT",
    title: "Open Transport Section",
    text: "Processor transport section used as a technical lab reference frame."
  },
  {
    src: "/images/test-rolls/chemistry-bottles.jpg",
    label: "CHEMISTRY",
    title: "Color Chemistry",
    text: "Kodak color chemistry bottles used as lab environment photography."
  },
  {
    src: "/images/test-rolls/full-border-kodak.jpg",
    label: "FULL BORDER",
    title: "Full Border Sample",
    text: "A full-border scan showing the frame edge and surrounding film area."
  },
  {
    src: "/images/test-rolls/full-border-detail.jpg",
    label: "FULL BORDER DETAIL",
    title: "Frame Edge Detail",
    text: "Full-border detail frame with visible film edge and lab texture."
  },
  {
    src: "/images/test-rolls/camera-shelf.jpg",
    label: "TEST FRAME",
    title: "Camera Shelf Frame",
    text: "A test-roll frame with shop gear and camera shelf detail."
  },
  {
    src: "/images/test-rolls/archive-audio-shelf.jpg",
    label: "ARCHIVE FRAME",
    title: "Archival Shelf Frame",
    text: "A test-roll frame with archival storage and analog equipment texture."
  }
];

export const homePhotos: PhotoFrame[] = [
  {
    src: "/images/home-camera-counter.jpg",
    title: "Shop Counter",
    label: "HOME",
    text: "Hands holding a Nikon Nikkormat film camera over a counter of used cameras."
  }
];

export const allPhotoFrames = [...homePhotos, ...cameraPhotos, ...labPhotos];
