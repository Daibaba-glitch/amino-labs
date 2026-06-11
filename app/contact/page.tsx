"use client"


import { useState } from "react"
import { Mail, MessageSquare, Clock, ShieldCheck, Package, TrendingUp, Truck, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const WHOLESALE_PERKS = [
  {
    icon: TrendingUp,
    title: "Volume pricing",
    desc: "Significant discounts on orders of 10+ kits. The more you order, the lower your per-vial cost.",
  },
  {
    icon: BadgeCheck,
    title: "COA with every batch",
    desc: "Every wholesale order ships with a full Janoshik-verified Certificate of Analysis.",
  },
  {
    icon: Truck,
    title: "Discreet worldwide shipping",
    desc: "All orders shipped discreetly. If customs detains your package we reship for free.",
  },
  {
    icon: Package,
    title: "Custom quantities",
    desc: "Need a specific spec or quantity? Contact us and we'll work out a custom arrangement.",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    type: "wholesale",
    products: "",
    quantity: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Wholesale Inquiry — ${form.company || form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nCountry: ${form.country}\nInquiry type: ${form.type}\nProducts interested in: ${form.products}\nEstimated quantity: ${form.quantity}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:aminoresearchlab@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                Wholesale & bulk orders
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Contact Amino Labs
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Interested in bulk pricing, wholesale arrangements, or custom orders?
                We work directly with researchers, clinics, and resellers worldwide.
                Reach out and we'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Wholesale perks */}
        <section className="border-b border-border bg-secondary/20">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {WHOLESALE_PERKS.map((p) => (
                <div key={p.title} className="flex flex-col gap-3 rounded-xl border border-border bg-background p-5">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-secondary">
                    <p.icon className="size-4 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-medium">{p.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form + info */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 md:py-24 lg:grid-cols-[1fr_1.8fr]">

            {/* Left info */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
                  Get in touch
                </p>
                {[
                  {
                    icon: Mail,
                    title: "Email us directly",
                    desc: "Send wholesale and bulk order inquiries to:",
                    value: "aminoresearchlab@gmail.com",
                    href: "mailto:aminoresearchlab@gmail.com",
                  },
                  {
                    icon: Clock,
                    title: "Response time",
                    desc: "We respond to all inquiries within 24 hours on business days.",
                    value: "Mon–Fri, 9am–5pm",
                    href: null,
                  },
                  {
                    icon: ShieldCheck,
                    title: "COA verification",
                    desc: "Verify any batch result on Janoshik's public portal.",
                    value: "public.janoshik.com",
                    href: "https://public.janoshik.com",
                  },
                  {
                    icon: MessageSquare,
                    title: "Custom orders",
                    desc: "Need a specific peptide, spec, or quantity not listed? Mention it in your message.",
                    value: null,
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 mb-7">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                      <item.icon className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm font-medium text-primary hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : item.value ? (
                        <p className="mt-1 text-sm font-medium text-foreground">{item.value}</p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct email button */}
              <Button variant="outline" asChild className="w-fit">
                <a href="mailto:aminoresearchlab@gmail.com">
                  <Mail className="size-4" />
                  Email us directly
                </a>
              </Button>
            </div>

            {/* Contact form */}
            <div className="rounded-xl border border-border bg-secondary/20 p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-16 text-center">
                  <div className="flex size-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <ShieldCheck className="size-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">Message sent!</h2>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Your email client should have opened with your inquiry pre-filled.
                    If not, email us directly at{" "}
                    <a href="mailto:aminoresearchlab@gmail.com" className="text-primary hover:underline">
                      aminoresearchlab@gmail.com
                    </a>
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="text-lg font-medium">Wholesale inquiry form</h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm font-medium">Full name <span className="text-primary">*</span></span>
                      <input
                        name="name" required value={form.name} onChange={handleChange}
                        placeholder="Dr. Jane Smith"
                        className="rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm font-medium">Email <span className="text-primary">*</span></span>
                      <input
                        name="email" type="email" required value={form.email} onChange={handleChange}
                        placeholder="jane@company.com"
                        className="rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm font-medium">Company / organisation</span>
                      <input
                        name="company" value={form.company} onChange={handleChange}
                        placeholder="Research Lab Ltd."
                        className="rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm font-medium">Country</span>
                      <input
                        name="country" value={form.country} onChange={handleChange}
                        placeholder="United States"
                        className="rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium">Inquiry type</span>
                    <select
                      name="type" value={form.type} onChange={handleChange}
                      className="rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="wholesale">Wholesale / bulk pricing</option>
                      <option value="reseller">Reseller partnership</option>
                      <option value="custom">Custom order / spec</option>
                      <option value="coa">COA / batch verification</option>
                      <option value="general">General inquiry</option>
                    </select>
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium">Products interested in <span className="text-primary">*</span></span>
                    <input
                      name="products" required value={form.products} onChange={handleChange}
                      placeholder="e.g. Semaglutide 5mg, BPC-157 10mg, Tirzepatide 10mg"
                      className="rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium">Estimated quantity</span>
                    <input
                      name="quantity" value={form.quantity} onChange={handleChange}
                      placeholder="e.g. 50 kits/month, 200 vials, 10 kits to start"
                      className="rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium">Additional message</span>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your research needs, preferred payment method, or any other details..."
                      className="rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground resize-none"
                    />
                  </label>

                  <p className="text-xs text-muted-foreground">
                    By submitting this form you confirm that all inquiries relate to laboratory
                    research use only. All products are for research purposes only — not for
                    human or veterinary use.
                  </p>

                  <Button type="submit" className="w-full">
                    <Mail className="size-4" />
                    Send wholesale inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-8">
            <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
              All products sold by Amino Labs are strictly for laboratory and in-vitro research
              purposes only. Not for human or veterinary use, consumption, or administration.
              Not a drug or dietary supplement. Wholesale pricing available on request.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
