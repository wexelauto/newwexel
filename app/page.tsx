'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown, Cpu, Zap, Activity, Box, Cloud, Settings, Workflow, Layers, Shield, Share2, Plus, Minus, Building2, Briefcase, Gem, ShoppingBag, PieChart, CreditCard, DraftingCompass, Scale, Factory } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary based on complexity and your existing infrastructure. Most solutions launch within 2-3 weeks from discovery to deployment. We break the process into phases so you can see results early while we build out more sophisticated capabilities."
    },
    {
      question: "Do you integrate with our existing systems?",
      answer: "Absolutely. We specialize in seamless integration with your current tech stack—CRMs, databases, APIs, and custom applications. Our solutions are built to complement and enhance what you already have, not replace it entirely."
    },
    {
      question: "What level of support do we get after launch?",
      answer: "We provide ongoing support through dedicated channels, monthly performance reviews, and continuous optimization. Your AI system learns and improves over time, and we're here to adjust, refine, and expand capabilities as your business evolves."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "Data security is non-negotiable. We implement enterprise-grade encryption, follow industry compliance standards (GDPR, CCPA, SOC 2), and maintain strict access controls. Your data remains in your infrastructure or certified cloud providers you trust."
    },
    {
      question: "Can we customize the AI behavior for our specific workflows?",
      answer: "Yes. Every solution is custom-built for your unique workflows and business logic. We don't use generic templates—we analyze your specific needs and train the AI system to operate exactly how your team needs it to work."
    },
    {
      question: "What's the pricing model?",
      answer: "We offer flexible pricing based on complexity, scale, and the specific services you need. We typically discuss this during discovery to understand your requirements, budget, and expected ROI. No hidden costs—just transparent pricing."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pb-32 pt-16 bg-black relative overflow-hidden scroll-mt-24">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-6xl font-black text-white text-balance leading-tight mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about scaling your operations with wexel's intelligent AI infrastructure.
            </p>
          </motion.div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto grid gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-2xl border transition-all duration-500 ${activeIndex === index
                ? 'border-white/20 bg-white/[0.05] shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.03]'
                }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-6 focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-white text-black rotate-180' : 'bg-white/5 text-gray-400 group-hover:border-white/20'
                  }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
                      <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm">
            Still have questions? <Link href="/contact" className="text-white hover:underline underline-offset-4 decoration-white/30">Get in touch with our team</Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-900/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
          {/* Main Headline with Metallic Gradient */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl -mt-[35px] mb-12 text-balance">
            <span
              className="bg-clip-text text-transparent drop-shadow-lg font-black leading-none tracking-tight"
              style={{
                backgroundImage: 'linear-gradient(180deg, rgb(245, 245, 245) 0%, rgb(128, 128, 128) 100%)'
              }}
            >
              Accelerated Operations. Intelligent Growth.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed text-balance">
            Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7. Eradicate operational friction with autonomous systems built for infinite scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-base rounded-full w-full sm:w-auto"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>

      </section>

      {/* Trust Indicators Section */}
      <section className="py-24 bg-black border-t border-white/5 overflow-hidden relative">
        <div className="container mx-auto px-4 mb-12 text-center">
          <p className="text-xs font-mono text-white tracking-[0.3em] uppercase">
            TRUSTED ACROSS GLOBAL INDUSTRIES
          </p>
        </div>

        <div className="relative flex overflow-x-hidden">
          {/* Gradient Masks for smooth fade out */}
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 pr-16">
                {[
                  { name: "RealEstate Enterprise", icon: <Building2 className="w-5 h-5" strokeWidth={1.5} /> },
                  { name: "Luxury E-Commerce", icon: <ShoppingBag className="w-5 h-5" strokeWidth={1.5} /> },
                  { name: "Private Equity", icon: <PieChart className="w-5 h-5" strokeWidth={1.5} /> },
                  { name: "Fintech  Architecture", icon: <CreditCard className="w-5 h-5" strokeWidth={1.5} /> },
                  { name: "Legal Infrastructure", icon: <Scale className="w-5 h-5" strokeWidth={1.5} /> }
                ].map((industry, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 transition-all duration-500 cursor-default group scale-95 hover:scale-105"
                  >
                    <div className="text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
                      {industry.icon}
                    </div>
                    <span className="text-lg font-bold tracking-widest text-white uppercase font-mono">
                      {industry.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="pt-20 pb-0 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-mono text-gray-500 mb-4 tracking-widest">CHALLENGES</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white text-balance leading-none mb-6">
              Problems We Solve
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Organizations struggle with operational complexity. We eliminate it with intelligent AI systems that adapt to your unique workflows.
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                problem: "Manual Process Bottlenecks",
                description: "Repetitive, human-dependent workflows consume critical resources and introduce costly errors."
              },
              {
                problem: "Inconsistent Data Integration",
                description: "Disconnected systems create data silos, reducing visibility and slowing decision-making across teams."
              },
              {
                problem: "Lack of 24/7 Operations",
                description: "Teams can't operate around the clock, missing opportunities and delaying critical work until business hours."
              },
              {
                problem: "Scaling Without Infrastructure",
                description: "Growth requires proportional team expansion, creating unsustainable labor costs and operational complexity."
              },
              {
                problem: "Limited Business Intelligence",
                description: "Manual analytics and reporting delay insights, preventing real-time decision-making on key metrics."
              },
              {
                problem: "Change Management Friction",
                description: "Traditional systems resist adaptation, making it difficult to pivot strategies or optimize workflows quickly."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur transition-all duration-300"
              >
                <div className="absolute left-0 top-0 w-1 h-12 bg-gradient-to-b from-gray-400 to-transparent rounded-r opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {item.problem}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Solution Statement */}
          <div className="mt-16 pt-[25px] pb-[25px] border-t border-white/10">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-300 mb-0 leading-relaxed">
                <span className="font-semibold text-white">wexel transforms these challenges</span> by deploying bespoke AI infrastructure that automates workflows, integrates data seamlessly, and operates continuously—enabling teams to scale without proportional overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black border-t border-white/5 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              Powerful Capabilities
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Intelligent Workflows',
                description: 'AI-powered automation that learns and adapts to your unique business needs.'
              },
              {
                title: 'Real-Time Integration',
                description: 'Seamlessly connect with your existing tools and platforms instantly.'
              },
              {
                title: '24/7 Operation',
                description: 'Continuous automation without human intervention or downtime.'
              },
              {
                title: 'Advanced Analytics',
                description: 'Deep insights into your automation performance and ROI metrics.'
              },
              {
                title: 'Enterprise Security',
                description: 'Bank-level security with compliance for regulated industries.'
              },
              {
                title: 'Dedicated Support',
                description: 'Expert assistance from AI automation specialists.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl border border-white/10 hover:border-white/30 bg-white/[0.02] backdrop-blur hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black border-t border-white/5 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-gray-500 mb-4 tracking-widest uppercase">(DIGITAL FOUNDRY)</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white text-balance leading-none">
              Enterprise AI Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Voice Solutions",
                description: "AI voice agents that pick up the phone, qualify leads, book appointments, and handle support. They sound human, work 24/7, and never miss a call. Your team handles the deals that close. The AI handles everything else."
              },
              {
                title: "Mass Outreach Automation",
                description: "AI writes a unique email for every prospect. Not mail merge. Actual personalization based on who they are and what they care about. Thousands go out. They land in inboxes, not spam. And you track every open, click, and reply."
              },
              {
                title: "E-Commerce Intelligence",
                description: "AI that knows what your customers want before they do. Dynamic pricing adjusts in real time. Product recs surface the right items. Abandoned carts get recovered automatically. Higher AOV, more conversions, and inventory that stays right-sized."
              },
              {
                title: "Autonomous Social Media",
                description: "AI that schedules posts, responds to engagement, and tracks performance across every platform you use. One dashboard. No manual posting. Your social media stays active whether you are online or not."
              },
              {
                title: "Next-Gen Web Experiences",
                description: "Websites that load fast, rank well, and convert visitors into customers. No bloated templates. No slow page speeds. Clean code, strategic design, and SEO built into the foundation. Every page has a job and it does it."
              },
              {
                title: "Intelligent AI CRM",
                description: "AI-powered CRM that drives engagement, scores leads, and automates follow-ups across every channel, identifying exactly where deals stall. Faster response times. A pipeline you can actually trust."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-white/10 hover:border-white/30 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur hover:bg-gradient-to-br hover:from-white/[0.08] hover:to-white/[0.03] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-400/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Process Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-gray-500 mb-4 tracking-widest">( OUR PROCESS )</p>
            <h2 className="text-white text-balance" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "40px", fontWeight: "600", lineHeight: "1em" }}>
              How We Turn Ideas Into Intelligent Systems.
            </h2>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Discover */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 w-40 h-40 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JeZjMCd4N4Z67dN3EOKx2KaBjw-UTipMBU0lgusoB6oFIzoU7md7CT0rU.avif"
                  alt="Discover process icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">1. DISCOVER</h3>
              <p className="text-gray-400 leading-relaxed">
                We analyze your data ecosystem to find the fertile ground where AI can take root and drive value.
              </p>
            </div>

            {/* Step 2: Build */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 w-40 h-40 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rNet6BqxZi7Ff00Y1Mhdh61JRBY-CKPPsSyUnxlZqbbNGSOGiJNuNcftlB.jpg"
                  alt="Build process icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">2. BUILD</h3>
              <p className="text-gray-400 leading-relaxed">
                Precise eye tracking technology detects where you&apos;re looking on the screen, identifying interactive elements in your field of view.
              </p>
            </div>

            {/* Step 3: Launch */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 w-40 h-40 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TI0XZjSY9ntUJeHoleW7YJkyBNY-FcOiuB1PIwBvblHTWsvfw9BeEqhujN.avif"
                  alt="Launch process icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">3. LAUNCH</h3>
              <p className="text-gray-400 leading-relaxed">
                We implement continuous learning loops, allowing your system to evolve and improve as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              Ready to Automate?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the future of work. Let&apos;s transform your business together.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-10 py-6 text-base rounded-full"
            >
              Book an Audit
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
