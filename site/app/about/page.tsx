import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CTASection } from "@/components/CTASection";
import { OntologyMark } from "@/components/OntologyMark";
import { founders, principles } from "@/lib/content";
import { brand } from "@/lib/nav";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hypernym is a small studio of computational linguists and graph engineers, working with emerging AI companies on the structure underneath their data.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b hairline">
        <div className="container-x pt-20 pb-20 md:pt-32 md:pb-24">
          <SectionEyebrow label="About" />
          <h1 className="display-lg mt-6 max-w-4xl">
            A small studio
            <br />
            <em className="not-italic text-[color:var(--color-accent)]">
              for unfashionable work.
            </em>
          </h1>
          <p className="lede mt-8 max-w-3xl">
            Most AI companies have brilliant model engineers and a data layer
            held together by Slack threads. We exist to fix the second half
            of that sentence — quietly, in writing, and without proposing a
            platform.
          </p>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <SectionEyebrow number="·" label="Why we started" />
            </div>
            <div className="md:col-span-8 space-y-6 max-w-2xl">
              <p className="body">
                We met working on the same data quality crisis at two
                different companies, ten years apart. The pattern was the
                same: a useful model trained on a taxonomy nobody had
                maintained since the founding team's first whiteboard, and a
                product team unable to articulate why retrieval kept missing
                the obvious answer.
              </p>
              <p className="body">
                The fix in both cases wasn't a bigger model or a better vector
                store. It was a person who would sit with the domain experts,
                read the actual data, and write down the categories that the
                product had been operating on by accident. That work is the
                whole studio.
              </p>
              <p className="body">
                We are based in {brand.location.split(" · ")[0]} and{" "}
                {brand.location.split(" · ")[1]}, working remotely with our
                clients and on-site in their first and last weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[color:var(--color-paper-2)]">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <SectionEyebrow number="·" label="Partners" />
              <h2 className="display-md mt-6">The people on every project.</h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid md:grid-cols-2 gap-10">
                {founders.map((f) => (
                  <article
                    key={f.name}
                    className="border-t hairline pt-6"
                  >
                    <div className="flex items-center gap-3">
                      <OntologyMark size={20} />
                      <span className="mono">{f.role}</span>
                    </div>
                    <h3
                      className="display-sm mt-4"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {f.name}
                    </h3>
                    <p className="body-muted mt-4">{f.bio}</p>
                    <p className="mono mt-5">{f.prior}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <SectionEyebrow number="·" label="House principles" />
            </div>
            <div className="md:col-span-8">
              <ol className="grid gap-y-10">
                {principles.map((p) => (
                  <li key={p.number} className="border-t hairline pt-6">
                    <div className="grid md:grid-cols-12 gap-6">
                      <div className="md:col-span-2 mono">{p.number}</div>
                      <div className="md:col-span-10">
                        <h3
                          className="display-sm"
                          style={{ fontSize: "1.4rem" }}
                        >
                          {p.title}
                        </h3>
                        <p className="body-muted mt-3 max-w-2xl">{p.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Working with us"
        heading="If your data layer is held together by Slack threads, that's the conversation."
      />
    </>
  );
}
