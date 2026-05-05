import Link from "next/link";
import { OntologyMark } from "./OntologyMark";

type Props = {
  eyebrow?: string;
  heading: string;
  body?: string;
};

export function CTASection({
  eyebrow = "Engagements",
  heading,
  body,
}: Props) {
  return (
    <section className="border-t hairline">
      <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-1">
          <OntologyMark size={36} />
        </div>
        <div className="md:col-span-7">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="display-md mt-5">{heading}</h2>
          {body ? <p className="lede mt-6 max-w-xl">{body}</p> : null}
        </div>
        <div className="md:col-span-4 flex md:justify-end items-end">
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Start a conversation
            </Link>
            <Link href="/work" className="btn-secondary">
              Selected work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
