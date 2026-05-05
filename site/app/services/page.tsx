import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ontology engineering, knowledge graph architecture, taxonomy audits, eval data, and embedding-space cartography for AI companies.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b hairline">
        <div className="container-x pt-20 pb-20 md:pt-32 md:pb-24">
          <SectionEyebrow label="Services" />
          <h1 className="display-lg mt-6 max-w-4xl">
            What we do, in five lines of work.
          </h1>
          <p className="lede mt-8 max-w-3xl">
            Every engagement starts with the same question: what are the
            categories your product depends on, and do your data, evals, and
            model agree on them? The work below is how we answer that.
          </p>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="container-x py-16 md:py-24">
          {services.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-24">
              <ServiceCard service={s} variant="full" />
            </div>
          ))}
          <div className="border-t hairline" />
        </div>
      </section>

      <CTASection
        eyebrow="Engagements"
        heading="Most engagements run six to twelve weeks. We take on a handful per quarter."
        body="If something below sounds close to what you need, write to us with a paragraph or two about the problem."
      />
    </>
  );
}
