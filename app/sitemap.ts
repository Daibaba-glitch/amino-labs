import type { MetadataRoute } from "next"

const ARTICLE_SLUGS = [
  "how-to-read-certificate-of-analysis",
  "hplc-purity-testing-explained",
  "peptide-reconstitution-storage-guide",
  "understanding-third-party-lab-testing",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amino-labs-omega.vercel.app"
  const lastModified = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/catalog`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/research`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ]

  const articlePages: MetadataRoute.Sitemap = ARTICLE_SLUGS.map((slug) => ({
    url: `${baseUrl}/research/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}
