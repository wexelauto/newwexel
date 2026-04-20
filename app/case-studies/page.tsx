'use client';

import Link from 'next/link';
import { Minus, Zap, Plus, Activity, Cpu, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line
} from 'recharts';

// Dummy data for charts
const realEstateData = [
  { month: 'Jan', leadLeakage: 100, appointments: 20 },
  { month: 'Feb', leadLeakage: 85, appointments: 35 },
  { month: 'Mar', leadLeakage: 60, appointments: 55 },
  { month: 'Apr', leadLeakage: 30, appointments: 80 },
  { month: 'May', leadLeakage: 10, appointments: 110 },
  { month: 'Jun', leadLeakage: 2, appointments: 145 },
];

const privateEquityData = [
  { category: 'Before AI', diligenceDays: 45, originationCost: 120 },
  { category: 'After AI', diligenceDays: 12, originationCost: 48 },
];

const luxuryEcommerceData = [
  { quarter: 'Q1 2025', aov: 650, revenue: 2.1 },
  { quarter: 'Q2 2025', aov: 680, revenue: 2.5 },
  { quarter: 'Q3 2025', aov: 750, revenue: 3.2 },
  { quarter: 'Q4 2025', aov: 890, revenue: 4.8 },
  { quarter: 'Q1 2026', aov: 950, revenue: 5.6 },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page Header */}
      <section className="relative pt-32 pb-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-sm font-mono text-gray-500 mb-6 tracking-widest uppercase">( Proven Impact )</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 text-balance bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Measurable Outcomes.
            <br />
            Definitive Proof.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-balance">
            We do not just deploy technology; we engineer business transformation. Explore deep-dives into how our bespoke AI infrastructure delivers compounding ROI for enterprise clients.
          </p>
        </div>
      </section>

      {/* Case Study 1: RealEstate Enterprise */}
      <section className="py-32 border-b border-white/5 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono tracking-widest uppercase bg-white/[0.03]">Real Estate</span>
              <span className="text-gray-500">RealEstate Enterprise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Scaling High-Touch Brokerage with Autonomous Voice & CRM
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">01.</span> The Challenge
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  For a leading RealEstate Enterprise, missed calls and stalled follow-ups were costing millions in lost commissions. Relying on human agents for initial intake meant leads leaked out of the funnel during off-hours, and high-value clients were left waiting. Their existing systems couldn't intelligently categorize or prioritize inquiries at scale.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-white">02.</span> The Solution
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  We deployed a bespoke AI Voice Agent capable of answering 100% of inbound inquiries 24/7, fielding complex property questions, and directly booking showings. Integrated with an Intelligent AI CRM, the system automatically scores leads based on urgency and budget, triggering hyper-personalized follow-ups without manual intervention.
                </p>
                <ul className="space-y-3">
                  {['24/7 Autonomous Voice Intake', 'Predictive Lead Scoring CRM', 'Hyper-personalized Automated Follow-ups'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gray-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">03.</span> The Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-sm text-gray-500 font-mono mb-2 uppercase">Appointments Booked</p>
                    <p className="text-4xl font-bold text-white">+400%</p>
                  </div>
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-sm text-gray-500 font-mono mb-2 uppercase">Recovered Commissions</p>
                    <p className="text-4xl font-bold text-white">$5.2M</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl -z-10 rounded-full"></div>
              <div className="p-8 rounded-2xl border border-white/10 bg-black/50 backdrop-blur">
                <h4 className="text-xl font-bold mb-6 text-center">Lead Leakage vs. Appointments (6 Months)</h4>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={realEstateData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorLeakage" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="month" stroke="#888" tick={{ fill: '#888' }} axisLine={false} tickLine={false} />
                      <YAxis stroke="#888" tick={{ fill: '#888' }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Area type="monotone" dataKey="leadLeakage" name="Lead Leakage (%)" stroke="#ef4444" fillOpacity={1} fill="url(#colorLeakage)" />
                      <Area type="monotone" dataKey="appointments" name="Appointments (Monthly)" stroke="#3b82f6" fillOpacity={1} fill="url(#colorAppointments)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Private Equity & Fintech */}
      <section className="py-32 border-b border-white/5 relative bg-white/[0.01]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16 text-right">
            <div className="flex items-center justify-end gap-4 mb-4">
              <span className="text-gray-500">Global Capital Partners</span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono tracking-widest uppercase bg-white/[0.03]">Private Equity</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Accelerating Deal Flow via Next-Gen Web & Social Intelligence
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Chart comes first on large screens for alternating layout */}
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl -z-10 rounded-full"></div>
              <div className="p-8 rounded-2xl border border-white/10 bg-black/50 backdrop-blur">
                <h4 className="text-xl font-bold mb-6 text-center">Origination Metrics Comparison</h4>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={privateEquityData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="category" stroke="#888" tick={{ fill: '#888' }} axisLine={false} tickLine={false} />
                      <YAxis stroke="#888" tick={{ fill: '#888' }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff', borderRadius: '8px' }}
                        cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                      />
                      <Bar dataKey="diligenceDays" name="Due Diligence Time (Days)" fill="#a855f7" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="originationCost" name="Origination Cost Index" fill="#6b7280" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">01.</span> The Challenge
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Operating within complex Fintech Architecture, the firm needed a secure, intelligent mechanism to streamline deal origination. Manual tracking of market sentiment across social platforms and outdated web infrastructure slowed down the due diligence pipeline drastically, increasing origination costs and causing missed investment opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-white">02.</span> The Solution
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  We transformed their digital presence with a Next-Gen Web Experience, built for extreme speed and frictionless investor conversion. Behind the scenes, an Autonomous Social Media framework actively tracked market sentiment, summarizing critical developments for instant deal analysis and automated origination workflows.
                </p>
                <ul className="space-y-3">
                  {['Next-Gen High-Performance Web Architecture', 'Autonomous Market Sentiment Tracking', 'Automated Deal Origination Workflows'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gray-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">03.</span> The Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-sm text-gray-500 font-mono mb-2 uppercase">Due Diligence Speed</p>
                    <p className="text-4xl font-bold text-white">+73%</p>
                  </div>
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-sm text-gray-500 font-mono mb-2 uppercase">Origination Costs</p>
                    <p className="text-4xl font-bold text-white">-60%</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Case Study 3: Luxury E-Commerce */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono tracking-widest uppercase bg-white/[0.03]">Luxury Retail</span>
              <span className="text-gray-500">Luxury E-Commerce Brand</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Shattering Revenue Ceilings with E-Commerce Intelligence
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">01.</span> The Challenge
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Despite steady traffic growth, a premier Luxury E-Commerce brand hit a plateau. Their conversion rates were stagnant, and their Average Order Value (AOV) had not grown. Relying on static pricing models and generic recommendations failed to engage high-net-worth buyers, leading to inefficient inventory movement and high cart abandonment.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-white">02.</span> The Solution
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  We architected a deep E-Commerce Intelligence layer that processes millions of behavioral data points to dynamically adjust pricing and surface hyper-relevant product recommendations. Coupled with Mass Outreach Automation, the system autonomously generated individualized, high-converting email sequences to recover abandoned carts without aggressive discounting.
                </p>
                <ul className="space-y-3">
                  {['Predictive E-Commerce Intelligence', 'Dynamic Pricing & Inventory Sync', 'Hyper-personalized Mass Outreach'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gray-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-gray-500">03.</span> The Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-sm text-gray-500 font-mono mb-2 uppercase">AOV Surge</p>
                    <p className="text-4xl font-bold text-white">45%</p>
                  </div>
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-sm text-gray-500 font-mono mb-2 uppercase">New Revenue (Q1)</p>
                    <p className="text-4xl font-bold text-white">$3.5M</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent blur-3xl -z-10 rounded-full"></div>
              <div className="p-8 rounded-2xl border border-white/10 bg-black/50 backdrop-blur">
                <h4 className="text-xl font-bold mb-6 text-center">Revenue & AOV Trajectory</h4>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={luxuryEcommerceData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="quarter" stroke="#888" tick={{ fill: '#888' }} axisLine={false} tickLine={false} />
                      <YAxis yAxisId="left" stroke="#888" tick={{ fill: '#888' }} axisLine={false} tickLine={false} />
                      <YAxis yAxisId="right" orientation="right" stroke="#888" tick={{ fill: '#888' }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Line yAxisId="left" type="monotone" dataKey="aov" name="AOV ($)" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} activeDot={{ r: 6 }} />
                      <Line yAxisId="right" type="monotone" dataKey="revenue" name="Revenue ($M)" stroke="#eab308" strokeWidth={3} dot={{ r: 4, fill: '#eab308' }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality Banner */}
      <section className="py-24 bg-white text-black text-center px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <Shield className="w-12 h-12 text-black" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight text-balance">
            Enterprise Security & Total Anonymity
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
            The case studies above reflect real production metrics. However, due to the highly sensitive nature of the operational infrastructure we architect, we enforce strict non-disclosure agreements. We never disclose client identities, ensuring your strategic advantage remains entirely confidential.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
            <div>
              <p className="text-4xl font-black mb-2">SOC 2</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Compliant</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">100%</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Data Ownership</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">E2E</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Encryption</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">Private</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Deployments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-mono text-gray-500 mb-6 tracking-widest uppercase">( Ready for Transformation? )</p>
          <h2 className="text-5xl sm:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-500 bg-clip-text text-transparent">
              Architect Your Unfair Advantage.
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop competing on margins. Start scaling with intelligence. Let's discuss a bespoke AI strategy for your enterprise.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 font-semibold px-12 py-7 text-lg rounded-full shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              Request a Technical Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
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
