import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CTASection } from "@/components/CTASection";
import { services, principles, cases } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b hairline">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <SectionEyebrow number="01" label="Services" />
              <h2 className="display-md mt-6">
                Five lines of work,
                <br />
                one underlying craft.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="lede" style={{ fontStyle: "normal" }}>
                We design the categories your data, your evals, and your
                models all have to agree on. Engagements run six to twelve
                weeks; teams stay small.
              </p>
            </div>
          </div>

          <div className="mt-16">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} variant="compact" />
            ))}
            <div className="border-t hairline" />
          </div>

          <div className="mt-12">
            <Link href="/services" className="btn-secondary">
              All services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[color:var(--color-paper-2)]">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <SectionEyebrow number="02" label="Principles" />
              <h2 className="display-md mt-6">
                What we believe
                <br />
                about this work.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ol className="grid gap-y-10 md:grid-cols-2 md:gap-x-12">
                {principles.map((p) => (
                  <li key={p.number} className="border-t hairline pt-6">
                    <div className="mono">{p.number}</div>
                    <h3
                      className="display-sm mt-3"
                      style={{ fontSize: "1.4rem" }}
                    >
                      {p.title}
                    </h3>
                    <p className="body-muted mt-3">{p.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <SectionEyebrow number="03" label="Selected work" />
              <h2 className="display-md mt-6">
                A few engagements
                <br />
                we can talk about.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-8">
                {cases.map((c) => (
                  <li
                    key={c.id}
                    className="border-t hairline pt-6 grid grid-cols-12 gap-6"
                  >
                    <div className="col-span-2 mono">{c.number}</div>
                    <div className="col-span-7">
                      <h3
                        className="display-sm"
                        style={{ fontSize: "1.3rem" }}
                      >
                        {c.client}
                      </h3>
                      <p className="body-muted mt-2">{c.sector}</p>
                    </div>
                    <div className="col-span-3 text-right">
                      <span
                        className="display"
                        style={{
                          fontSize: "1.5rem",
                          color: "var(--color-accent)",
                        }}
                      >
                        {c.metric.value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/work" className="btn-secondary">
                  Read the case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="If your model knows everything in general, but not enough in particular — we should talk."
        body="We take on a small number of engagements per quarter. Tell us what you're building."
      />
    </>
  );
}
