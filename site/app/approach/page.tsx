import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CTASection } from "@/components/CTASection";
import { OntologyMark } from "@/components/OntologyMark";
import { phases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "A four-phase methodology for building knowledge maps and ontologies that survive contact with real data.",
};

export default function ApproachPage() {
  return (
    <>
      <section className="border-b hairline">
        <div className="container-x pt-20 pb-20 md:pt-32 md:pb-24">
          <SectionEyebrow label="Approach" />
          <h1 className="display-lg mt-6 max-w-4xl">
            Four phases.
            <br />
            <em className="not-italic text-[color:var(--color-accent)]">
              Ten weeks, give or take.
            </em>
          </h1>
          <p className="lede mt-8 max-w-3xl">
            We have run this loop enough times to know which phases earn their
            keep and which ones can be compressed. The shape below is our
            default; we adapt it to the specifics of your data and your team.
          </p>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="container-x py-16 md:py-24">
          {phases.map((phase, i) => (
            <article
              key={phase.number}
              className="border-t hairline pt-10 pb-12 grid md:grid-cols-12 gap-6 md:gap-10"
            >
              <div className="md:col-span-3">
                <div className="display" style={{ fontSize: "3rem" }}>
                  {phase.number}
                </div>
                <div className="mono mt-2">{phase.duration}</div>
              </div>
              <div className="md:col-span-6">
                <h2 className="display-sm">{phase.name}</h2>
                <p className="body mt-5 max-w-2xl">{phase.description}</p>
              </div>
              <div className="md:col-span-3">
                <div className="eyebrow mb-3">Artifacts</div>
                <ul className="space-y-2">
                  {phase.artifacts.map((a) => (
                    <li key={a} className="body text-[0.95rem] flex gap-2">
                      <span
                        aria-hidden
                        className="mono text-[color:var(--color-accent)] mt-1"
                      >
                        ›
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                {i < phases.length - 1 ? (
                  <div className="mt-8 flex items-center gap-3 opacity-60">
                    <OntologyMark size={18} />
                    <span className="mono">refined into</span>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
          <div className="border-t hairline" />
        </div>
      </section>

      <section className="border-b hairline bg-[color:var(--color-paper-2)]">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionEyebrow number="·" label="What you can expect" />
          </div>
          <div className="md:col-span-8">
            <ul className="grid gap-y-8 md:grid-cols-2 md:gap-x-12">
              <li className="border-t hairline pt-5">
                <h3
                  className="display-sm"
                  style={{ fontSize: "1.25rem" }}
                >
                  Senior, end-to-end.
                </h3>
                <p className="body-muted mt-3">
                  No juniors on the engagement. The people in the kickoff are
                  the people doing the work.
                </p>
              </li>
              <li className="border-t hairline pt-5">
                <h3
                  className="display-sm"
                  style={{ fontSize: "1.25rem" }}
                >
                  Weekly written updates.
                </h3>
                <p className="body-muted mt-3">
                  A short memo every Friday — what we learned, what's open,
                  what's next. No status theatre.
                </p>
              </li>
              <li className="border-t hairline pt-5">
                <h3
                  className="display-sm"
                  style={{ fontSize: "1.25rem" }}
                >
                  Working sessions, not slide decks.
                </h3>
                <p className="body-muted mt-3">
                  We co-edit the ontology with your domain experts. The
                  artifact is the meeting.
                </p>
              </li>
              <li className="border-t hairline pt-5">
                <h3
                  className="display-sm"
                  style={{ fontSize: "1.25rem" }}
                >
                  Hand-off you can live with.
                </h3>
                <p className="body-muted mt-3">
                  Serializations, governance docs, and a refresh cadence so
                  the work outlives the engagement.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        heading="A 30-minute call to see whether this shape fits your problem."
      />
    </>
  );
}
