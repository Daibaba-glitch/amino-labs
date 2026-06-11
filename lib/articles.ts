export type Article = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  readTime: string
  publishDate: string
  excerpt: string
  keywords: string[]
}

export const ARTICLES: Article[] = [
  {
    slug: "how-to-read-certificate-of-analysis",
    title: "How to Read a Certificate of Analysis (COA)",
    metaTitle: "How to Read a Certificate of Analysis (COA) | Amino Labs",
    metaDescription:
      "A complete researcher's guide to reading a peptide Certificate of Analysis. Learn what HPLC purity, mass spec, identity, and microbial results actually mean.",
    category: "Standards",
    readTime: "6 min read",
    publishDate: "2026-06-08",
    excerpt:
      "A Certificate of Analysis is the single most important document that ships with any research compound. Here's how to read every section like an analyst.",
    keywords: ["certificate of analysis", "COA", "peptide purity", "how to read COA", "HPLC results"],
  },
  {
    slug: "hplc-purity-testing-explained",
    title: "HPLC Purity Testing Explained",
    metaTitle: "HPLC Purity Testing Explained | Amino Labs",
    metaDescription:
      "What does 99% HPLC purity actually mean? A clear explanation of how high-performance liquid chromatography measures peptide purity and why it matters.",
    category: "Methodology",
    readTime: "7 min read",
    publishDate: "2026-06-07",
    excerpt:
      "HPLC is the gold standard for measuring research compound purity. Understand how it works and what the percentage really tells you.",
    keywords: ["HPLC", "purity testing", "high performance liquid chromatography", "peptide purity testing", "99% purity"],
  },
  {
    slug: "peptide-reconstitution-storage-guide",
    title: "Peptide Reconstitution & Storage Guide",
    metaTitle: "Peptide Reconstitution & Storage Guide | Amino Labs",
    metaDescription:
      "A laboratory reference for reconstituting and storing research peptides. Covers bacteriostatic water, concentration math, cold chain, and stability.",
    category: "Storage",
    readTime: "8 min read",
    publishDate: "2026-06-06",
    excerpt:
      "Proper reconstitution and storage preserves compound integrity. A practical reference for handling lyophilized research peptides in the lab.",
    keywords: ["peptide reconstitution", "peptide storage", "bacteriostatic water", "lyophilized peptide", "peptide stability"],
  },
  {
    slug: "understanding-third-party-lab-testing",
    title: "Understanding Third-Party Lab Testing",
    metaTitle: "Understanding Third-Party Lab Testing | Amino Labs",
    metaDescription:
      "Why independent third-party testing matters for research compounds. Learn what ISO accreditation, Janoshik verification, and public COAs mean for purity.",
    category: "Standards",
    readTime: "5 min read",
    publishDate: "2026-06-05",
    excerpt:
      "Not all testing is equal. Learn why independent, accredited third-party verification is the only purity claim worth trusting.",
    keywords: ["third party testing", "ISO accredited lab", "Janoshik", "independent lab testing", "peptide verification"],
  },
]
