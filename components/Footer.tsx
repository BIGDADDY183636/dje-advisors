import Link from "next/link";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p
              className="font-display font-medium text-white mb-3 leading-none"
              style={{ fontSize: "1.05rem", letterSpacing: "0.03em" }}
            >
              DJE ADVISORS
            </p>
            <p className="font-sans text-[0.82rem] text-white/50 leading-relaxed">
              Independent tax, accounting, and advisory.
              <br />
              Chicago &amp; Glenview, IL
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-white/25 mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-sans text-[0.82rem] text-white/45 hover:text-white/70 transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-white/25 mb-4">
              Get in touch
            </p>
            <div className="font-sans text-[0.82rem] space-y-2 text-white/50">
              <p>Chicago &amp; Glenview, IL</p>
              <Link
                href="/contact"
                className="block text-cyan hover:text-cyan/80 transition-colors duration-150"
              >
                Send us a message →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-sans text-[0.6rem] text-white/20 tracking-wide">
            © 2026 DJE Advisors &ensp;·&ensp; Chicago &amp; Glenview, IL
          </p>
          <p className="font-sans text-[0.6rem] text-white/15 tracking-wide">
            Concept build for JBAR Design Studio. Demo only.
          </p>
        </div>
      </div>
    </footer>
  );
}
