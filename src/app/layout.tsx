import type { Metadata } from "next";
import "./globals.css";
import { config } from "@/data/config";

import Script from "next/script";
import SiteFrame from "@/components/site-frame";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: config.author,
    alternateName: config.displayName,
    url: config.site,
    jobTitle: "AI Engineer & Full Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Andhra Pradesh",
      addressCountry: "India",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "GMR Institute of Technology",
      },
      {
        "@type": "EducationalOrganization",
        name: "Government Polytechnic Anakapalle",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "LangChain",
      "LangGraph",
      "Full Stack Development",
      "Next.js",
      "React",
      "Python",
      "FastAPI",
    ],
    sameAs: [
      config.social.github,
      config.social.linkedin,
      config.social.leetcode,
      config.social.twitter,
    ],
  };

  return (
    <html
      lang="en"
      className="font-sans"
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect for Google Fonts & Spline runtime */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.UMAMI_DOMAIN && (
          <Script
            defer
            src={process.env.UMAMI_DOMAIN}
            data-website-id={process.env.UMAMI_SITE_ID}
          />
        )}
      </head>
      <body>
        <Providers>
          <SiteFrame>{children}</SiteFrame>
        </Providers>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
