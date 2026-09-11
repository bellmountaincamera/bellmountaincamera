import Link from "next/link";
import { policyContact, policyUpdated, type PolicySection } from "@/lib/policies";

export function PolicyDocument({ sections }: { sections: PolicySection[] }) {
  return (
    <div className="section-band">
      <div className="section-container">
        <div className="policy-document">
          <div className="metadata-line mb-7">Effective <time dateTime={policyUpdated}>{policyUpdated}</time></div>
          {sections.map((section) => <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.links && <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
              {section.links.map((link) => <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center">{link.label}</Link>)}
            </div>}
          </section>)}
          <section>
            <h2>Contact BMC</h2>
            <p>{policyContact.name}<br />{policyContact.address}<br />
              <a href={`mailto:${policyContact.email}`}>{policyContact.email}</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
