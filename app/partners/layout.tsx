import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology Partners — OpenAI, AWS, Anthropic & More',
  description: 'wexel partners with industry leaders including OpenAI, AWS, Pinecone, Anthropic, Databricks, and Vanta to deliver enterprise-grade AI automation with robust infrastructure and security.',
  alternates: {
    canonical: 'https://wexel.ai/partners',
  },
  openGraph: {
    title: 'wexel Technology Partners',
    description: 'We collaborate with industry leaders in AI, cloud computing, and data infrastructure to deliver robust, enterprise-grade autonomous solutions.',
    url: 'https://wexel.ai/partners',
  },
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
