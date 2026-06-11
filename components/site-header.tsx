"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const NAV = [
  { label: "Catalog", href: "/catalog" },
  { label: "Calculator", href: "/#calculator" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border backdrop-blur-md" style={{ backgroundColor: "#000000" }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" aria-label="Amino Labs home">
          <Image
            src="/amino-labs-logo-combined.png"
            alt="Amino Labs — Precision Compounds. Measurable Results."
            width={180}
            height={48}
            className="object-contain"
            priority
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/#coa"
            className="text-sm text-muted-foreground transition-colors hover:text-white"
          >
            Lookup COA
          </a>
          <Button size="sm" asChild>
            <a href="/catalog">Browse Catalog</a>
          </Button>
        </div>
        <button
          className="inline-flex size-9 items-center justify-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden" style={{ backgroundColor: "#000000" }}>
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-2" asChild>
              <a href="/catalog">Browse Catalog</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
