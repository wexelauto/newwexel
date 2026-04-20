import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Measurable AI Automation Results',
  description: 'See how wexel delivers measurable ROI: +400% appointments for real estate, -60% origination costs for private equity, and 45% AOV surge for luxury e-commerce through bespoke AI automation.',
  alternates: {
    canonical: 'https://wexel.ai/case-studies',
  },
  openGraph: {
    title: 'wexel Case Studies — Measurable Outcomes. Definitive Proof.',
    description: 'Explore deep-dives into how our bespoke AI infrastructure delivers compounding ROI for enterprise clients across real estate, private equity, and luxury e-commerce.',
    url: 'https://wexel.ai/case-studies',
  },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
