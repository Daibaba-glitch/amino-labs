import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research Compound Catalog | Amino Labs",
  description: "Browse 30+ verified peptide and amino acid research compounds. Semaglutide, BPC-157, Tirzepatide and more. HPLC verified with public COA.",
}
"use client"

import { useState } from "react"
import { ShieldCheck, FlaskConical, Search, SlidersHorizontal, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const CATEGORIES = ["All", "Weight Management", "Recovery", "Growth Hormone", "Cognitive", "Longevity"]

const PRODUCTS = [
  // Weight Management
  { id: 1, name: "Semaglutide", spec: "5mg/vial", category: "Weight Management", price: 65, purity: "99.2%", badge: "Popular" },
  { id: 2, name: "Semaglutide", spec: "10mg/vial", category: "Weight Management", price: 100, purity: "99.1%", badge: null },
  { id: 3, name: "Tirzepatide", spec: "10mg/vial", category: "Weight Management", price: 90, purity: "99.4%", badge: "Popular" },
  { id: 4, name: "Tirzepatide", spec: "30mg/vial", category: "Weight Management", price: 180, purity: "99.3%", badge: null },
  { id: 5, name: "Retatrutide", spec: "10mg/vial", category: "Weight Management", price: 160, purity: "99.2%", badge: "New" },
  { id: 6, name: "Retatrutide", spec: "20mg/vial", category: "Weight Management", price: 260, purity: "99.1%", badge: null },
  { id: 7, name: "Cagrilintide", spec: "5mg/vial", category: "Weight Management", price: 130, purity: "99.0%", badge: "New" },
  { id: 8, name: "Mazdutide", spec: "10mg/vial", category: "Weight Management", price: 210, purity: "99.3%", badge: null },
  { id: 9, name: "AOD-9604", spec: "5mg/vial", category: "Weight Management", price: 110, purity: "99.5%", badge: null },
  // Recovery
  { id: 10, name: "BPC-157", spec: "10mg/vial", category: "Recovery", price: 100, purity: "99.4%", badge: "Popular" },
  { id: 11, name: "TB-500 (Thymosin Beta-4)", spec: "10mg/vial", category: "Recovery", price: 260, purity: "99.2%", badge: null },
  { id: 12, name: "BPC-157 + TB-4 Blend", spec: "5mg+5mg/vial", category: "Recovery", price: 260, purity: "99.1%", badge: "Blend" },
  { id: 13, name: "KPV", spec: "10mg/vial", category: "Recovery", price: 180, purity: "99.3%", badge: null },
  { id: 14, name: "LL-37", spec: "5mg/vial", category: "Recovery", price: 140, purity: "99.2%", badge: null },
  // Growth Hormone
  { id: 15, name: "HGH Fragment 176-191", spec: "5mg/vial", category: "Growth Hormone", price: 50, purity: "99.5%", badge: null },
  { id: 16, name: "CJC-1295 DAC", spec: "5mg/vial", category: "Growth Hormone", price: 65, purity: "99.3%", badge: null },
  { id: 17, name: "CJC-1295 No DAC", spec: "10mg/vial", category: "Growth Hormone", price: 65, purity: "99.4%", badge: null },
  { id: 18, name: "Ipamorelin", spec: "10mg/vial", category: "Growth Hormone", price: 65, purity: "99.2%", badge: "Popular" },
  { id: 19, name: "CJC-1295 + Ipamorelin Blend", spec: "5mg+5mg/vial", category: "Growth Hormone", price: 210, purity: "99.3%", badge: "Blend" },
  { id: 20, name: "Tesamorelin", spec: "10mg/vial", category: "Growth Hormone", price: 240, purity: "99.1%", badge: null },
  { id: 21, name: "GHRP-2", spec: "10mg/vial", category: "Growth Hormone", price: 50, purity: "99.4%", badge: null },
  { id: 22, name: "GHRP-6", spec: "10mg/vial", category: "Growth Hormone", price: 50, purity: "99.3%", badge: null },
  { id: 23, name: "IGF-1 LR3", spec: "1mg/vial", category: "Growth Hormone", price: 220, purity: "99.0%", badge: null },
  { id: 24, name: "Sermorelin", spec: "5mg/vial", category: "Growth Hormone", price: 180, purity: "99.2%", badge: null },
  // Cognitive
  { id: 25, name: "Semax", spec: "10mg/vial", category: "Cognitive", price: 50, purity: "99.4%", badge: null },
  { id: 26, name: "Selank", spec: "10mg/vial", category: "Cognitive", price: 50, purity: "99.3%", badge: null },
  { id: 27, name: "PT-141 (Bremelanotide)", spec: "10mg/vial", category: "Cognitive", price: 120, purity: "99.2%", badge: null },
  // Longevity
  { id: 28, name: "Epithalon", spec: "10mg/vial", category: "Longevity", price: 210, purity: "99.3%", badge: null },
  { id: 29, name: "NAD+", spec: "500mg/vial", category: "Longevity", price: 110, purity: "99.5%", badge: "Popular" },
  { id: 30, name: "GHK-Cu", spec: "50mg/vial", category: "Longevity", price: 65, purity: "99.4%", badge: null },
]

const BADGE_STYLES: Record<string, string> = {
  Popular: "bg-primary/20 text-primary border-primary/30",
  New: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Blend: "bg-blue-500/20 text-blue-400 border-blue-500/30",
}

const CATEGORY_COLORS: Record<string, string> = {
  "Weight Management": "text-purple-400",
  "Recovery": "text-emerald-400",
  "Growth Hormone": "text-blue-400",
  "Cognitive": "text-amber-400",
  "Longevity": "text-rose-400",
}

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const [showInquiry, setShowInquiry] = useState(false)

  return (
    <div className="group flex flex-col rounded-xl border border-border bg-secondary/20 overflow-hidden transition-all hover:border-primary/30 hover:bg-secondary/40">
      {/* Product image placeholder — dark gradient with molecule pattern */}
      <div className="relative h-40 overflow-hidden" style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a1a 100%)"
      }}>
        {/* Decorative circles suggesting molecular structure */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 160">
          <circle cx="60" cy="80" r="25" fill="none" stroke="hsl(270,60%,55%)" strokeWidth="1" />
          <circle cx="60" cy="80" r="8" fill="hsl(270,60%,55%)" opacity="0.4" />
          <circle cx="110" cy="55" r="18" fill="none" stroke="hsl(270,60%,55%)" strokeWidth="1" />
          <circle cx="110" cy="55" r="6" fill="hsl(270,60%,55%)" opacity="0.4" />
          <circle cx="140" cy="100" r="22" fill="none" stroke="hsl(270,60%,55%)" strokeWidth="1" />
          <circle cx="140" cy="100" r="7" fill="hsl(270,60%,55%)" opacity="0.4" />
          <line x1="60" y1="80" x2="110" y2="55" stroke="hsl(270,60%,55%)" strokeWidth="1" opacity="0.5" />
          <line x1="110" y1="55" x2="140" y2="100" stroke="hsl(270,60%,55%)" strokeWidth="1" opacity="0.5" />
          <circle cx="170" cy="40" r="12" fill="none" stroke="hsl(270,60%,55%)" strokeWidth="1" />
          <line x1="140" y1="100" x2="170" y2="40" stroke="hsl(270,60%,55%)" strokeWidth="1" opacity="0.3" />
        </svg>

        {/* Spec overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div className="rounded-md border border-border/50 bg-black/60 px-2.5 py-1.5 backdrop-blur">
            <p className="font-mono text-xs text-muted-foreground">Spec</p>
            <p className="font-mono text-sm font-semibold text-foreground">{product.spec}</p>
          </div>
          <div className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1.5 backdrop-blur">
            <p className="font-mono text-xs text-muted-foreground">Purity</p>
            <p className="font-mono text-sm font-semibold text-primary">{product.purity}</p>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span className={`rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium ${BADGE_STYLES[product.badge]}`}>
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <div>
          <span className={`font-mono text-xs ${CATEGORY_COLORS[product.category] ?? "text-muted-foreground"}`}>
            {product.category}
          </span>
          <h3 className="mt-1 font-medium leading-tight">{product.name}</h3>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="font-mono text-xs text-muted-foreground">Per vial</p>
            <p className="font-mono text-xl font-semibold text-foreground">${product.price}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-primary" />
            <span className="font-mono text-xs text-muted-foreground">COA verified</span>
          </div>
        </div>

        <div className="flex gap-2 mt-1">
          <Button
            size="sm"
            className="flex-1"
            onClick={() => setShowInquiry(!showInquiry)}
          >
            Inquire
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href="#coa" className="flex items-center gap-1">
              <ExternalLink className="size-3" />
              COA
            </a>
          </Button>
        </div>

        {/* Inquiry message */}
        {showInquiry && (
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs text-muted-foreground leading-relaxed">
            To place an order for <span className="text-foreground font-medium">{product.name} {product.spec}</span>, contact us at{" "}
            <a href="/contact" className="text-primary hover:underline">our contact page</a> or email{" "}
            <a href="mailto:research@aminolabs.com" className="text-primary hover:underline">research@aminolabs.com</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name")

  const filtered = PRODUCTS
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter((p) =>
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price
      if (sortBy === "price-desc") return b.price - a.price
      return a.name.localeCompare(b.name)
    })

  return (
    <>
      <SiteHeader />
      <main>
        {/* Header */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Research catalog
            </span>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Verified research compounds
            </h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Every compound is independently tested by Janoshik Analytical.
              Prices shown per vial. For research use only.
            </p>

            {/* Trust strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {[
                "HPLC verified ≥99%",
                "COA with every order",
                "Janoshik tested",
                "Discreet shipping",
                "Research use only",
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <ShieldCheck className="size-3.5 text-primary" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-3">
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-1.5 flex-1 min-w-48 max-w-64">
                <Search className="size-3.5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Search compounds..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-3 py-1 font-mono text-xs transition-all border ${
                      cat === activeCategory
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary text-muted-foreground border-border hover:border-primary/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <SlidersHorizontal className="size-3.5 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="bg-secondary border border-border rounded-md px-2 py-1 text-xs text-foreground outline-none"
                >
                  <option value="name">A–Z</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <p className="mb-6 font-mono text-xs text-muted-foreground">
            Showing {filtered.length} of {PRODUCTS.length} compounds
          </p>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-20 text-center">
              <FlaskConical className="size-8 text-muted-foreground" />
              <p className="text-muted-foreground">No compounds found for "{search}"</p>
              <button onClick={() => { setSearch(""); setActiveCategory("All") }}
                className="text-sm text-primary hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* Disclaimer */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <p className="text-xs leading-relaxed text-muted-foreground max-w-3xl">
              All compounds listed are sold strictly for in-vitro laboratory and research purposes only.
              Not for human or veterinary use, consumption, or administration. Not a drug or dietary supplement.
              Prices shown per vial. Minimum order quantities may apply. Contact us for bulk pricing.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
