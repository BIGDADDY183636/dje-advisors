"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
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
        {/* Logo */}
        <Link href="/" aria-label="DJE Advisors home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="DJE Advisors"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`relative font-sans text-[0.82rem] transition-colors duration-150 pb-1 ${
                active(href) ? "text-ink" : "text-ink/45 hover:text-ink"
              }`}
            >
              {label}
              {active(href) && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-cyan" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
