import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CTASection } from "@/components/CTASection";
import { cases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Three engagements we can talk about: a foundation-model lab, a vertical AI scribe, and an agentic SaaS company.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b hairline">
        <div className="container-x pt-20 pb-20 md:pt-32 md:pb-24">
          <SectionEyebrow label="Selected work" />
          <h1 className="display-lg mt-6 max-w-4xl">
            Three engagements
            <br />
            we can talk about.
          </h1>
          <p className="lede mt-8 max-w-3xl">
            Most of our work runs under NDA. The case studies below are
            anonymized but otherwise faithful — the metrics are real, the
            problems are exactly as ugly as we describe them.
          </p>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="container-x py-16 md:py-24">
          {cases.map((c) => (
            <CaseStudyCard key={c.id} study={c} />
          ))}
          <div className="border-t hairline" />
        </div>
      </section>

      <CTASection
        eyebrow="References"
        heading="Happy to put you in touch with past clients on a case-by-case basis."
        body="Reach out and we'll arrange an introduction once we understand what you're trying to evaluate."
      />
    </>
  );
}
