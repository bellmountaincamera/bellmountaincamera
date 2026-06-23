export const site = {
  name: "Bell Mountain Camera",
  abbreviation: "BMC",
  domain: "bellmountaincamera.com",
  owner: "Isai Torres",
  email: "bellmountaincamera@gmail.com",
  phone: "760-669-8544",
  instagram: "@bellmountaincamera",
  locationName: "Inside Wild Goose Vintage & Thrift Store",
  street: "21810 CA-18 Unit #2",
  cityStateZip: "Apple Valley, CA 92307",
  hoursShort: "Tuesday - Saturday, 10 AM - 4 PM",
  hours: [
    { days: "Tuesday - Saturday", time: "10:00 AM - 4:00 PM" },
    { days: "Sunday - Monday", time: "Closed" }
  ],
  locationCopy:
    "Bell Mountain Camera is located inside Wild Goose Vintage & Thrift Store in Apple Valley, California. Walk-ins are welcome Tuesday through Saturday from 10 AM to 4 PM, or customers can contact BMC to set up an appointment.",
  description:
    "Bell Mountain Camera is a High Desert film camera shop and film lab located inside Wild Goose Vintage & Thrift Store in Apple Valley, California. BMC offers film cameras, film stock, online shopping, shipping, local pickup, film development, scanning, film drop-off and pickup, and basic camera services.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/lab", label: "Film Lab" },
    { href: "/shop", label: "Shop" },
    { href: "/services", label: "Camera Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ]
};

export const services = [
  {
    title: "Film Development",
    code: "PROCESS: C-41",
    text: "C-41 processing and scanning.",
    href: "/lab"
  },
  {
    title: "Film Stock",
    code: "COLD STORE",
    text: "Rotating 35mm film, Kodak, black-and-white, and specialty film.",
    href: "/shop/film"
  },
  {
    title: "Used Cameras",
    code: "SHELF: 35MM",
    text: "Film cameras available in-store and online soon.",
    href: "/shop/cameras"
  },
  {
    title: "Camera Services",
    code: "SERVICE INTAKE",
    text: "Diagnosis, cleaning, light seals, and shutter speed adjustment when possible.",
    href: "/services"
  }
];

export const siteStatusLine = [
  "FILM DROP-OFF",
  "USED CAMERAS",
  "FILM STOCK",
  "LOCAL PICKUP"
];

export const statusBoard = [
  ["C-41 Development", "Available"],
  ["Film Scanning", "Available"],
  ["Camera Service Intake", "Available"],
  ["Film Stock", "Rotating"],
  ["Online Orders", "Coming Soon"],
  ["Shipping", "Planned"],
  ["Local Pickup", "Available"],
  ["Walk-Ins", "Welcome"]
];

export const labWorkflow = [
  {
    step: "01",
    title: "Drop off your film",
    text: "Bring disposable cameras, 35mm, 110, or APS film to Bell Mountain Camera during business hours."
  },
  {
    step: "02",
    title: "Choose processing",
    text: "C-41 is the main process. Black-and-white and E-6 are handled as specialty orders and may take longer."
  },
  {
    step: "03",
    title: "Add push or pull notes",
    text: "C-41 orders can include push or pull development for $3 per stop."
  },
  {
    step: "04",
    title: "Select scan files",
    text: "Scans can be delivered as JPEG files or TIFF files."
  },
  {
    step: "05",
    title: "Scans are delivered",
    text: "Digital scans are delivered after processing. Specialty orders may have a delayed turnaround."
  }
];

export const filmStock = [
  "Kodak Gold",
  "Kodak Ultramax",
  "Kodak Tri-X",
  "Kodak ColorPlus",
  "Kodak Portra",
  "Kodak Ektar",
  "Kodak single-use cameras",
  "REFLX Lab film",
  "Lucky film",
  "Occasional specialty 35mm film"
];

export const shopInventoryFields = [
  "Camera name",
  "Brand",
  "Model",
  "Format",
  "Condition",
  "Tested status",
  "Lens included",
  "Notes",
  "Price",
  "Availability"
];

export const cameraServiceMenu = [
  {
    title: "Diagnose",
    price: "$15",
    text: "Inspection of overall camera condition and basic function, including light leaks, shutter behavior, film transport, and general function."
  },
  {
    title: "Cleaning",
    price: "$45",
    text: "Basic cleaning of the camera body, film compartment, battery contacts, and accessible viewfinder areas."
  },
  {
    title: "Shutter Speed Adjustment",
    price: "$40",
    text: "Basic shutter speed adjustment when possible."
  },
  {
    title: "Light Seal Replacement",
    price: "$40",
    text: "Replacement of deteriorated light seals."
  },
  {
    title: "Full Service",
    price: "$125",
    text: "A bundled basic service intake for cameras that need diagnosis, cleaning, light seals, and shutter speed adjustment when possible."
  }
];

export const serviceBundles = [
  { title: "Diagnose + Cleaning", price: "$55" },
  { title: "Diagnose + Light Seals", price: "$50" },
  { title: "Diagnose + Shutter Speed Adjustment", price: "$50" },
  { title: "Full Service", price: "$125" }
];

export const filmLabPricing = [
  {
    title: "Develop + Scan",
    price: "$15",
    text: "Film development with digital scans delivered as JPEG or TIFF files."
  },
  {
    title: "Develop Only",
    price: "$10",
    text: "Film development without digital scan delivery."
  },
  {
    title: "Push / Pull",
    price: "$3 / stop",
    text: "Push or pull development for C-41 orders, priced per stop."
  },
  {
    title: "Accepted Formats",
    price: "35MM / 110 / APS",
    text: "Disposable cameras, 35mm rolls, 110 film, and APS film are accepted for development."
  },
  {
    title: "Main Process",
    price: "C-41",
    text: "C-41 color negative film is the main processing service."
  },
  {
    title: "Specialty Process",
    price: "B&W / E-6",
    text: "Black-and-white and E-6 are processed as specialty orders and may have delayed delivery."
  }
];

export const filmLabDisclaimer =
  "Film processing carries inherent risk due to film age, exposure, storage condition, camera condition, and development variables. Bell Mountain Camera is not responsible for blank rolls, pre-existing film damage, camera loading issues, heat damage, expired film damage, or exposure problems.";

export const serviceDisclaimer =
  "Service depends on the camera model, condition, and issue. Some cameras may need parts or repairs beyond what Bell Mountain Camera can provide in-house.";
