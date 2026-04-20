'use client';

import Link from 'next/link';
import { Menu, X, Cpu, Cloud, Database, Shield, Zap, Network, ArrowUpRight } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Partners() {
  const partners = [
    {
      name: "OpenAI",
      category: "Foundation Models",
      description: "Leveraging state-of-the-art language models for advanced reasoning and complex problem-solving in enterprise operations.",
      icon: <Cpu className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
    },
    {
      name: "AWS",
      category: "Cloud Infrastructure",
      description: "Secure, scalable cloud architecture that forms the backbone of our high-performance AI deployments globally.",
      icon: <Cloud className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
    },
    {
      name: "Pinecone",
      category: "Vector Database",
      description: "High-performance vector search empowering our AI models with context-aware memory and unified knowledge graphs.",
      icon: <Database className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
    },
    {
      name: "Anthropic",
      category: "Advanced LLMs",
      description: "Integrating constitutional AI models focused on safety, reliability, and nuanced understanding of complex tasks.",
      icon: <Zap className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
    },
    {
      name: "Databricks",
      category: "Data Intelligence",
      description: "Unifying data silos and accelerating machine learning workflows to drive predictive analytics and deep insights.",
      icon: <Network className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
    },
    {
      name: "Vanta",
      category: "Security & Compliance",
      description: "Ensuring our AI automation pipelines adhere to the strictest global security protocols and zero-trust frameworks.",
      icon: <Shield className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gray-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gray-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
          <p className="text-sm font-mono text-gray-500 mb-6 tracking-widest uppercase">( ECOSYSTEM )</p>
          <h1 className="text-5xl sm:text-7xl font-black mb-8 text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Our Technology
              <br />
              Partners
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed text-balance">
            We collaborate with industry leaders in artificial intelligence, cloud computing, and data infrastructure to deliver robust, enterprise-grade autonomous solutions.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/20 flex flex-col"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {partner.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </div>

                <div>
                  <p className="text-sm font-mono text-gray-500 mb-2 uppercase">{partner.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Program */}
      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-b from-transparent via-gray-800/10 to-transparent blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Join the Alliance
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed text-balance">
            Are you building next-generation AI infrastructure or specialized tools? We are constantly expanding our ecosystem to deliver the best solutions to our enterprise clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-base rounded-full w-full sm:w-auto"
              >
                Apply as Partner
              </Button>
            </Link>
            <Link href="/vision">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white font-semibold px-8 py-6 text-base rounded-full w-full sm:w-auto"
              >
                Read Our Vision
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/50 backdrop-blur py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-8 mb-12 text-left">
            <div className="col-span-3 md:col-span-1">
              <Link href="/">
                <span className="text-3xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent block mb-4">
                  wexel
                </span>
              </Link>
              <p className="text-gray-500 text-sm">AI Automation Agency</p>
            </div>
            <div className="col-span-1">
              <h4 className="text-white font-semibold mb-4 text-base">Resources</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="/vision" className="hover:text-white transition">Our Vision</Link></li>
                <li><Link href="/partners" className="hover:text-white transition">Partners</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition">Case studies</Link></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-white font-semibold mb-4 text-base">Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="/status" className="hover:text-white transition">Status</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><a href="mailto:owais@wexel.ai" className="hover:text-white transition">Email</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-white font-semibold mb-4 text-base">Legal</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; 2026 wexel. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link href="#" className="text-gray-500 hover:text-white transition text-sm">Twitter</Link>
              <Link href="#" className="text-gray-500 hover:text-white transition text-sm">LinkedIn</Link>
              <Link href="#" className="text-gray-500 hover:text-white transition text-sm">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
