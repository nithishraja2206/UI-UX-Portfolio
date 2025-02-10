import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "nithish.design",
  description: "Digital Experience Designer",
  generator: "Next.js",
  applicationName: "Nithish.design",
  keywords: [
    "UI/UX",
    "Graphic designing",
    "product designer",
    "frontend",
    "Visual Designer",
    "UX Designer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Nithish Raja - Digital Experience Designer",
    description:
      "Portfolio of Nithish Raja - Specializing in UI/UX Design, Web Design, and SaaS Product Development.",
    url: "https://nithish.design/",
    siteName: "nithish.design",
    images: [
      {
        url: "", // Replace with a valid URL
        width: 1200,
        height: 630,
        alt: "Nithish Raja",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithish Raja",
    description:
      "Pixels, Passion & Precision—Since 2018. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
    creator: "",
    creatorId: "",
    images: [""],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Syne & Instrument Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]">
        {children}
      </body>
    </html>
  );
}
