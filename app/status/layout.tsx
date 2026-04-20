import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'System Status — Real-Time Infrastructure Monitoring',
  description: 'Real-time operational status and performance metrics for wexel\'s core infrastructure, API services, AI inference engine, and global edge network. 99.99% uptime guaranteed.',
  alternates: {
    canonical: 'https://wexel.ai/status',
  },
  openGraph: {
    title: 'wexel System Status',
    description: 'Real-time operational status and performance metrics for our core infrastructure and AI services.',
    url: 'https://wexel.ai/status',
  },
}

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
