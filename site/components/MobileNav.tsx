"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, brand } from "@/lib/nav";
import { OntologyMark } from "./OntologyMark";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-[color:var(--color-ink)]"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
        >
          {open ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="19" y2="7" />
              <line x1="3" y1="15" x2="19" y2="15" />
            </>
          )}
        </svg>
      </button>

      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-[color:var(--color-ink)]/30"
          tabIndex={open ? 0 : -1}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-[color:var(--color-paper)] border-l hairline flex flex-col transition-transform duration-200 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            paddingTop: "calc(env(safe-area-inset-top, 0px) + 1rem)",
            paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1.5rem)",
            paddingRight: "calc(env(safe-area-inset-right, 0px) + 1.5rem)",
            paddingLeft: "1.5rem",
          }}
        >
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-2.5">
              <OntologyMark size={22} />
              <span
                className="display"
                style={{ fontSize: "1.2rem", letterSpacing: "-0.01em" }}
              >
                {brand.name}
              </span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-11 h-11 -mr-2"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="square"
                aria-hidden="true"
              >
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="mt-10 flex flex-col">
            {primaryNav.map((link, i) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between border-t hairline py-5 ${
                    i === primaryNav.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span
                    className="display"
                    style={{
                      fontSize: "1.6rem",
                      letterSpacing: "-0.01em",
                      color: active
                        ? "var(--color-accent)"
                        : "var(--color-ink)",
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="mono text-[color:var(--color-ink-muted)]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-10">
            <Link href="/contact" className="btn-primary w-full justify-center">
              Start a project
            </Link>
            <a
              href={`mailto:${brand.email}`}
              className="mono mt-5 inline-block link-underline"
            >
              {brand.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
