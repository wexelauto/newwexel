'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6">
          <Mail className="w-7 h-7 text-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent</h3>
        <p className="text-muted-foreground max-w-md leading-relaxed">
          {"We've received your message and will get back to you within 24 hours. Check your inbox for a confirmation."}
        </p>
        <Button
          onClick={() => setStatus('idle')}
          variant="outline"
          className="mt-8 border-white/20 text-foreground hover:bg-white/5"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-muted-foreground text-xs tracking-widest uppercase font-mono">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            required
            placeholder="John"
            className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/50 h-12 focus-visible:border-white/30 focus-visible:ring-white/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-muted-foreground text-xs tracking-widest uppercase font-mono">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            required
            placeholder="Doe"
            className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/50 h-12 focus-visible:border-white/30 focus-visible:ring-white/10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-muted-foreground text-xs tracking-widest uppercase font-mono">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@company.com"
          className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/50 h-12 focus-visible:border-white/30 focus-visible:ring-white/10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-muted-foreground text-xs tracking-widest uppercase font-mono">
          Company
        </Label>
        <Input
          id="company"
          name="company"
          placeholder="Acme Inc."
          className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/50 h-12 focus-visible:border-white/30 focus-visible:ring-white/10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-muted-foreground text-xs tracking-widest uppercase font-mono">
          What can we help with?
        </Label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full h-12 rounded-md border bg-white/[0.03] border-white/10 text-foreground px-3 text-sm outline-none focus-visible:border-white/30 focus-visible:ring-white/10 focus-visible:ring-[3px] transition-[color,box-shadow] appearance-none"
          defaultValue=""
        >
          <option value="" disabled className="bg-black text-muted-foreground">
            Select a topic
          </option>
          <option value="ai-voice" className="bg-black">AI Voice Solutions</option>
          <option value="outreach" className="bg-black">Mass Outreach Automation</option>
          <option value="ecommerce" className="bg-black">E-Commerce Intelligence</option>
          <option value="social" className="bg-black">Autonomous Social Media</option>
          <option value="web" className="bg-black">Next-Gen Web Experiences</option>
          <option value="crm" className="bg-black">Intelligent AI CRM</option>
          <option value="general" className="bg-black">General Inquiry</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-muted-foreground text-xs tracking-widest uppercase font-mono">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project, goals, and timeline..."
          rows={5}
          className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/50 min-h-32 focus-visible:border-white/30 focus-visible:ring-white/10"
        />
      </div>

      <Button
        type="submit"
        disabled={status === 'submitting'}
        size="lg"
        className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold h-12 text-base rounded-full group"
      >
        {status === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-widest uppercase">(Contact)</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground text-balance leading-none mb-8">
              {"Let's Build Something Intelligent."}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {"Ready to automate your operations? Tell us about your business and we'll craft a custom AI solution designed for your exact needs."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3" id="contact-form">
              <div className="p-8 sm:p-10 rounded-xl border border-white/10 bg-white/[0.02] scroll-mt-24">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-10">
              {/* Direct Contact */}
              <div>
                <h3 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6">Direct Contact</h3>
                <div className="space-y-5">
                  <a
                    href="mailto:owais@wexel.ai"
                    className="group flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 transition-colors">
                      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">owais@wexel.ai</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div>
                <h3 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6">Response Time</h3>
                <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                  <p className="text-foreground font-semibold mb-1">Within 24 hours</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We respond to every inquiry within one business day. For urgent projects, mention it in your message.
                  </p>
                </div>
              </div>

              {/* What Happens Next */}
              <div>
                <h3 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6">What Happens Next</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: '01',
                      title: 'Discovery Call',
                      description: 'We schedule a 20-minute call to understand your business and goals.'
                    },
                    {
                      step: '02',
                      title: 'Custom Proposal',
                      description: 'You receive a tailored plan with scope, timeline, and transparent pricing.'
                    },
                    {
                      step: '03',
                      title: 'Build & Launch',
                      description: 'Our team builds your AI solution and deploys it within weeks.'
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="text-xs font-mono text-muted-foreground/50 mt-1 flex-shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-foreground font-semibold text-sm mb-1">{item.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6">Follow Us</h3>
                <div className="flex gap-3">
                  {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="px-4 py-2 rounded-full border border-white/10 text-sm text-muted-foreground hover:text-foreground hover:border-white/25 transition-all"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
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
