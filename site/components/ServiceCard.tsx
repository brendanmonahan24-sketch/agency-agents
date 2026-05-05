import Link from "next/link";
import type { Service } from "@/lib/content";

type Props = {
  service: Service;
  variant?: "compact" | "full";
};

export function ServiceCard({ service, variant = "compact" }: Props) {
  return (
    <article className="group border-t hairline pt-8 pb-10">
      <div className="grid md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-2">
          <span className="mono text-[color:var(--color-ink)]">
            {service.number}
          </span>
        </div>
        <div className={variant === "full" ? "md:col-span-7" : "md:col-span-6"}>
          <h3 className="display-sm">{service.title}</h3>
          <p className="lede mt-4" style={{ fontStyle: "normal" }}>
            {service.summary}
          </p>
          {variant === "full" ? (
            <p className="body-muted mt-5 max-w-2xl">{service.description}</p>
          ) : null}
        </div>
        <div className={variant === "full" ? "md:col-span-3" : "md:col-span-4"}>
          {variant === "full" ? (
            <>
              <div className="eyebrow mb-3">Deliverables</div>
              <ul className="space-y-2">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="body text-[0.95rem] leading-relaxed flex gap-2"
                  >
                    <span
                      aria-hidden
                      className="mono text-[color:var(--color-accent)] mt-1"
                    >
                      ›
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              href={`/services#${service.id}`}
              className="mono link-underline inline-block mt-2"
            >
              Read more →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
