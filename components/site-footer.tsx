import Image from "next/image"

const COLUMNS = [
  {
    title: "Catalog",
    links: [
      { label: "All compounds", href: "/catalog" },
      { label: "Weight management", href: "/catalog" },
      { label: "Recovery", href: "/catalog" },
      { label: "Growth hormone", href: "/catalog" },
    ],
  },
  {
    title: "Verification",
    links: [
      { label: "Lookup COA", href: "/#coa" },
      { label: "Calculator", href: "/#calculator" },
      { label: "Research notes", href: "/research" },
      { label: "Janoshik portal", href: "https://public.janoshik.com" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Wholesale", href: "/contact" },
      { label: "Research hub", href: "/research" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border" style={{ backgroundColor: "#000000" }}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/amino-labs-logo-combined.png"
              alt="Amino Labs"
              width={180}
              height={48}
              className="object-contain"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Independently tested short-chain amino acid and peptide research
              compounds for the laboratory. Verified purity, transparent results.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            All products are sold strictly for laboratory and research purposes
            only. Not for human or veterinary use, consumption, or
            administration. Not a drug or dietary supplement.
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <span>© 2026 Amino Labs. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="/terms" className="hover:text-white">Terms</a>
              <a href="/privacy" className="hover:text-white">Privacy</a>
              <a href="/disclaimer" className="hover:text-white">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
