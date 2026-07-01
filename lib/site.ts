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
  vendorNumber: "Vendor #24",
  filmDevelopmentStatus: "Accepting film development orders",
  filmTurnaround: "C-41: 3-7 business days",
  hoursShort: "Tuesday - Saturday, 10 AM - 4 PM",
  hours: [
    { days: "Tuesday - Saturday", time: "10:00 AM - 4:00 PM" },
    { days: "Sunday - Monday", time: "Closed" }
  ],
  appointmentEmailSubject: "Appointment request for Bell Mountain Camera",
  appointmentEmailBody:
    "Hi Bell Mountain Camera,\n\nI would like to request an appointment.\n\nPreferred day/time:\nReason for visit:\nPhone number:\n\nThank you.",
  appointmentAvailability: [
    { days: "Tuesday - Thursday", time: "Usually available 11:00 AM - 1:00 PM" },
    { days: "Friday - Saturday", time: "Usually available most of the day" },
    { days: "Best availability", time: "Request appointments one week in advance" }
  ],
  locationCopy:
    "Bell Mountain Camera is located inside Wild Goose Vintage & Thrift Store in Apple Valley, California. Walk-ins are welcome Tuesday through Saturday from 10 AM to 4 PM, or customers can contact BMC to set up an appointment. For best availability, request appointments one week in advance.",
  description:
    "Bell Mountain Camera operates inside Wild Goose Vintage & Thrift in Apple Valley, CA. BMC processes film, sells used cameras, stocks film, and handles basic camera service.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/lab", label: "Film Lab" },
    { href: "/shop", label: "Shop" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ]
};

export const businessInfo = {
  name: site.name,
  shortName: site.abbreviation,
  locationName: site.locationName,
  address: `${site.street}, ${site.cityStateZip}`,
  city: "Apple Valley",
  state: "CA",
  email: site.email,
  phone: site.phone,
  instagram: site.instagram,
  hours: site.hoursShort
};

export const labInfo = {
  status: "Accepting C-41 film orders",
  process: "C-41",
  turnaround: "3-7 business days",
  scanDelivery: "Download link"
};

export const footerCopy =
  "Bell Mountain Camera operates inside Wild Goose Vintage & Thrift in Apple Valley, CA. BMC processes film, sells used cameras, stocks film, and handles basic camera service.";

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
  }
];

export const serviceBundles = [
  { title: "Diagnose + Cleaning", price: "$55" },
  { title: "Diagnose + Light Seals", price: "$50" },
  { title: "Diagnose + Shutter Speed Adjustment", price: "$50" },
  {
    title: "Full Service",
    price: "$125",
    text: "Includes diagnosis, cleaning, light seal replacement, and shutter speed adjustment when possible."
  }
];

export const filmLabPricing = [
  {
    title: "Develop + Scan",
    price: "$15",
    text: "Includes film development and digital scan delivery. JPEG or TIFF files available."
  },
  {
    title: "Develop Only",
    price: "$10",
    text: "Processing only. Choose this if you do not need digital scans."
  },
  {
    title: "Push / Pull",
    price: "$3 / stop",
    text: "Available for C-41 orders when exposure needs adjustment."
  },
  {
    title: "Accepted Formats",
    price: "35MM / 110 / APS",
    text: "Disposable cameras, 35mm, 110, and APS film accepted."
  },
  {
    title: "Main Process",
    price: "C-41",
    text: "Standard color negative processing for most common film stocks."
  },
  {
    title: "Specialty Process",
    price: "B&W / E-6",
    text: "Black-and-white and slide film are handled in specialty batches. Turnaround may be longer."
  }
];

export const filmLabDisclaimer =
  "Film processing carries inherent risk due to film age, exposure, storage condition, camera condition, and development variables. Bell Mountain Camera is not responsible for blank rolls, pre-existing film damage, camera loading issues, heat damage, expired film damage, or exposure problems.";

export const serviceDisclaimer =
  "Service depends on the camera model, condition, and issue. Some cameras may need parts or repairs beyond what Bell Mountain Camera can provide in-house.";

export const policyCopy = {
  store:
    "Online checkout is not active yet. Contact BMC for current film, camera, and shop availability, local pickup, or arranged shipping.",
  filmLab: filmLabDisclaimer,
  usedCamera:
    "Used cameras and equipment are sold according to their listed condition. Condition notes may include tested status, cosmetic wear, included items, and known issues.",
  cameraService: serviceDisclaimer,
  localPickup:
    "Local pickup is available during shop hours at Bell Mountain Camera inside Wild Goose Vintage & Thrift in Apple Valley, CA.",
  shipping:
    "Online checkout is not active yet. Local pickup is available during shop hours. For shipping questions, contact BMC before ordering.",
  returns:
    "Used cameras and equipment are sold according to their listed condition. Film, opened consumables, and completed lab services are not returnable. Contact BMC with any issue before returning an item.",
  privacy:
    "BMC only uses customer information to respond to messages, process film orders, manage camera service requests, and communicate about shop activity. Customer information is not sold.",
  terms:
    "By using BMC services, customers understand that film processing, used camera sales, and camera service involve some risk due to film condition, camera condition, age, storage, and mechanical limitations."
};
