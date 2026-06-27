"use client"

import { useState } from "react"
import { ArrowUpRight, FlaskConical, BookOpen, Microscope } from "lucide-react"

const CATEGORIES = ["All", "Peptides", "Amino Acids", "Research", "Analytics"]

const SOURCES = [
  { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov" },
  { name: "Nature", url: "https://www.nature.com/subjects/peptides" },
  { name: "ScienceDaily", url: "https://www.sciencedaily.com" },
]

const POSTS = [
  {
    id: 1,
    category: "Peptides",
    title: "Membrane-permeable cyclic peptides identified through large synthetic library screening",
    summary: "Researchers demonstrate that cell-active cyclic peptides can be identified by screening sufficiently large and diverse libraries of small synthetic peptides, opening new pathways for intracellular delivery.",
    source: "Nature Chemical Biology",
    sourceUrl: "https://www.nature.com/subjects/peptides",
    date: "May 14, 2026",
    read: "4 min read",
  },
  {
    id: 2,
    category: "Research",
    title: "Consortium completes first large-scale identification of human microproteins",
    summary: "A landmark 2026 study identifies thousands of previously unknown microproteins, potentially expanding the known human proteome and opening new research frontiers for short-chain amino acid compounds.",
    source: "Nature",
    sourceUrl: "https://www.nature.com",
    date: "May 6, 2026",
    read: "5 min read",
  },
  {
    id: 3,
    category: "Amino Acids",
    title: "Short-chain amino acid compounds show promise in neurological injury repair",
    summary: "A four-amino-acid peptide demonstrated significant reduction in inflammation and cell death in animal models of brain injury, with no observed toxicity, pointing to new research directions for short-chain compounds.",
    source: "ScienceDaily",
    sourceUrl: "https://www.sciencedaily.com",
    date: "Jun 2, 2026",
    read: "3 min read",
  },
  {
    id: 4,
    category: "Analytics",
    title: "Advances in HPLC-MS methods improve peptide impurity profiling",
    summary: "New coupled liquid chromatography and mass spectrometry workflows allow researchers to detect and characterize trace impurities in synthetic peptides with greater sensitivity than previous methods.",
    source: "Journal of Chromatography",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov",
    date: "Apr 28, 2026",
    read: "6 min read",
  },
  {
    id: 5,
    category: "Peptides",
    title: "Stability of lyophilized peptides under varied cold-chain conditions",
    summary: "A comparative study examines how reconstituted and lyophilized research peptides degrade under different storage temperatures, informing best practices for laboratory handling and shelf life.",
    source: "Peptide Science",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov",
    date: "Apr 15, 2026",
    read: "5 min read",
  },
  {
    id: 6,
    category: "Research",
    title: "Third-party verification practices in the research compound supply chain",
    summary: "A review of independent laboratory testing standards highlights how public Certificate of Analysis databases improve transparency and trust in the research compound market.",
    source: "Analytical Standards Review",
    sourceUrl: "https://www.nature.com",
    date: "Apr 2, 2026",
    read: "4 min read",
  },
]

function CategoryIcon({ cat }: { cat: string }) {
  if (cat === "Peptides") return <FlaskConical className="size-3.5" />
  if (cat === "Amino Acids") return <Microscope className="size-3.5" />
  return <BookOpen className="size-3.5" />
}

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? POSTS
    : POSTS.filter((p) => p.category === activeCategory)

  return (
    <section id="research" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Research notes
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Latest from the field
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Curated peptide & amino acid research from leading journals.
            </p>
          </div>
          <a
            href="/research"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary"
          >
            View all research notes
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all border ${
                cat === activeCategory
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {filtered.map((post) => (
            <article key={post.id} className="group flex flex-col gap-3 rounded-xl border border-border bg-secondary/20 p-5 transition-colors hover:border-primary/30">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-primary">
                <CategoryIcon cat={post.category} />
                {post.category}
              </span>
              <h3 className="text-pretty text-base font-medium leading-snug">{post.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground flex-1">{post.summary}</p>
              <div className="flex items-center justify-between border-t border-border pt-3 mt-1">
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-xs text-muted-foreground">{post.source}</span>
                  <span className="font-mono text-xs text-muted-foreground">{post.date} · {post.read}</span>
                </div>
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  Read source
                  <ArrowUpRight className="size-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4 flex-wrap">
          <span className="font-mono text-xs text-muted-foreground">Sources:</span>
          {SOURCES.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
              {s.name}
              <ArrowUpRight className="size-3" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
