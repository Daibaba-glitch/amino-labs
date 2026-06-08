"use client"

import { useMemo, useState } from "react"
import { Beaker, Info, Syringe } from "lucide-react"

function Field({
  label, unit, value, onChange, step = 1, min = 0,
}: {
  label: string; unit: string; value: number; onChange: (v: number) => void; step?: number; min?: number
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-2 rounded-md border border-border bg-background px-3 focus-within:ring-2 focus-within:ring-ring">
        <input
          type="number" inputMode="decimal" min={min} step={step}
          value={Number.isNaN(value) ? "" : value}
          onChange={(e) => onChange(Number.parseFloat(e.target.value))}
          className="w-full bg-transparent py-2.5 text-sm outline-none"
        />
        <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted-foreground">{unit}</span>
      </div>
    </label>
  )
}

const SYRINGES = [
  { label: "0.3 mL", max: 0.3, steps: 30, majorEvery: 5, stepSize: 0.01 },
  { label: "0.5 mL", max: 0.5, steps: 50, majorEvery: 10, stepSize: 0.01 },
  { label: "1.0 mL", max: 1.0, steps: 20, majorEvery: 5, stepSize: 0.05 },
]

function SyringeVisual({ volumeMl, selectedIdx, onSelect }: {
  volumeMl: number; selectedIdx: number; onSelect: (i: number) => void
}) {
  const syringe = SYRINGES[selectedIdx]
  const clampedVol = Math.min(Math.max(volumeMl, 0), syringe.max)
  const fillPct = clampedVol / syringe.max
  const overMax = volumeMl > syringe.max

  const W = 440, H = 130
  const bX = 70, bW = 280, bY = 38, bH = 46
  const needleW = 36, pW = 20
  const fillW = fillPct * bW
  const plungerX = bX + fillW

  const ticks = Array.from({ length: syringe.steps + 1 }, (_, i) => {
    const x = bX + (i / syringe.steps) * bW
    const isMajor = i % syringe.majorEvery === 0
    const tH = isMajor ? 16 : 8
    const label = isMajor ? (i * syringe.stepSize).toFixed(syringe.stepSize < 0.05 ? 2 : 1) : null
    return { x, tH, isMajor, label, i }
  })

  const volText = clampedVol.toFixed(3).replace(/\.?0+$/, "") + " mL"

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-muted-foreground">Syringe:</span>
        {SYRINGES.map((s, i) => (
          <button key={s.label} onClick={() => onSelect(i)}
            className={`rounded-full px-4 py-1 font-mono text-xs font-medium transition-all border ${
              i === selectedIdx
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                : "bg-secondary text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            }`}>
            {s.label}
          </button>
        ))}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 480 }}>
        <defs>
          <linearGradient id="sg-fluid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(270,70%,65%)" />
            <stop offset="100%" stopColor="hsl(270,60%,38%)" />
          </linearGradient>
          <linearGradient id="sg-barrel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(260,12%,20%)" />
            <stop offset="50%" stopColor="hsl(260,12%,14%)" />
            <stop offset="100%" stopColor="hsl(260,12%,18%)" />
          </linearGradient>
          <linearGradient id="sg-plunger" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(260,12%,32%)" />
            <stop offset="100%" stopColor="hsl(260,12%,22%)" />
          </linearGradient>
          <filter id="sg-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Needle */}
        <polygon points={`${bX},${bY+10} ${bX},${bY+bH-10} ${bX-needleW},${bY+bH/2}`}
          fill="hsl(260,12%,30%)" stroke="hsl(260,12%,45%)" strokeWidth="1" />

        {/* Barrel */}
        <rect x={bX} y={bY} width={bW} height={bH} rx={5} fill="url(#sg-barrel)"
          stroke="hsl(260,12%,32%)" strokeWidth="1.5" />

        {/* Fluid fill */}
        {fillW > 1 && (
          <rect x={bX+1} y={bY+3} width={Math.max(fillW-2,0)} height={bH-6} rx={3}
            fill="url(#sg-fluid)" filter="url(#sg-glow)"
            style={{ transition: "width 0.35s cubic-bezier(0.4,0,0.2,1)" }} />
        )}

        {/* Shine */}
        <rect x={bX+2} y={bY+3} width={bW-4} height={8} rx={3} fill="white" opacity="0.05" />

        {/* Ticks */}
        {ticks.map((t) => (
          <g key={t.i}>
            <line x1={t.x} y1={bY} x2={t.x} y2={bY-t.tH}
              stroke={t.isMajor ? "hsl(210,20%,65%)" : "hsl(260,12%,38%)"}
              strokeWidth={t.isMajor ? 1.5 : 0.8} />
            {t.label && t.i > 0 && (
              <text x={t.x} y={bY-t.tH-3} textAnchor="middle" fontSize="7.5"
                fill="hsl(210,15%,55%)" fontFamily="monospace">{t.label}</text>
            )}
          </g>
        ))}
        <text x={bX} y={bY-20} textAnchor="middle" fontSize="7.5"
          fill="hsl(210,15%,45%)" fontFamily="monospace">0</text>

        {/* Plunger */}
        <rect x={plungerX} y={bY-4} width={pW} height={bH+8} rx={4}
          fill="url(#sg-plunger)" stroke="hsl(260,12%,42%)" strokeWidth="1.5"
          style={{ transition: "x 0.35s cubic-bezier(0.4,0,0.2,1)" }} />
        {[5,10,15].map((o) => (
          <line key={o} x1={plungerX+o} y1={bY+6} x2={plungerX+o} y2={bY+bH-6}
            stroke="hsl(260,12%,52%)" strokeWidth="1"
            style={{ transition: "x 0.35s cubic-bezier(0.4,0,0.2,1)" }} />
        ))}

        {/* Rod */}
        <rect x={plungerX+pW} y={bY+bH/2-4} width={W-plungerX-pW-10} height={8} rx={2}
          fill="hsl(260,12%,25%)" stroke="hsl(260,12%,35%)" strokeWidth="1"
          style={{ transition: "x 0.35s cubic-bezier(0.4,0,0.2,1), width 0.35s cubic-bezier(0.4,0,0.2,1)" }} />
        <rect x={W-18} y={bY+4} width={12} height={bH-8} rx={3}
          fill="hsl(260,12%,28%)" stroke="hsl(260,12%,40%)" strokeWidth="1" />

        {/* Volume label */}
        {fillW > 52 && (
          <text x={bX+fillW/2} y={bY+bH/2+4} textAnchor="middle" fontSize="10"
            fontWeight="700" fill="white" fontFamily="monospace" opacity="0.95"
            style={{ transition: "x 0.35s cubic-bezier(0.4,0,0.2,1)" }}>
            {volText}
          </text>
        )}

        {overMax && (
          <text x={bX+bW-8} y={bY+bH/2+4} textAnchor="end" fontSize="10"
            fill="hsl(0,72%,60%)" fontFamily="monospace">▶ exceeds {syringe.label}</text>
        )}
      </svg>

      <div className={`flex items-center gap-3 rounded-lg border px-5 py-3 ${
        overMax ? "border-destructive/40 bg-destructive/10" : "border-border bg-secondary/50"}`}>
        <Syringe className={`size-4 ${overMax ? "text-destructive" : "text-primary"}`} />
        <span className="font-mono text-sm">
          {overMax ? (
            <><span className="text-destructive font-semibold">Volume exceeds {syringe.label}</span>
            <span className="text-muted-foreground"> — select a larger syringe</span></>
          ) : (
            <>Draw <span className="font-semibold text-foreground">{clampedVol.toFixed(3)} mL</span>
            {" "}using a <span className="font-semibold text-primary">{syringe.label} syringe</span></>
          )}
        </span>
      </div>
    </div>
  )
}

