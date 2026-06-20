import Script from "next/script"

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amino Labs",
    url: "https://aminoresearchlab.ca",
    logo: "https://aminoresearchlab.ca/amino-labs-logo-combined.png",
    description:
      "Amino Labs supplies independently tested short-chain amino acid and peptide research compounds. Every batch verified by Janoshik Analytical with a public Certificate of Analysis.",
    email: "aminoresearchlab@gmail.com",
    slogan: "Precision Compounds. Measurable Results.",
    knowsAbout: [
      "Research peptides",
      "Amino acid compounds",
      "HPLC purity testing",
      "Certificate of Analysis",
      "Laboratory research compounds",
    ],
  }
  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amino Labs",
    url: "https://aminoresearchlab.ca",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://aminoresearchlab.ca/catalog?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema() {
  const faqs = [
    {
      q: "Are Amino Labs compounds third-party tested?",
      a: "Yes. Every batch is independently tested by Janoshik Analytical, an ISO-accredited laboratory. Results are published publicly and can be verified by batch number.",
    },
    {
      q: "What is a Certificate of Analysis (COA)?",
      a: "A COA is a document showing the verified purity, identity, and safety testing results for a specific batch. Every Amino Labs order ships with a COA verifiable on Janoshik's public portal.",
    },
    {
      q: "What does 'for research use only' mean?",
      a: "All Amino Labs compounds are sold strictly for in-vitro laboratory and research purposes. They are not for human or veterinary use, consumption, or administration.",
    },
    {
      q: "How do I verify a batch's purity?",
      a: "Enter the batch number printed on your vial into the COA lookup on our site, which connects directly to Janoshik Analytical's public verification database.",
    },
  ]
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
