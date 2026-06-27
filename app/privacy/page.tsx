import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Amino Labs. How we collect, use, and protect your information.",
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Legal</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: June 2026</p>

          <div className="article-body mt-10">
            <h2>1. Information we collect</h2>
            <p>We collect information you provide directly to us, such as your name, email address, shipping address, and order details when you make an inquiry or place an order. We may also collect limited technical information automatically, such as your IP address, browser type, and pages visited, through standard web analytics.</p>

            <h2>2. How we use your information</h2>
            <p>We use the information we collect to process and fulfill your orders, respond to your inquiries, communicate with you about your orders, improve our website and services, and comply with legal obligations. We do not sell your personal information to third parties.</p>

            <h2>3. Information sharing</h2>
            <p>We may share your information with service providers who assist us in operating our business, such as shipping carriers and payment processors, only to the extent necessary to provide their services. We may also disclose information if required by law or to protect our legal rights.</p>

            <h2>4. Data security</h2>
            <p>We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>

            <h2>5. Discreet handling</h2>
            <p>We understand the privacy expectations of our customers. Orders are handled discreetly, and we take care to protect the confidentiality of your information throughout the order process.</p>

            <h2>6. Cookies and analytics</h2>
            <p>Our website may use cookies and similar technologies to improve your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.</p>

            <h2>7. Your rights</h2>
            <p>Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information. To exercise these rights, contact us at aminoresearchlab@gmail.com.</p>

            <h2>8. Data retention</h2>
            <p>We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>

            <h2>9. Changes to this policy</h2>
            <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

            <h2>10. Contact</h2>
            <p>For privacy-related questions, contact us at aminoresearchlab@gmail.com.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
