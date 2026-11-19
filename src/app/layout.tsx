import type { Metadata } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Abdul Qadir — AI Engineer & Researcher",
  description:
    "AI developer and PhD researcher in computer science and mathematics — deep learning, agentic AI, and security in robotics. Based in Lleida, Spain. Available across Spain, the EU, and Türkiye.",
  keywords: [
    "Abdul Qadir",
    "AI engineer",
    "deep learning",
    "agentic AI",
    "robotics security",
    "Embedica",
    "URV",
    "Lleida",
  ],
  authors: [{ name: "Abdul Qadir" }],
  openGraph: {
    title: "Abdul Qadir — AI Engineer & Researcher",
    description:
      "Deep learning, agentic AI, and security in robotics. AI Engineer at Embedica. PhD at Universitat Rovira i Virgili.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="site-shell min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
