import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service',
  description: 'wexel Terms of Service — Agreement governing the use of wexel AI automation services, website, and intellectual property. Read our terms on liability, data usage, and user responsibilities.',
  alternates: {
    canonical: 'https://wexel.ai/terms',
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black">

      {/* Content */}
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Agreement to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing and using the wexel website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Use License */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on wexel's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-gray-400 list-disc list-inside">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Engaging in any unauthorized access to our services</li>
              </ul>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-400 leading-relaxed">
                The materials on wexel's website are provided on an 'as is' basis. wexel makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            {/* Limitations of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitations of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                In no event shall wexel or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on wexel's website, even if wexel or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            {/* Accuracy of Materials */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Accuracy of Materials</h2>
              <p className="text-gray-400 leading-relaxed">
                The materials appearing on wexel's website could include technical, typographical, or photographic errors. wexel does not warrant that any of the materials on its website are accurate, complete, or current. wexel may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            {/* Links */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Links</h2>
              <p className="text-gray-400 leading-relaxed">
                wexel has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by wexel of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Modifications</h2>
              <p className="text-gray-400 leading-relaxed">
                wexel may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-gray-400 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                As a user of wexel services, you agree to:
              </p>
              <ul className="space-y-2 text-gray-400 list-disc list-inside">
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in any unlawful or harmful activities</li>
                <li>Respect the intellectual property rights of wexel and others</li>
                <li>Not attempt to breach or circumvent any security measures</li>
                <li>Not use our services to harass, threaten, or abuse others</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-400 leading-relaxed">
                All content on the wexel website, including text, graphics, logos, images, and software, is the property of wexel or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
              </p>
            </section>

            {/* Limitation Period */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation Period</h2>
              <p className="text-gray-400 leading-relaxed">
                Any claim or cause of action arising out of or related to the use of wexel services must be filed within one (1) year after such claim or cause of action arises, or it shall be forever barred.
              </p>
            </section>

            {/* Contact for Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="text-white font-semibold mb-2">wexel</p>
                <p className="text-gray-400">Email: privacy@wexel.ai</p>
                <p className="text-gray-400">Website: www.wexel.ai</p>
              </div>
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