export function DosageCalculator() {
  const [compoundMg, setCompoundMg] = useState(10)
  const [solventMl, setSolventMl] = useState(2)
  const [targetDose, setTargetDose] = useState(250)
  const [syringeIdx, setSyringeIdx] = useState(0)

  const { concentration, doseVolumeMl } = useMemo(() => {
    const concentration = solventMl > 0 ? (compoundMg * 1000) / solventMl : 0
    const doseVolumeMl = concentration > 0 ? targetDose / concentration : 0
    return { concentration, doseVolumeMl }
  }, [compoundMg, solventMl, targetDose])

  const fmt = (n: number, d = 2) =>
    !Number.isFinite(n) ? "—" : n.toLocaleString(undefined, { maximumFractionDigits: d })

  return (
    <section id="calculator" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Research tool</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Reconstitution &amp; dosage calculator
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Estimate concentration and draw volume for your reconstituted research compound.
            For laboratory measurement reference only.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-2">
          <div className="space-y-5 bg-background p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Beaker className="size-5 text-primary" />
              <h3 className="font-medium">Inputs</h3>
            </div>
            <Field label="Compound amount" unit="mg" value={compoundMg} onChange={setCompoundMg} step={0.5} />
            <Field label="Solvent added" unit="mL" value={solventMl} onChange={setSolventMl} step={0.5} />
            <Field label="Target dose" unit="mcg" value={targetDose} onChange={setTargetDose} step={50} />
          </div>

          <div className="flex flex-col gap-5 bg-card p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Syringe className="size-5 text-primary" />
              <h3 className="font-medium">Results</h3>
            </div>
            <div className="rounded-lg border border-border bg-background p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Concentration</p>
              <p className="mt-1 font-mono text-3xl font-semibold tracking-tight">
                {fmt(concentration, 0)}{" "}
                <span className="text-base text-muted-foreground">mcg/mL</span>
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Draw volume</p>
              <p className="mt-1 font-mono text-2xl font-semibold tracking-tight">
                {fmt(doseVolumeMl, 3)}
                <span className="ml-1 text-sm text-muted-foreground">mL</span>
              </p>
            </div>
            <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 size-3.5 shrink-0" />
              Figures are calculated estimates for in-vitro research reference only and are not
              medical or dosing guidance for human use.
            </p>
          </div>
        </div>

        {/* Interactive syringe visual */}
        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-xl border border-border bg-background p-6 md:p-10">
          <div className="mb-6 flex items-center gap-2">
            <Syringe className="size-5 text-primary" />
            <h3 className="font-medium">Visual draw guide</h3>
            <span className="ml-auto font-mono text-xs text-muted-foreground">
              Updates live · select syringe size
            </span>
          </div>
          <SyringeVisual volumeMl={doseVolumeMl} selectedIdx={syringeIdx} onSelect={setSyringeIdx} />
        </div>
      </div>
    </section>
  )
}
