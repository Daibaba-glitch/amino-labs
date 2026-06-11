import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://amino-labs-omega.vercel.app"),
  title: {
    default: "Amino Labs | Verified Peptide & Amino Acid Research Compounds",
    template: "%s | Amino Labs",
  },
  description:
    "Amino Labs supplies independently tested short-chain amino acid and peptide research compounds. Every batch verified by Janoshik Analytical with a public Certificate of Analysis.",
  keywords: [
    "peptide research compounds",
    "amino acid research",
    "BPC-157",
    "Semaglutide research",
    "Tirzepatide",
    "certificate of analysis",
    "Janoshik verified",
    "research peptides",
    "HPLC verified peptides",
    "short chain amino acids",
  ],
  authors: [{ name: "Amino Labs", url: "https://amino-labs-omega.vercel.app" }],
  creator: "Amino Labs",
  publisher: "Amino Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amino-labs-omega.vercel.app",
    siteName: "Amino Labs",
    title: "Amino Labs | Verified Peptide & Amino Acid Research Compounds",
    description:
      "Every batch independently tested by Janoshik Analytical. Public Certificates of Analysis. Precision compounds for serious researchers.",
    images: [
      {
        url: "/amino-labs-logo-combined.png",
        width: 560,
        height: 150,
        alt: "Amino Labs — Precision Compounds. Measurable Results.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amino Labs | Verified Peptide & Amino Acid Research Compounds",
    description:
      "Independently tested research compounds with public Certificates of Analysis. Verified by Janoshik Analytical.",
    images: ["/amino-labs-logo-combined.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
