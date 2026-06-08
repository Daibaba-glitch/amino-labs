import Image from "next/image"

const COLUMNS = [
  {
    title: "Catalog",
    links: ["Peptides", "Reference standards", "Solvents", "Lab supplies"],
  },
  {
    title: "Verification",
    links: ["Lookup COA", "Testing partners", "Purity reports", "Methodology"],
  },
  {
    title: "Company",
    links: ["About", "Research notes", "Contact", "Wholesale"],
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
              Independently tested short-chain amino acid research compounds
              for the laboratory. Verified purity, transparent results.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      {link}
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
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
