"use client"

import Image from "next/image"
import { useState } from "react"
import { Check, Download, ExternalLink, FileText, Search, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const RESULTS = [
  { label: "Identity (NMR)", value: "Confirmed", pass: true },
  { label: "Purity (HPLC)", value: "99.4%", pass: true },
  { label: "Heavy metals", value: "< 0.5 ppm", pass: true },
  { label: "Microbial", value: "Pass", pass: true },
]

export function CoaSection() {
  const [batchInput, setBatchInput] = useState("")

  function handleLookup() {
    const query = batchInput.trim()
    if (!query) return
    // Opens Janoshik public portal with the batch number pre-filled
    const url = `https://public.janoshik.com/?search=${encodeURIComponent(query)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleLookup()
  }

  return (
    <section id="coa" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
        {/* COA card */}
        <div className="order-2 lg:order-1">
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
            <div className="grid gap-px bg-border">
              <div className="grid grid-cols-[1fr_auto] gap-px bg-border">
                {RESULTS.map((r) => (
                  <div key={r.label} className="contents">
                    <div className="bg-background px-5 py-4 text-sm text-muted-foreground">
                      {r.label}
                    </div>
                    <div className="flex items-center justify-end gap-2 bg-background px-5 py-4 text-sm font-medium">
                      {r.pass && <Check className="size-4 text-primary" strokeWidth={2.5} />}
                      {r.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[16/9] border-t border-border bg-secondary">
              <Image
                src="/blog-1.png"
                alt="Lab testing equipment"
                fill
                className="object-cover"
              />
            </div>
            {/* Janoshik verified badge */}
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

        {/* Right side */}
        <div className="order-1 flex flex-col items-start gap-6 lg:order-2">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Verification
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Every batch is testable before you ever open it.
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Enter the batch number printed on your vial to pull the full
            Certificate of Analysis directly from{" "}
            <a
              href="https://public.janoshik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Janoshik's public database
            </a>
            {" "}— identity, purity, heavy metals, and microbial screening,
            all performed by independent accredited laboratories.
          </p>

          {/* Batch lookup */}
          <div className="w-full max-w-md rounded-lg border border-border bg-card p-2">
            <div className="flex items-center gap-2 rounded-md bg-secondary px-3">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter batch number (e.g. AL-2418)"
                value={batchInput}
                onChange={(e) => setBatchInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                aria-label="Batch number"
              />
              <Button size="sm" onClick={handleLookup} disabled={!batchInput.trim()}>
                Look up
              </Button>
            </div>
          </div>

          {/* Info note */}
          <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <ExternalLink className="mt-0.5 size-3.5 shrink-0 text-primary" />
            Lookup opens directly on Janoshik's public verification portal —
            an independent third-party lab with no affiliation to Amino Labs.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <a href="https://public.janoshik.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" />
                Browse all our results on Janoshik
              </a>
            </Button>
            <Button variant="outline">
              <Download className="size-4" />
              Download sample COA (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
