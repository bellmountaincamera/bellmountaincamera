import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { labInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Bell Mountain Camera shipping, pickup, film stock, cameras, and online orders."
};

const faqGroups = [
  {
    title: "Film Lab",
    questions: [
      [
        "Do you develop film?",
        `Yes. BMC offers ${labInfo.process} film development and scanning. Current pricing is listed on the Film Lab page.`
      ],
      [
        "Do you scan film?",
        "Yes. JPEG and TIFF scans are delivered by download link."
      ],
      [
        "How long does film take?",
        `Typical C-41 turnaround is usually ${labInfo.turnaround} depending on volume, but turnaround is not guaranteed.`
      ],
      [
        "What happens if my roll is blank?",
        "Film results can be affected by film age, exposure, storage condition, camera condition, loading errors, heat, and development variables."
      ]
    ]
  },
  {
    title: "Shop",
    questions: [
      [
        "Do you sell film?",
        "Yes. Bell Mountain Camera carries rotating 35mm film, Kodak film, black-and-white film, color negative film, specialty stocks, and occasional 110 or instant film."
      ],
      [
        "Do you sell used cameras?",
        "Yes. Tested used cameras are listed with condition notes, included items, price, and availability."
      ],
      [
        "How often is stock updated?",
        "Film and camera inventory may rotate often, especially one-off used camera listings."
      ]
    ]
  },
  {
    title: "Camera Services",
    questions: [
      [
        "Do you repair cameras?",
        "BMC offers basic film camera service including diagnosis, cleaning, light seal replacement, and shutter speed adjustment when possible."
      ],
      [
        "Are all cameras serviceable?",
        "Service depends on the camera model, condition, and issue. Some cameras may need parts or repairs beyond what BMC can provide in-house."
      ]
    ]
  },
  {
    title: "Shipping / Pickup",
    questions: [
      [
        "Do you ship film?",
        "Online checkout is coming soon. Contact BMC for current shipping questions."
      ],
      [
        "Do you offer local pickup?",
        "Yes. Local pickup is available at Bell Mountain Camera inside Wild Goose Vintage & Thrift Store in Apple Valley during business hours."
      ],
      [
        "Can I walk in?",
        "Yes. Walk-ins are welcome Tuesday through Saturday from 10 AM to 4 PM."
      ]
    ]
  }
];

export default function FAQPage() {
  return (
    <main>
      <PageHeader
        label="Customer FAQ"
        title="FAQ"
        description="Quick answers before you visit or contact BMC."
        meta={["SHIPPING", "LOCAL PICKUP", "INVENTORY"]}
        textOnly
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8">
          {faqGroups.map((group) => (
            <section key={group.title}>
              <h2 className="mb-4 text-2xl font-semibold uppercase tracking-[0.02em]">
                {group.title}
              </h2>
              <div className="record-grid">
                {group.questions.map(([question, answer]) => (
                  <details key={question} className="record-cell p-5">
                    <summary className="cursor-pointer text-lg font-semibold uppercase tracking-[0.03em]">
                      {question}
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-[#111111]">{answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
