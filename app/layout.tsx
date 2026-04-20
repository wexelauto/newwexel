import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Oswald } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _oswald = Oswald({ subsets: ["latin"] });

const SITE_URL = 'https://wexel.ai';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'wexel — AI Automation Agency | Intelligent Business Automation',
    template: '%s | wexel',
  },
  description: 'wexel deploys bespoke AI infrastructure to automate mission-critical workflows 24/7. Autonomous systems built for infinite scale.',
  keywords: [
    'AI automation agency',
    'business automation',
    'AI voice agents',
    'intelligent automation',
    'workflow automation',
    'enterprise AI',
    'AI CRM',
    'e-commerce AI',
    'autonomous social media',
    'mass outreach automation',
    'AI solutions',
    'operational automation',
    'AI infrastructure',
    'wexel',
  ],
  authors: [{ name: 'wexel', url: SITE_URL }],
  creator: 'wexel',
  publisher: 'wexel',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'wexel',
    title: 'wexel — AI Automation Agency | Intelligent Business Automation',
    description: 'Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7. Eradicate operational friction with autonomous systems built for infinite scale.',
    images: [
      {
        url: '/icon1.png',
        width: 96,
        height: 96,
        alt: 'wexel — AI Automation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'wexel — AI Automation Agency',
    description: 'Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7. Eradicate operational friction with autonomous systems built for infinite scale.',
    images: ['/icon1.png'],
    creator: '@wexel_ai',
  },
  icons: {
    icon: [
      { url: '/icon1.png', type: 'image/png', sizes: '96x96' },
      { url: '/icon0.svg', type: 'image/svg+xml', sizes: 'any' }
    ],
    shortcut: [{ url: '/favicon.ico', sizes: '48x48' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  other: {
    'color-scheme': 'dark',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

import { Navbar } from '@/components/navbar'

// JSON-LD structured data for Organization + WebSite (crawl text for search engines & AI)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'wexel',
      url: SITE_URL,
      logo: `${SITE_URL}/icon1.png`,
      description: 'wexel is an AI automation agency that deploys bespoke AI infrastructure to automate mission-critical business workflows 24/7. Services include AI voice agents, mass outreach automation, e-commerce intelligence, autonomous social media management, next-gen web experiences, and intelligent AI CRM systems.',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'owais@wexel.ai',
        contactType: 'sales',
        availableLanguage: ['English'],
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'wexel',
      publisher: { '@id': `${SITE_URL}/#organization` },
      description: 'AI Automation Agency — Accelerated Operations. Intelligent Growth. Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7.',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: 'wexel AI Automation Services',
      provider: { '@id': `${SITE_URL}/#organization` },
      serviceType: 'AI Automation',
      areaServed: 'Worldwide',
      description: 'Enterprise AI services including AI Voice Solutions, Mass Outreach Automation, E-Commerce Intelligence, Autonomous Social Media, Next-Gen Web Experiences, and Intelligent AI CRM.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Automation Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Voice Solutions', description: 'AI voice agents that qualify leads, book appointments, and handle support 24/7.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mass Outreach Automation', description: 'AI-powered personalized email campaigns at scale with real-time tracking.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Intelligence', description: 'Dynamic pricing, product recommendations, and automated cart recovery powered by AI.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Autonomous Social Media', description: 'AI-driven social media scheduling, engagement, and analytics across all platforms.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next-Gen Web Experiences', description: 'High-performance websites with clean code, strategic design, and built-in SEO.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intelligent AI CRM', description: 'AI-powered CRM with lead scoring, automated follow-ups, and pipeline intelligence.' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it take to implement an AI solution?',
          acceptedAnswer: { '@type': 'Answer', text: 'Implementation timelines vary based on complexity and your existing infrastructure. Most solutions launch within 2-3 weeks from discovery to deployment. We break the process into phases so you can see results early while we build out more sophisticated capabilities.' },
        },
        {
          '@type': 'Question',
          name: 'Do you integrate with our existing systems?',
          acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We specialize in seamless integration with your current tech stack—CRMs, databases, APIs, and custom applications. Our solutions are built to complement and enhance what you already have, not replace it entirely.' },
        },
        {
          '@type': 'Question',
          name: 'What level of support do we get after launch?',
          acceptedAnswer: { '@type': 'Answer', text: "We provide ongoing support through dedicated channels, monthly performance reviews, and continuous optimization. Your AI system learns and improves over time, and we are here to adjust, refine, and expand capabilities as your business evolves." },
        },
        {
          '@type': 'Question',
          name: 'How do you ensure data security and privacy?',
          acceptedAnswer: { '@type': 'Answer', text: 'Data security is non-negotiable. We implement enterprise-grade encryption, follow industry compliance standards (GDPR, CCPA, SOC 2), and maintain strict access controls. Your data remains in your infrastructure or certified cloud providers you trust.' },
        },
        {
          '@type': 'Question',
          name: 'Can we customize the AI behavior for our specific workflows?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every solution is custom-built for your unique workflows and business logic. We don\'t use generic templates—we analyze your specific needs and train the AI system to operate exactly how your team needs it to work.' },
        },
        {
          '@type': 'Question',
          name: "What's the pricing model?",
          acceptedAnswer: { '@type': 'Answer', text: 'We offer flexible pricing based on complexity, scale, and the specific services you need. We typically discuss this during discovery to understand your requirements, budget, and expected ROI. No hidden costs—just transparent pricing.' },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
