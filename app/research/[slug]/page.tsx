import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ShieldCheck } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ARTICLES } from "@/lib/articles"
import { COAContent } from "@/lib/article-coa"
import { HPLCContent } from "@/lib/article-hplc"
import { StorageContent } from "@/lib/article-storage"
import { TestingContent } from "@/lib/article-testing"

const CONTENT_MAP: Record<string, () => React.JSX.Element> = {
  "how-to-read-certificate-of-analysis": COAContent,
  "hplc-purity-testing-explained": HPLCContent,
  "peptide-reconstitution-storage-guide": StorageContent,
  "understanding-third-party-lab-testing": TestingContent,
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishDate,
      url: `https://amino-labs-omega.vercel.app/research/${article.slug}`,
    },
    alternates: {
      canonical: `https://amino-labs-omega.vercel.app/research/${article.slug}`,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = ARTICLES.find((a) => a.slug === slug)
  if (!article) notFound()

  const Content = CONTENT_MAP[article.slug]
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishDate,
    author: { "@type": "Organization", name: "Amino Labs" },
    publisher: {
      "@type": "Organization",
      name: "Amino Labs",
      logo: {
        "@type": "ImageObject",
        url: "https://amino-labs-omega.vercel.app/amino-labs-logo-combined.png",
      },
    },
  }

  return (
    <>
      <SiteHeader />
      <main>
        <article className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="size-4" />
              All research notes
            </Link>

            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {article.category}
            </span>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl text-balance">
              {article.title}
            </h1>

            <div className="mt-5 flex items-center gap-5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {new Date(article.publishDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {article.readTime}
              </span>
            </div>

            <div className="article-body mt-10">
              <Content />
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Every Amino Labs batch is independently verified</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Browse our catalog of research compounds, each tested by Janoshik Analytical
                    with a publicly searchable Certificate of Analysis.
                  </p>
                  <Link
                    href="/catalog"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View the catalog →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-12">
            <h2 className="text-lg font-medium mb-6">Related research notes</h2>
            <div className="grid gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/research/${r.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-border bg-secondary/20 p-5 transition-colors hover:border-primary/30"
                >
                  <div>
                    <span className="font-mono text-xs text-primary">{r.category}</span>
                    <h3 className="mt-1 font-medium group-hover:text-primary transition-colors">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.readTime}</p>
                  </div>
                  <ArrowLeft className="size-4 rotate-180 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  )
}
