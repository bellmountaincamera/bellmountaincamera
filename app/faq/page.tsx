import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

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
        "BMC is building around 35mm C-41 film development and scanning. Film lab pricing is not finalized yet."
      ],
      [
        "Do you scan film?",
        "Yes. BMC is building a scanning workflow with digital scan delivery through a download link."
      ],
      [
        "How long does film take?",
        "Typical turnaround is usually 3-7 business days depending on volume, but turnaround is not guaranteed."
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
        "Yes. Used camera inventory changes often and product pages should list condition, tested status, included items, notes, price, and availability."
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
        "Bell Mountain Camera plans to support shipping for online film and product orders. Shipping rates will be configured before live checkout."
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
        description="Answers for shipping, local pickup, film stock, camera inventory, and future online ordering."
        meta={["SHIPPING", "LOCAL PICKUP", "INVENTORY"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8">
          {faqGroups.map((group) => (
            <section key={group.title}>
              <h2 className="mb-4 text-2xl font-semibold uppercase tracking-[0.02em]">
                {group.title}
              </h2>
              <div className="grid gap-px border border-[#111111]/20 bg-[#111111]/20">
                {group.questions.map(([question, answer]) => (
                  <details key={question} className="bg-[#f3eee5] p-5">
                    <summary className="cursor-pointer text-lg font-semibold uppercase tracking-[0.03em]">
                      {question}
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-[#4a4036]">{answer}</p>
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
