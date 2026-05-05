import Link from "next/link";
import { brand, footerNav } from "@/lib/nav";
import { OntologyMark } from "./OntologyMark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t hairline mt-24 bg-[color:var(--color-paper-2)]">
      <div className="container-x py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <OntologyMark size={28} />
            <span className="display" style={{ fontSize: "1.4rem" }}>
              {brand.name}
            </span>
          </div>
          <p className="lede mt-6 max-w-md">{brand.tagline}</p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-4">Pages</div>
          <ul className="space-y-2.5">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="body link-underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow mb-4">Studio</div>
          <ul className="space-y-2.5 body">
            <li>
              <a
                href={`mailto:${brand.email}`}
                className="link-underline"
              >
                {brand.email}
              </a>
            </li>
            <li className="body-muted">{brand.location}</li>
            <li className="body-muted">Established {brand.established}</li>
          </ul>
        </div>
      </div>

      <div className="border-t hairline">
        <div
          className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
          style={{
            paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
          }}
        >
          <span className="mono">
            © {year} {brand.name} Studio LLC
          </span>
          <span className="mono">
            Hypernym <span aria-hidden>›</span> the category that subsumes
            others
          </span>
        </div>
      </div>
    </footer>
  );
}
