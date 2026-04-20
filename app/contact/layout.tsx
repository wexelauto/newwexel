import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Custom AI Automation Proposal',
  description: 'Contact wexel to discuss your AI automation needs. Get a custom proposal for AI voice agents, outreach automation, e-commerce intelligence, and more. Response within 24 hours.',
  alternates: {
    canonical: 'https://wexel.ai/contact',
  },
  openGraph: {
    title: 'Contact wexel — AI Automation Agency',
    description: 'Ready to automate your operations? Tell us about your business and we\'ll craft a custom AI solution designed for your exact needs.',
    url: 'https://wexel.ai/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
