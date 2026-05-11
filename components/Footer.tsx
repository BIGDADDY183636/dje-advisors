import Link from "next/link";

const navLinks = [
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team",     href: "/team" },
  { label: "Contact",  href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-canvas/55 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p
              className="font-display font-medium text-canvas mb-3 leading-none"
              style={{ fontSize: "1.05rem" }}
            >
              DJE Advisors
            </p>
            <p className="font-sans text-[0.82rem] leading-relaxed">
              Independent tax, accounting, and advisory.
              <br />
              Chicago, IL.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-canvas/25 mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-sans text-[0.82rem] text-canvas/45 hover:text-canvas/70 transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-canvas/25 mb-4">
              Get in touch
            </p>
            <div className="font-sans text-[0.82rem] space-y-2">
              <p>Chicago, IL</p>
              <a
                href="mailto:hello@djeadvisors.com"
                className="block text-canvas/55 hover:text-canvas transition-colors duration-150"
              >
                hello@djeadvisors.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-canvas/[0.07] pt-7">
          <p className="font-sans text-[0.6rem] text-canvas/18 tracking-wide">
            © 2026 DJE Advisors &ensp;·&ensp; Chicago, IL
          </p>
        </div>
      </div>
    </footer>
  );
}
