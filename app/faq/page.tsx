import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Bell Mountain Camera shipping, pickup, film stock, cameras, and online orders."
};

const faqs = [
  [
    "Do you develop film?",
    "BMC is building around 35mm C-41 film development and scanning. Film lab pricing is not finalized yet."
  ],
  [
    "Do you scan film?",
    "Yes. BMC is building a scanning workflow with digital scan delivery through a download link."
  ],
  [
    "Do you sell film?",
    "Yes. Bell Mountain Camera carries rotating 35mm film, Kodak film, black-and-white film, color negative film, specialty stocks, and occasional 110 or instant film."
  ],
  [
    "Do you sell used cameras?",
    "Yes. Used camera inventory changes often and product pages should list condition, tested status, included items, notes, price, and availability."
  ],
  [
    "Do you ship film?",
    "Bell Mountain Camera plans to support shipping for online film and product orders. Shipping rates will be configured before live checkout."
  ],
  [
    "Do you offer local pickup?",
    "Yes. Local pickup is available at Bell Mountain Camera inside Wild Goose Vintage & Thrift Store in Apple Valley during pickup hours."
  ],
  [
    "How long does shipping take?",
    "Shipping timing depends on the final shipping setup, customer address, carrier options, and order volume."
  ],
  [
    "Are all cameras tested?",
    "Used camera listings should state tested status, condition notes, included lens or accessories, price, and availability."
  ],
  [
    "How often is stock updated?",
    "Film and camera inventory may rotate often, especially one-off used camera listings."
  ],
  [
    "Can I walk in?",
    "Yes. Walk-ins are welcome Tuesday through Saturday from 10 AM to 4 PM."
  ],
  [
    "Can I make an appointment?",
    "Yes. Customers can email or call BMC to set up an appointment."
  ],
  [
    "Do you repair cameras?",
    "BMC offers basic film camera service including diagnosis, cleaning, light seal replacement, and shutter speed adjustment when possible."
  ],
  [
    "How long does film take?",
    "Typical turnaround is usually 3-7 business days depending on volume, but turnaround is not guaranteed."
  ],
  [
    "What happens if my roll is blank?",
    "Film results can be affected by film age, exposure, storage condition, camera condition, loading errors, heat, and development variables."
  ],
  [
    "Do you process expired film?",
    "Expired film may produce poor or blank results. Contact BMC before drop-off if you have questions about a specific roll."
  ],
  [
    "Can I reserve an item?",
    "Reservation rules are not finalized yet. Contact BMC by email or phone if you have a question about a specific item."
  ]
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
        <div className="grid gap-px border border-[#111111]/20 bg-[#111111]/20">
          {faqs.map(([question, answer]) => (
            <details key={question} className="bg-[#f3eee5] p-5">
              <summary className="cursor-pointer text-lg font-semibold uppercase tracking-[0.03em]">
                {question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#4a4036]">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
