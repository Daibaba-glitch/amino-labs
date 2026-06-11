"use client"

import { useState } from "react"
import { ShieldCheck, FlaskConical, Search, SlidersHorizontal, ExternalLink, Plus, Minus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const CATEGORIES = ["All", "Weight Management", "Recovery", "Growth Hormone", "Cognitive", "Longevity"]

const PRODUCTS = [
  { id: 1, name: "Semaglutide", spec: "5mg/vial", category: "Weight Management", price: 65, purity: "99.2%", badge: "Popular" },
  { id: 2, name: "Semaglutide", spec: "10mg/vial", category: "Weight Management", price: 100, purity: "99.1%", badge: null },
  { id: 3, name: "Tirzepatide", spec: "10mg/vial", category: "Weight Management", price: 90, purity: "99.4%", badge: "Popular" },
  { id: 4, name: "Tirzepatide", spec: "30mg/vial", category: "Weight Management", price: 180, purity: "99.3%", badge: null },
  { id: 5, name: "Retatrutide", spec: "10mg/vial", category: "Weight Management", price: 160, purity: "99.2%", badge: "New" },
  { id: 6, name: "Retatrutide", spec: "20mg/vial", category: "Weight Management", price: 260, purity: "99.1%", badge: null },
  { id: 7, name: "Cagrilintide", spec: "5mg/vial", category: "Weight Management", price: 130, purity: "99.0%", badge: "New" },
  { id: 8, name: "Mazdutide", spec: "10mg/vial", category: "Weight Management", price: 210, purity: "99.3%", badge: null },
  { id: 9, name: "AOD-9604", spec: "5mg/vial", category: "Weight Management", price: 110, purity: "99.5%", badge: null },
  { id: 10, name: "BPC-157", spec: "10mg/vial", category: "Recovery", price: 100, purity: "99.4%", badge: "Popular" },
  { id: 11, name: "TB-500 (Thymosin Beta-4)", spec: "10mg/vial", category: "Recovery", price: 260, purity: "99.2%", badge: null },
  { id: 12, name: "BPC-157 + TB-4 Blend", spec: "5mg+5mg/vial", category: "Recovery", price: 260, purity: "99.1%", badge: "Blend" },
  { id: 13, name: "KPV", spec: "10mg/vial", category: "Recovery", price: 180, purity: "99.3%", badge: null },
  { id: 14, name: "LL-37", spec: "5mg/vial", category: "Recovery", price: 140, purity: "99.2%", badge: null },
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
  { id: 25, name: "Semax", spec: "10mg/vial", category: "Cognitive", price: 50, purity: "99.4%", badge: null },
  { id: 26, name: "Selank", spec: "10mg/vial", category: "Cognitive", price: 50, purity: "99.3%", badge: null },
  { id: 27, name: "PT-141 (Bremelanotide)", spec: "10mg/vial", category: "Cognitive", price: 120, purity: "99.2%", badge: null },
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

type CartItem = {
  id: number
  name: string
  spec: string
  price: number
  qty: number
}

function ProductCard({
  product,
  onInquire,
}: {
  product: typeof PRODUCTS[0]
  onInquire: (item: CartItem) => void
}) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  function handleInquire() {
    onInquire({ id: product.id, name: product.name, spec: product.spec, price: product.price, qty })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="group flex flex-col rounded-xl border border-border bg-secondary/20 overflow-hidden transition-all hover:border-primary/30 hover:bg-secondary/40">
      {/* Product image */}
      <div className="relative h-40 overflow-hidden" style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a1a 100%)"
      }}>
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 160">
          <circle cx="60" cy="80" r="25" fill="none" stroke="hsl(270,60%,55%)" strokeWidth="1" />
          <circle cx="60" cy="80" r="8" fill="hsl(270,60%,55%)" opacity="0.4" />
          <circle cx="110" cy="55" r="18" fill="none" stroke="hsl(270,60%,55%)" strokeWidth="1" />
          <circle cx="110" cy="55" r="6" fill="hsl(270,60%,55%)" opacity="0.4" />
          <circle cx="140" cy="100" r="22" fill="none" stroke="hsl(270,60%,55%)" strokeWidth="1" />
          <circle cx="140" cy="100" r="7" fill="hsl(270,60%,55%)" opacity="0.4" />
          <line x1="60" y1="80" x2="110" y2="55" stroke="hsl(270,60%,55%)" strokeWidth="1" opacity="0.5" />
          <line x1="110" y1="55" x2="140" y2="100" stroke="hsl(270,60%,55%)" strokeWidth="1" opacity="0.5" />
        </svg>
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

        {/* Price row */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs text-muted-foreground">Per vial</p>
            <p className="font-mono text-xl font-semibold">${product.price}</p>
          </div>
          <div className="flex items-center gap-1">
            <ShieldCheck className="size-3.5 text-primary" />
            <span className="font-mono text-xs text-muted-foreground">COA verified</span>
          </div>
        </div>

        {/* Quantity selector */}
        <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
          <span className="text-sm text-muted-foreground">Qty (vials)</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex size-7 items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <Minus className="size-3" />
            </button>
            <span className="font-mono text-sm font-medium w-6 text-center">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="flex size-7 items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <Plus className="size-3" />
            </button>
          </div>
        </div>

        {/* Subtotal */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Subtotal</span>
          <span className="font-mono font-medium text-foreground">${(product.price * qty).toLocaleString()}</span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-1">
          <Button
            size="sm"
            className="flex-1"
            onClick={handleInquire}
            variant={added ? "outline" : "default"}
          >
            {added ? "✓ Added" : "Add to Inquiry"}
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href="/#coa" className="flex items-center gap-1">
              <ExternalLink className="size-3" />
              COA
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name")
  const [inquiryItems, setInquiryItems] = useState<CartItem[]>([])
  const [showInquiry, setShowInquiry] = useState(false)

  function handleInquire(item: CartItem) {
    setInquiryItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + item.qty } : i)
      }
      return [...prev, item]
    })
    setShowInquiry(true)
  }

  function removeItem(id: number) {
    setInquiryItems((prev) => prev.filter((i) => i.id !== id))
  }

  function updateQty(id: number, qty: number) {
    if (qty < 1) { removeItem(id); return }
    setInquiryItems((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i))
  }

  const total = inquiryItems.reduce((sum, i) => sum + i.price * i.qty, 0)

  const filtered = PRODUCTS
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter((p) => search === "" || p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price
      if (sortBy === "price-desc") return b.price - a.price
      return a.name.localeCompare(b.name)
    })

  const inquiryEmailBody = inquiryItems.map((i) => `- ${i.name} ${i.spec} x${i.qty} vials = $${i.price * i.qty}`).join("\n")
  const inquirySubject = encodeURIComponent(`Research Compound Inquiry — ${inquiryItems.length} item${inquiryItems.length > 1 ? "s" : ""}`)
  const inquiryBody = encodeURIComponent(`Hello,\n\nI would like to inquire about the following research compounds:\n\n${inquiryEmailBody}\n\nEstimated total: $${total.toLocaleString()}\n\nPlease confirm availability and payment details.\n\nThank you.`)

  return (
    <>
      <SiteHeader />
      <main>
        {/* Header */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Research catalog</span>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Verified research compounds</h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Every compound independently tested by Janoshik Analytical. Prices shown per vial. For research use only.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {["HPLC verified ≥99%", "COA with every order", "Janoshik tested", "Discreet shipping", "Research use only"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <ShieldCheck className="size-3.5 text-primary" />{t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-1.5 flex-1 min-w-48 max-w-64">
                <Search className="size-3.5 text-muted-foreground shrink-0" />
                <input type="text" placeholder="Search compounds..." value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground" />
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-3 py-1 font-mono text-xs transition-all border ${
                      cat === activeCategory
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary text-muted-foreground border-border hover:border-primary/30"
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <SlidersHorizontal className="size-3.5 text-muted-foreground" />
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="bg-secondary border border-border rounded-md px-2 py-1 text-xs text-foreground outline-none">
                  <option value="name">A–Z</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                {/* Inquiry bag button */}
                {inquiryItems.length > 0 && (
                  <button onClick={() => setShowInquiry(!showInquiry)}
                    className="relative flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors">
                    <ShoppingBag className="size-3.5" />
                    Inquiry ({inquiryItems.length})
                    <span className="absolute -top-1.5 -right-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">
                      {inquiryItems.reduce((s, i) => s + i.qty, 0)}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry panel */}
        {showInquiry && inquiryItems.length > 0 && (
          <section className="border-b border-border bg-secondary/20">
            <div className="mx-auto max-w-7xl px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-medium flex items-center gap-2">
                  <ShoppingBag className="size-4 text-primary" />
                  Your inquiry list
                </h2>
                <button onClick={() => setShowInquiry(false)} className="text-xs text-muted-foreground hover:text-foreground">Hide</button>
              </div>
              <div className="grid gap-2 mb-4">
                {inquiryItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="font-mono text-xs text-muted-foreground">{item.spec} · ${item.price}/vial</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQty(item.id, item.qty - 1)}
                          className="flex size-6 items-center justify-center rounded border border-border bg-secondary hover:border-primary/50 transition-colors">
                          <Minus className="size-3" />
                        </button>
                        <span className="font-mono text-sm w-6 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)}
                          className="flex size-6 items-center justify-center rounded border border-border bg-secondary hover:border-primary/50 transition-colors">
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <span className="font-mono text-sm font-medium w-20 text-right">${(item.price * item.qty).toLocaleString()}</span>
                      <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-foreground text-xs">✕</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Estimated total</p>
                  <p className="font-mono text-xl font-semibold text-primary">${total.toLocaleString()}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setInquiryItems([])}>Clear all</Button>
                  <Button size="sm" asChild>
                    <a href={`mailto:aminoresearchlab@gmail.com?subject=${inquirySubject}&body=${inquiryBody}`}>
                      Send inquiry via email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Grid */}
        <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <p className="mb-6 font-mono text-xs text-muted-foreground">Showing {filtered.length} of {PRODUCTS.length} compounds</p>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-20 text-center">
              <FlaskConical className="size-8 text-muted-foreground" />
              <p className="text-muted-foreground">No compounds found</p>
              <button onClick={() => { setSearch(""); setActiveCategory("All") }} className="text-sm text-primary hover:underline">Clear filters</button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onInquire={handleInquire} />
              ))}
            </div>
          )}
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <p className="text-xs leading-relaxed text-muted-foreground max-w-3xl">
              All compounds listed are sold strictly for in-vitro laboratory and research purposes only. Not for human or veterinary use. Prices shown per vial. Contact us for bulk pricing.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
