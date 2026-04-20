import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'wexel Privacy Policy — How we collect, use, and safeguard your data. GDPR and CCPA compliant. Enterprise-grade encryption and strict access controls for all AI automation services.',
  alternates: {
    canonical: 'https://wexel.ai/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">

      {/* Content */}
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                wexel ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-400">
                <div>
                  <h3 className="text-white font-semibold mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    We collect information you provide directly, including name, email address, phone number, company information, and any other details you choose to share when contacting us or using our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Usage Data</h3>
                  <p className="leading-relaxed">
                    We automatically collect information about your interactions with our website, including IP address, browser type, pages visited, time spent, and referring URLs.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Cookies</h3>
                  <p className="leading-relaxed">
                    We use cookies and similar technologies to enhance your experience, remember your preferences, and understand how you use our website.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <ul className="space-y-3 text-gray-400 list-disc list-inside">
                <li>To provide and improve our AI automation services</li>
                <li>To communicate with you about our services and respond to inquiries</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To analyze usage patterns and optimize our website</li>
                <li>To personalize your experience and deliver relevant content</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-400 leading-relaxed">
                We implement comprehensive security measures to protect your personal information, including encryption, secure servers, and access controls. However, no security system is completely impenetrable, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-gray-400 leading-relaxed">
                We retain your personal information only for as long as necessary to provide our services or comply with legal obligations. You can request deletion of your data at any time by contacting us.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-400 leading-relaxed">
                Our website may contain links to third-party services and integrations. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing your information.
              </p>
            </section>

            {/* Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Compliance with Laws</h2>
              <p className="text-gray-400 leading-relaxed">
                We comply with applicable data protection laws, including GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act). Residents of these jurisdictions have specific rights regarding their personal data.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="space-y-3 text-gray-400 list-disc list-inside">
                <li>Right to access your personal information</li>
                <li>Right to correct or update inaccurate data</li>
                <li>Right to delete your personal information</li>
                <li>Right to opt-out of marketing communications</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="text-white font-semibold mb-2">wexel</p>
                <p className="text-gray-400">Email: privacy@wexel.ai</p>
                <p className="text-gray-400">Website: www.wexel.ai</p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of significant changes by updating the "Last Updated" date and, where appropriate, sending you an email notification.
              </p>
            </section>
          </div>

          {/* Footer Link */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="inline-block text-white hover:text-gray-300 transition font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
