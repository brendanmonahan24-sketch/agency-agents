import Link from "next/link";
import { OntologyMark } from "./OntologyMark";
import { SectionEyebrow } from "./SectionEyebrow";

export function Hero() {
  return (
    <section className="relative border-b hairline">
      <div className="container-x pt-20 pb-24 md:pt-32 md:pb-36 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-8">
          <SectionEyebrow number="00" label="Hypernym Studio · est. 2024" />
          <h1 className="display-lg mt-8">
            Knowledge maps and ontologies <br className="hidden md:block" />
            <em className="not-italic text-[color:var(--color-accent)]">
              for AI companies
            </em>{" "}
            whose models <br className="hidden md:block" />
            need to know what they know.
          </h1>
          <p className="lede mt-10 max-w-2xl">
            We are a small studio of computational linguists and graph
            engineers. We build the structure underneath your data — the
            taxonomies, ontologies, and evals that decide whether your model
            is precise or merely plausible.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Start a conversation
            </Link>
            <Link href="/approach" className="btn-secondary">
              See how we work
            </Link>
          </div>
        </div>

        <div className="md:col-span-4 flex md:justify-end items-start">
          <div className="border hairline p-6 md:p-8 w-full max-w-sm bg-[color:var(--color-paper-2)]">
            <SectionEyebrow label="Sample artifact" />
            <pre className="mono mt-4 text-[0.78rem] leading-6 overflow-x-auto whitespace-pre">
{`Concept ⟶ Document
├── Statute
│   ├── Federal
│   └── State
├── Contract
│   ├── Indemnity-bearing
│   └── Hold-harmless
└── Memorandum
    ├── Internal
    └── Client-facing`}
            </pre>
            <div className="mt-5 pt-4 border-t hairline flex items-center gap-3">
              <OntologyMark size={18} />
              <span className="mono">excerpt · legal scribe v1.4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
