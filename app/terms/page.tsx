import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Amino Labs research compounds. All products sold strictly for laboratory research use only.",
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Legal</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Terms of Service</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: June 2026</p>

          <div className="article-body mt-10">
            <h2>1. Research use only</h2>
            <p>All products sold by Amino Labs are intended strictly for in-vitro laboratory and research purposes only. By purchasing from Amino Labs, you affirm that you are a qualified researcher or institution and that all products will be used solely for legitimate research applications. Products are not for human or veterinary use, consumption, ingestion, or administration of any kind. Products are not drugs, dietary supplements, food, cosmetics, or medical devices.</p>

            <h2>2. Eligibility</h2>
            <p>You must be of legal age in your jurisdiction and legally permitted to purchase research compounds to place an order. By ordering, you represent that you have the legal authority and capacity to do so and that your use complies with all applicable local, state, national, and international laws and regulations.</p>

            <h2>3. No medical claims</h2>
            <p>Amino Labs makes no representations regarding any therapeutic, medical, or health-related use of its products. No statement on this website has been evaluated by any regulatory authority. Nothing on this site should be construed as medical advice or a recommendation to use any compound for any purpose other than legitimate laboratory research.</p>

            <h2>4. Product information</h2>
            <p>We strive for accuracy in all product descriptions, specifications, and Certificate of Analysis data. Purity figures and test results reflect independent third-party laboratory analysis of representative batches. While we make every effort to ensure accuracy, specifications are provided for reference and may vary between batches.</p>

            <h2>5. Orders and payment</h2>
            <p>All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion. Prices are subject to change without notice. Payment terms are specified at the time of order.</p>

            <h2>6. Limitation of liability</h2>
            <p>Amino Labs shall not be liable for any misuse of its products. The buyer assumes all responsibility and liability for the proper, lawful, and safe handling, storage, use, and disposal of all products purchased. To the maximum extent permitted by law, Amino Labs disclaims all liability for any direct, indirect, incidental, or consequential damages arising from the use or misuse of its products.</p>

            <h2>7. Compliance</h2>
            <p>The buyer is solely responsible for ensuring that the purchase, possession, and use of any product complies with all applicable laws and regulations in their jurisdiction. Amino Labs is not responsible for any legal consequences arising from a buyer's failure to comply with applicable laws.</p>

            <h2>8. Changes to terms</h2>
            <p>We reserve the right to update these terms at any time. Continued use of the website following any changes constitutes acceptance of the revised terms.</p>

            <h2>9. Contact</h2>
            <p>For questions regarding these terms, contact us at aminoresearchlab@gmail.com.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
