import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Vision — The Future of AI-Powered Business Operations',
  description: 'Explore wexel\'s vision for democratizing enterprise-grade AI. Our roadmap includes continuous learning ecosystems, autonomous agents, custom models, edge AI deployments, and predictive enterprise analytics.',
  alternates: {
    canonical: 'https://wexel.ai/vision',
  },
  openGraph: {
    title: 'wexel Vision — Shaping the Future of Intelligence',
    description: 'We are on a mission to democratize enterprise-grade AI with aggressive expansion, relentless innovation, and advanced autonomous solutions.',
    url: 'https://wexel.ai/vision',
  },
}

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
