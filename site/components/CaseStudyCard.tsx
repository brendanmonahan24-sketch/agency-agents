import type { CaseStudy } from "@/lib/content";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="border-t hairline pt-10 pb-12">
      <div className="grid md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-3">
          <div className="mono text-[color:var(--color-ink)]">
            {study.number}
          </div>
          <div className="mt-6 eyebrow">Sector</div>
          <p className="body mt-1.5">{study.sector}</p>
          <div className="mt-5 eyebrow">Engagement</div>
          <p className="body mt-1.5">{study.engagement}</p>
        </div>

        <div className="md:col-span-6">
          <h3 className="display-sm">{study.client}</h3>
          <div className="mt-6 eyebrow">Problem</div>
          <p className="body mt-2">{study.problem}</p>
          <div className="mt-5 eyebrow">Approach</div>
          <p className="body mt-2">{study.approach}</p>
          <div className="mt-5 eyebrow">Outcome</div>
          <p className="body mt-2">{study.outcome}</p>
        </div>

        <div className="md:col-span-3">
          <div className="border hairline p-6 bg-[color:var(--color-paper-2)]">
            <div className="display"
              style={{
                fontSize: "2.4rem",
                color: "var(--color-accent)",
                lineHeight: 1,
              }}
            >
              {study.metric.value}
            </div>
            <div className="mono mt-3">{study.metric.label}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
