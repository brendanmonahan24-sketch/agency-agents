import Link from "next/link";
import { primaryNav } from "@/lib/nav";
import { OntologyWordmark } from "./OntologyMark";
import { MobileNav } from "./MobileNav";

export function Nav() {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--color-paper)]/85 border-b hairline"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="container-x flex items-center justify-between h-16">
        <Link
          href="/"
          className="shrink-0 inline-flex items-center h-11"
          aria-label="Hypernym home"
        >
          <OntologyWordmark />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mono text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden md:inline-flex btn-primary">
          Start a project
        </Link>

        <MobileNav />
      </div>
    </header>
  );
}
