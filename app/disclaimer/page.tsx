import type { Metadata } from "next"
import { AlertTriangle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Research Disclaimer",
  description: "Research use only disclaimer for Amino Labs. All compounds are for laboratory research purposes only and not for human consumption.",
}

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader />
      <main className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Legal</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Research Disclaimer</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: June 2026</p>

          {/* Prominent warning box */}
          <div className="mt-8 rounded-xl border border-primary/30 bg-primary/10 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h2 className="font-medium text-foreground" style={{ marginTop: 0 }}>For laboratory research use only</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground" style={{ marginBottom: 0 }}>
                  All products sold by Amino Labs are intended exclusively for in-vitro laboratory
                  and research purposes. They are NOT for human or veterinary use, consumption,
                  ingestion, injection, or administration of any kind.
                </p>
              </div>
            </div>
          </div>

          <div className="article-body mt-10">
            <h2>Not for human consumption</h2>
            <p>The products offered by Amino Labs are research chemicals and reference compounds intended solely for laboratory research conducted by qualified professionals. Under no circumstances are these products intended for human or animal consumption, ingestion, injection, or any form of bodily administration.</p>

            <h2>Not approved by regulatory authorities</h2>
            <p>None of the products sold by Amino Labs have been approved by any food, drug, or health regulatory authority for human or veterinary use. No statement made on this website has been evaluated by any such authority. These products are not drugs, supplements, food, or cosmetics.</p>

            <h2>No medical or health claims</h2>
            <p>Amino Labs makes no claims regarding the safety, efficacy, or suitability of any product for any therapeutic, medical, diagnostic, or health-related purpose. Any information provided on this website is for educational and reference purposes related to laboratory research only and must not be interpreted as medical advice.</p>

            <h2>Buyer responsibility</h2>
            <p>By purchasing from Amino Labs, the buyer acknowledges and agrees that they are a qualified researcher or institution acquiring these products for legitimate research purposes only. The buyer assumes full responsibility for the safe, lawful, and appropriate handling, storage, use, and disposal of all products in accordance with applicable laws, regulations, and good laboratory practices.</p>

            <h2>Legal compliance</h2>
            <p>The buyer is solely responsible for knowing and complying with all laws and regulations governing the purchase, possession, and use of research compounds in their jurisdiction. Regulations vary by location, and it is the buyer's responsibility to ensure their compliance. Amino Labs accepts no liability for any unlawful use or for any consequences arising from a buyer's failure to comply with applicable laws.</p>

            <h2>Assumption of risk</h2>
            <p>The buyer assumes all risks associated with the handling and use of research compounds. Amino Labs shall not be held liable for any injury, damage, or loss resulting from the misuse, mishandling, or improper use of any product.</p>

            <h2>Acknowledgment</h2>
            <p>By using this website and purchasing any product, you acknowledge that you have read, understood, and agreed to this disclaimer in its entirety.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
