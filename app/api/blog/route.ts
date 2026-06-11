import { NextResponse } from "next/server"

const FALLBACK_POSTS = [
  {
    id: 1,
    category: "Peptides",
    title: "Membrane-permeable cyclic peptides identified through large synthetic library screening",
    summary: "Researchers at Nature Chemical Biology demonstrate that cell-active cyclic peptides can be identified by screening sufficiently large and diverse libraries of small synthetic peptides, opening new pathways for intracellular drug delivery.",
    source: "Nature Chemical Biology",
    sourceUrl: "https://www.nature.com/subjects/peptides",
    date: "May 14, 2026",
    read: "4 min read",
  },
  {
    id: 2,
    category: "Research",
    title: "TransCODE Consortium completes first identification of human microproteins",
    summary: "A landmark 2026 study published in Nature identifies thousands of previously unknown microproteins and peptideins, potentially doubling the known human proteome and opening new research frontiers for short-chain amino acid compounds.",
    source: "Nature",
    sourceUrl: "https://www.nature.com",
    date: "May 6, 2026",
    read: "5 min read",
  },
  {
    id: 3,
    category: "Amino Acids",
    title: "Short-chain amino acid compounds show promise in neurological injury repair",
    summary: "A four-amino-acid peptide CAQK demonstrated significant reduction in inflammation and cell death in animal models of brain injury, with no observed toxicity, pointing to new research directions for short-chain amino acid compounds.",
    source: "ScienceDaily",
    sourceUrl: "https://www.sciencedaily.com",
    date: "Jun 2, 2026",
    read: "3 min read",
  },
]

export async function GET() {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    return NextResponse.json({ posts: FALLBACK_POSTS, live: false })
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: `You are a research content writer for Amino Labs, a short-chain amino acid research compound supplier.

Generate 3 recent research article summaries about peptides, amino acids, or related research compounds.

Respond ONLY with valid JSON, no markdown, no backticks, exactly this format:
[
  {
    "id": 1,
    "category": "Peptides",
    "title": "Article title here",
    "summary": "2-3 sentence summary written for researchers.",
    "source": "Journal or publication name",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov",
    "date": "Jun 2026",
    "read": "4 min read"
  }
]

Categories must be one of: Peptides, Amino Acids, Research, Analytics`,
          },
        ],
      }),
    })

    const data = await response.json()
    const text = data.content?.[0]?.text ?? ""
    const clean = text.replace(/```json|```/g, "").trim()
    const parsed = JSON.parse(clean)

    if (Array.isArray(parsed)) {
      return NextResponse.json({ posts: parsed, live: true })
    }
    return NextResponse.json({ posts: FALLBACK_POSTS, live: false })
  } catch {
    return NextResponse.json({ posts: FALLBACK_POSTS, live: false })
  }
}
