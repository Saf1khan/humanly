import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-sandstone-200 py-24 px-8 md:px-12 lg:px-16 pt-32">
      {/* Radial Gradient Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#5c4033]/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[900px] mx-auto bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 shadow-lg p-10 md:p-16">
        <div className="text-center mb-12 border-b border-[#5c4033]/20 pb-10">
          <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-[#5c4033] mb-4">Privacy Policy</h1>
          <p className="text-[#5c4033]/70 font-medium">Last updated: June 2026</p>
        </div>

        <div className="space-y-12 text-black/80 text-lg">
          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              At Humanly, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our platform and services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-3 leading-relaxed ml-4">
              <li><strong className="text-[#5c4033]">Personal Information:</strong> Includes your name, email address, phone number, and physical address when you register for an account or contact us.</li>
              <li><strong className="text-[#5c4033]">Usage Data:</strong> We automatically collect information regarding your interactions with our website, such as your IP address, browser type, and pages visited.</li>
              <li><strong className="text-[#5c4033]">Cookies:</strong> We use cookies to enhance your browsing experience and analyze site traffic patterns.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">The information we collect is used to:</p>
            <ul className="list-disc list-inside space-y-3 leading-relaxed ml-4">
              <li>Provide and maintain our services to you.</li>
              <li>Communicate with you regarding updates, offers, and support.</li>
              <li>Improve the functionality, design, and performance of our platform.</li>
              <li>Comply with legal obligations and protect our legal rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures designed to protect your data from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">5. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our site may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites, and we cannot accept responsibility or liability for their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">6. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about our Privacy Policy or your data, please contact our privacy team at <a href="mailto:hello@humanly.com" className="font-semibold text-[#5c4033] underline hover:text-[#5c4033]/70 transition-colors">hello@humanly.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
