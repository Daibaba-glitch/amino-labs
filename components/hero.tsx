import Image from "next/image"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <ShieldCheck className="size-3.5 text-primary" />
            For laboratory research use only
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Reference standards you can verify, batch by batch.
          </h1>
          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Amino Lab supplies short-chain amino acid research compounds backed
            by independent, ISO-accredited third-party testing. Every batch
            ships with a public Certificate of Analysis — no exceptions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#catalog">
                Browse catalog
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#coa">Verify a batch</a>
            </Button>
          </div>
          <dl className="mt-4 grid w-full max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            <div>
              <dt className="font-mono text-2xl font-semibold tracking-tight">99.2%</dt>
              <dd className="text-xs text-muted-foreground">Avg. purity (HPLC)</dd>
            </div>
            <div>
              <dt className="font-mono text-2xl font-semibold tracking-tight">100%</dt>
              <dd className="text-xs text-muted-foreground">Batches COA-tested</dd>
            </div>
            <div>
              <dt className="font-mono text-2xl font-semibold tracking-tight">3</dt>
              <dd className="text-xs text-muted-foreground">Accredited labs</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-secondary md:aspect-square">
            <Image
              src="/hero-vials.png"
              alt="Laboratory glass vials with clear liquid arranged on a white surface"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-border bg-background/90 p-4 backdrop-blur md:left-auto md:right-4 md:w-64">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Batch AL-2418
            </p>
            <p className="mt-1 text-sm font-medium">HPLC purity verified — 99.4%</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Tested 04 Jun 2026 · Janoshik Analytical
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
