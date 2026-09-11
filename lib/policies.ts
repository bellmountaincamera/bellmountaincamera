import { policyCopy, site } from "@/lib/site";

export const policyUpdated = "2026-09-11";

export type PolicySection = {
  title: string;
  paragraphs: string[];
  links?: { href: string; label: string }[];
};

export const privacySections: PolicySection[] = [
  {
    title: "Information you provide",
    paragraphs: [policyCopy.privacy,
      "Contact and service forms ask for your name, email, and request details. Newsletter signup asks for your email and permission to send updates. Forms prepare an email in your email app; BMC receives it only if you send it.",
      "Film orders also involve your contact details, order preferences, and film images so BMC can process your film and deliver scans. Do not include payment card details, passwords, or identification documents in website forms."],
  },
  {
    title: "Website visits and providers",
    paragraphs: ["The website is hosted by Vercel. Hosting services may process IP addresses, browser information, requested pages, and request times to deliver and protect the website. BMC has not added advertising pixels, audience analytics, or cross-site tracking scripts.",
      "Messages sent to BMC are handled through Gmail and your chosen email provider. Scan delivery may use a download-link service. Those providers handle the information needed for the relevant service.",
      "Google Maps loads only after you select Load Google Map. At that point Google receives connection information and may use cookies. Instagram and directions links open external services with their own privacy practices."],
    links: [{ href: "/cookies", label: "Cookies and optional maps" }, { href: "https://vercel.com/legal/privacy-policy", label: "Vercel privacy policy" }, { href: "https://policies.google.com/privacy", label: "Google privacy policy" }],
  },
  {
    title: "Your choices",
    paragraphs: ["Email BMC to ask about your information, request a correction or deletion, or ask how long order records and scan files are kept. Some records may need to be retained for orders, accounting, or legal obligations.",
      "Service requests do not subscribe you to marketing. To stop BMC updates, email BMC with an unsubscribe request.",
      "This website does not sell personal information or use it for targeted advertising. Its behavior does not change in response to Do Not Track or Global Privacy Control because no such tracking is enabled. Optional external services follow their own settings and policies."],
  },
  {
    title: "Policy updates",
    paragraphs: ["Changes will be posted here with an updated effective date. Contact BMC with questions about a change or about your information."],
  },
];

export const cookieSections: PolicySection[] = [
  {
    title: "Cookies on this website",
    paragraphs: [policyCopy.cookies,
      "The website does not save form entries or gallery preferences in cookies or browser storage. Your browser or email app may retain drafts or autofill information according to its settings. Hosting and security services may use technical information to deliver and protect the site."],
  },
  {
    title: "Optional Google Maps",
    paragraphs: ["The map is blocked until you choose Load Google Map. Loading it connects your browser to Google, which may use cookies and receive your IP address and browser information. You can leave it unloaded and use the written address instead.",
      "Hide Google Map stops displaying the embed; it does not delete cookies already stored by Google. Use your browser settings to manage those cookies. Map permission is not saved between page visits."],
    links: [{ href: "https://policies.google.com/technologies/cookies", label: "Google's cookie information" }],
  },
  {
    title: "External links",
    paragraphs: ["Opening Instagram, Google directions, or your email app takes you to a separate service. Its cookie and privacy practices apply there. These services are not loaded just by viewing a link on BMC."],
    links: [{ href: "/privacy", label: "BMC privacy policy" }],
  },
];

export const termsSections: PolicySection[] = [
  {
    title: "Orders and appointments",
    paragraphs: ["Website forms open email drafts. Sending an inquiry does not confirm an order, reservation, or appointment. Contact BMC for current inventory, prices, and timing. Local pickup only; online payment is not available."],
  },
  {
    title: "Film lab and camera service",
    paragraphs: [policyCopy.terms, policyCopy.cameraService,
      "Ask BMC to confirm the process, scan options, service scope, and price before drop-off. Turnaround is an estimate, not a guaranteed delivery date."],
  },
  {
    title: "Used equipment and returns",
    paragraphs: [policyCopy.usedCamera, "Ask for condition notes, testing details, and included items before purchase. Used cameras and equipment can be returned within 30 days of purchase for a full refund."],
    links: [{ href: "/returns", label: "Returns and refunds" }],
  },
  {
    title: "Photographs and website content",
    paragraphs: ["Photographs and other website content belong to BMC or their respective owners. Contact BMC for permission before reusing them. Buying lab services does not transfer ownership of your photographs to BMC."],
  },
  {
    title: "Your rights and questions",
    paragraphs: ["These terms do not remove consumer rights or remedies that cannot be excluded by law. Contact BMC about an order, service issue, or accessibility barrier."],
    links: [{ href: "/privacy", label: "Privacy policy" }],
  },
];

export const returnSections: PolicySection[] = [
  {
    title: "Returns and refunds",
    paragraphs: [policyCopy.returns,
      "The 30-day return period starts on the purchase date. Rights and refunds required by law still apply."],
  },
  {
    title: "Report an issue",
    paragraphs: ["Email BMC with the purchase date, item or service, and a short description of the issue. Include proof of purchase if available; leave out payment card details. Contact BMC before bringing an item back or arranging a return."],
  },
  {
    title: "Faulty goods or service issues",
    paragraphs: ["If equipment differs from its described condition or you have a problem with a lab or camera service, contact BMC. This policy does not limit rights or remedies that apply under law."],
  },
];

export const policyContact = {
  name: site.name,
  address: `${site.locationName}, ${site.street}, ${site.cityStateZip}`,
  email: site.email,
};
