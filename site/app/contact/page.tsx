import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { ContactForm } from "@/components/ContactForm";
import { brand } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about the problem you're working on. We take on a small number of engagements per quarter.",
};

export default function ContactPage() {
  return (
    <section>
      <div className="container-x pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <SectionEyebrow label="Contact" />
            <h1 className="display-lg mt-6">
              Tell us about
              <br />
              the problem.
            </h1>
            <p className="lede mt-8 max-w-md">
              A paragraph or two is plenty. We read every message and reply
              within a couple of business days — usually with questions.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <div className="eyebrow mb-2">Direct</div>
                <a
                  href={`mailto:${brand.email}`}
                  className="display-sm link-underline"
                  style={{ fontSize: "1.4rem" }}
                >
                  {brand.email}
                </a>
              </div>
              <div>
                <div className="eyebrow mb-2">Studio</div>
                <p className="body">{brand.location}</p>
              </div>
              <div>
                <div className="eyebrow mb-2">Cadence</div>
                <p className="body-muted max-w-sm">
                  We take on a small number of engagements per quarter.
                  Inquiries currently being scheduled into the next quarter.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="border hairline p-8 md:p-10 bg-[color:var(--color-paper-2)]">
              <SectionEyebrow label="Brief" />
              <h2 className="display-sm mt-5">A short brief.</h2>
              <p className="body-muted mt-3 max-w-md">
                The submit button opens your mail client with the message
                pre-filled — no third-party form provider, no tracking.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
