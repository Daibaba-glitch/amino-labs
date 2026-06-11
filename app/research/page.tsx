import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, BookOpen, Clock } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ARTICLES } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Research Notes & Guides",
  description:
    "In-depth guides on peptide research: reading a Certificate of Analysis, HPLC purity testing, reconstitution and storage, and third-party lab verification.",
  keywords: [
    "peptide research guides",
    "certificate of analysis guide",
    "HPLC testing explained",
    "peptide reconstitution",
    "research compound guides",
  ],
  alternates: {
    canonical: "https://amino-labs-omega.vercel.app/research",
  },
}

export default function ResearchHub() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Research notes
            </span>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Guidance from the bench
            </h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Practical, in-depth references for researchers working with peptides and
              amino acid compounds. Written for the lab, not for marketing.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/research/${article.slug}`}
                className="group flex flex-col gap-4 rounded-xl border border-border bg-secondary/20 p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-primary">
                    <BookOpen className="size-3.5" />
                    {article.category}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h2 className="text-lg font-medium leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="size-3.5" />
                  {article.readTime}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
