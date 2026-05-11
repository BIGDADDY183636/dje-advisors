"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team",     href: "/team" },
  { label: "Contact",  href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();

  function active(href: string) {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-canvas/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display font-medium text-navy leading-none"
          style={{ fontSize: "1.05rem", letterSpacing: "-0.01em" }}
        >
          DJE Advisors
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`relative font-sans text-[0.82rem] transition-colors duration-150 pb-1 ${
                active(href) ? "text-navy" : "text-navy/45 hover:text-navy"
              }`}
            >
              {label}
              {active(href) && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-gold" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-sans text-[0.78rem] font-medium bg-navy text-canvas px-5 py-2 rounded-sm hover:bg-navy-mid transition-colors duration-150 whitespace-nowrap"
          >
            Schedule a call
          </Link>
        </nav>

        {/* Mobile */}
        <Link
          href="/contact"
          className="md:hidden font-sans text-[0.76rem] font-medium bg-navy text-canvas px-4 py-2 rounded-sm"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
