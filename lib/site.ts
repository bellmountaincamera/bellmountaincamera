export const site = {
  name: "Bell Mountain Camera",
  abbreviation: "BMC",
  domain: "bellmountaincamera.com",
  owner: "Isai Torres",
  email: "bellmountaincamera@gmail.com",
  instagram: "@bellmountaincamera",
  locationName: "Inside Wild Goose Vintage & Thrift Store",
  street: "21810 CA-18 Unit #2",
  cityStateZip: "Apple Valley, CA 92307",
  vendorNumber: "Vendor #24",
  filmDevelopmentStatus: "Accepting C-41 film orders",
  hoursShort: "Tuesday - Saturday, 10 AM - 4 PM",
  hours: [
    { days: "Tuesday - Saturday", time: "10:00 AM - 4:00 PM" },
    { days: "Sunday - Monday", time: "Closed" }
  ],
  locationCopy:
    "BMC is inside Wild Goose Vintage & Thrift Store in Apple Valley. Walk-ins are welcome Tuesday through Saturday.",
  description:
    "Bell Mountain Camera operates inside Wild Goose Vintage & Thrift in Apple Valley, CA. BMC processes film, sells used cameras, stocks film, and handles basic camera service.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/lab", label: "Film Lab" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ]
};

// Flip this off when the page/section editing pass is finished.
export const showEditorSectionLabels = false;

export const businessInfo = {
  name: site.name,
  shortName: site.abbreviation,
  locationName: site.locationName,
  address: `${site.street}, ${site.cityStateZip}`,
  city: "Apple Valley",
  state: "CA",
  email: site.email,
  instagram: site.instagram,
  hours: site.hoursShort
};

export const labInfo = {
  status: "Accepting C-41 film orders",
  process: "C-41 color negative",
  formats: "35mm and 110",
  scanDelivery: "Your digital photos are delivered through a Dropbox download link."
};

export const footerCopy =
  "Film lab, used cameras, and camera service inside Wild Goose Vintage & Thrift in Apple Valley, CA.";

export const services = [
  {
    title: "Film Development",
    code: "PROCESS",
    text: "C-41 development and scans.",
    href: "/lab"
  },
  {
    title: "Film Stock",
    code: "COLD STORE",
    text: "35mm, black-and-white, and specialty film.",
    href: "/shop/film"
  },
  {
    title: "Used Cameras",
    code: "SHELF: 35MM",
    text: "Used cameras. Inventory rotates.",
    href: "/shop/cameras"
  },
  {
    title: "Camera Services",
    code: "SERVICE INTAKE",
    text: "Diagnosis, cleaning, light seals, and shutter checks.",
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
  ["Orders", "By Contact"],
  ["Shipping", "Not Available"],
  ["Local Pickup", "Available"],
  ["Walk-Ins", "Welcome"]
];

export const labWorkflow = [
  {
    step: "01",
    title: "Drop off at Wild Goose",
    text: "Visit Wild Goose Vintage & Thrift in Apple Valley. Fill out a shop envelope with your information and film request, then check out with the cashier."
  },
  {
    step: "02",
    title: "Watch for email updates",
    text: "BMC emails you when your film is collected, processing starts, and your order is delivered. All scans are delivered by Dropbox download link."
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
    text: "Basic function check and issue notes."
  },
  {
    title: "Cleaning",
    price: "$45",
    text: "Body, film compartment, contacts, and accessible finder glass."
  },
  {
    title: "Shutter Speed Adjustment",
    price: "$40",
    text: "Basic shutter speed adjustment when possible."
  },
  {
    title: "Light Seal Replacement",
    price: "$40",
    text: "Old foam removed and seals replaced."
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
    title: "Development + scans",
    description: "Process the film and deliver digital images.",
    prices: { "35mm": "$15", "110": "$17" }
  },
  {
    title: "Development only",
    description: "Process the film without digital scans.",
    prices: { "35mm": "$10", "110": "$10" }
  },
  {
    title: "Scanning only",
    description: "Digitize already-developed negatives. Development is not included.",
    prices: { "35mm": "$5", "110": "$7" }
  }
];

export const filmLabDisclaimer =
  "Film is processed using industry-standard methods. BMC is not responsible for results affected by manufacturer defects, film age, or handling before drop-off. If BMC loses or damages a roll, we will replace it with equivalent unexposed film.";

export const appleMapsUrl = `https://maps.apple.com/place?address=${encodeURIComponent(`${site.street}, ${site.cityStateZip}`)}`;

export const serviceDisclaimer =
  "Service depends on the camera model, condition, and issue. Some cameras may need parts or repairs beyond what Bell Mountain Camera can provide in-house.";

export const policyCopy = {
  store:
    "Contact BMC for current availability. Local pickup only.",
  filmLab: filmLabDisclaimer,
  usedCamera:
    "Used cameras and equipment are sold according to their listed condition. Condition notes may include tested status, cosmetic wear, included items, and known issues.",
  cameraService: serviceDisclaimer,
  localPickup:
    "Local pickup is available during shop hours at Bell Mountain Camera inside Wild Goose Vintage & Thrift in Apple Valley, CA.",
  shipping:
    "Shipping is not available right now. Local pickup only during shop hours.",
  returns:
    "Used cameras and equipment: full refund within 30 days of purchase. Film, opened consumables, and completed lab services are not returnable except where required by law. Contact BMC before returning an item.",
  privacy:
    "BMC only uses customer information to respond to messages, process film orders, manage camera service requests, and communicate about shop activity. Customer information is not sold.",
  cookies:
    "The contact page loads a Google map automatically. Google may receive connection information and use cookies when the map loads. The homepage does not load MailerLite.",
  terms:
    "By using BMC services, customers understand that film processing, used camera sales, and camera service involve some risk due to film condition, camera condition, age, storage, and mechanical limitations."
};
