import type { Metadata } from "next";
// Century Gothic Pro + Helvetica Neue are licensed/system fonts —
// no Google Fonts import needed. Font stacks are defined in globals.css.
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://djeadvisors.com"),
  title: {
    default: "DJE Advisors — Tax, Accounting & Advisory",
    template: "%s — DJE Advisors",
  },
  description:
    "An independent tax and accounting firm. Personalized guidance for business owners, families, and individuals — wherever you are.",
  openGraph: {
    siteName: "DJE Advisors",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
