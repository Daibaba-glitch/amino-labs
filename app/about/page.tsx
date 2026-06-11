import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Amino Labs",
  description: "Every batch tested by Janoshik Analytical. 99.2% average HPLC purity. 100% of batches COA-tested. Zero hidden results.",
}
import { ShieldCheck, FlaskConical, Microscope, Award, Users, Target, FileText, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const VALUES = [
  {
    icon: Microscope,
    title: "Third-party verified",
    desc: "Every batch is tested by Janoshik Analytical — an independent ISO-accredited lab with no financial interest in the outcome.",
  },
  {
    icon: ShieldCheck,
    title: "Full transparency",
    desc: "Every COA is publicly searchable on Janoshik's portal. We don't hide results — good or bad.",
  },
  {
    icon: FlaskConical,
    title: "Research-grade only",
    desc: "Our compounds are produced under GMP conditions and sold exclusively for laboratory and research use.",
  },
  {
    icon: Award,
    title: "Traceable standards",
    desc: "All reference standards are USP-traceable. Every batch ships with a full chain of custody.",
  },
  {
    icon: Users,
    title: "Built for researchers",
    desc: "We work directly with independent researchers, universities, and analytical labs who demand verified purity.",
  },
  {
    icon: Target,
    title: "Precision compounds",
    desc: "Short-chain amino acids formulated to exact specifications. Measurable results, every time.",
  },
]

const COA_RESULTS = [
  { label: "Identity (NMR)", value: "Confirmed" },
  { label: "Purity (HPLC)", value: "99.4%" },
  { label: "Heavy metals", value: "< 0.5 ppm" },
  { label: "Microbial", value: "Pass" },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                About Amino Labs
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Precision compounds.<br />
                <span className="text-primary">Measurable results.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Amino Labs was founded on one principle: researchers deserve to know exactly
                what is in every vial. We supply short-chain amino acid and peptide research
                compounds backed by independent, ISO-accredited third-party testing — no
                exceptions, no shortcuts.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every batch we ship is tested by Janoshik Analytical and the results are
                published publicly. You don't have to take our word for it — you can verify
                every number yourself before you open the vial.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-secondary/20">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
              {[
                { num: "99.2%", label: "Avg. HPLC purity" },
                { num: "100%", label: "Batches COA-tested" },
                { num: "3", label: "Accredited labs" },
                { num: "0", label: "Hidden results" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1 bg-background px-6 py-8 text-center">
                  <span className="font-mono text-3xl font-semibold text-primary">{s.num}</span>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Our values
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              What we stand for
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((v) => (
                <div key={v.title} className="flex flex-col gap-4 rounded-xl border border-border bg-secondary/20 p-6 transition-colors hover:border-primary/30">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-secondary">
                    <v.icon className="size-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-medium">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Janoshik testing partner */}
        <section className="border-b border-border bg-secondary/20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                Testing partner
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Independently verified by Janoshik Analytical
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Janoshik Analytical is a Prague-based independent laboratory with over a decade
                of peptide and amino acid testing history. They run HPLC with LC-MS/MS and
                publish all results to a publicly searchable database — any researcher can
                verify a COA using the batch ID without involving us.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We chose Janoshik because their results cannot be manipulated by us.
                They test the compound, they publish the result. That's it.
              </p>
              <a
                href="https://public.janoshik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Verify our results on Janoshik →
              </a>
            </div>

            {/* Sample COA card */}
            <div className="overflow-hidden rounded-xl border border-border">
              <div className="flex items-center justify-between border-b border-border bg-secondary px-5 py-3">
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Certificate of Analysis
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">AL-2418</span>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-px bg-border">
                {COA_RESULTS.map((r) => (
                  <div key={r.label} className="contents">
                    <div className="bg-background px-5 py-4 text-sm text-muted-foreground">
                      {r.label}
                    </div>
                    <div className="flex items-center justify-end gap-2 bg-background px-5 py-4 text-sm font-medium">
                      <Check className="size-4 text-primary" strokeWidth={2.5} />
                      {r.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-border bg-secondary/50 px-5 py-3">
                <ShieldCheck className="size-4 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">
                  Independently verified by{" "}
                  <a
                    href="https://janoshik.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Janoshik Analytical
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-12">
            <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
              All products sold by Amino Labs are strictly for laboratory and in-vitro research
              purposes only. Not for human or veterinary use, consumption, or administration.
              Not a drug, dietary supplement, or medical device. For research use only.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
