import { Award, FlaskConical, Microscope, ShieldCheck, Snowflake, Truck } from "lucide-react"

const BADGES = [
  { icon: Microscope, label: "Third-Party Tested", sub: "ISO 17025 labs" },
  { icon: ShieldCheck, label: "HPLC Verified", sub: "Purity & identity" },
  { icon: FlaskConical, label: "USP Reference", sub: "Traceable standards" },
  { icon: Snowflake, label: "Cold Chain", sub: "Stability assured" },
  { icon: Truck, label: "Discreet Shipping", sub: "Insured & tracked" },
  { icon: Award, label: "GMP Sourced", sub: "Audited suppliers" },
]

export function TrustBadges() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Standards trusted by research labs and universities
        </p>
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {BADGES.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-2 bg-background px-4 py-6 text-center"
            >
              <b.icon className="size-6 text-primary" strokeWidth={1.75} />
              <span className="text-sm font-medium leading-tight">{b.label}</span>
              <span className="text-xs text-muted-foreground">{b.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
