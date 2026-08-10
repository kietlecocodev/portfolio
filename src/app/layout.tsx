import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
});

const siteUrl = "https://www.5mincoffee.io.vn";
const siteName = "5 Phút Cà Phê";
const description =
  "Photo and video content about coffee, brewing, and drinks. Portfolio for brand collaborations.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Coffee & Drink Content`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "5 Phút Cà Phê",
    "coffee content creator",
    "coffee videography",
    "drink photography",
    "brewing videos",
    "Vietnamese coffee content",
    "F&B brand collaboration",
  ],
  authors: [{ name: siteName }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} | Coffee & Drink Content`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Coffee & Drink Content`,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  description,
  sameAs: [
    "https://www.instagram.com/5phutcaphe",
    "https://www.tiktok.com/@5phutcaphe",
  ],
  email: "5mincoffeee@gmail.com",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${beVietnamPro.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
