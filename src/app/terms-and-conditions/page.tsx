import React from 'react';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-sandstone-200 py-24 px-8 md:px-12 lg:px-16 pt-32">
      {/* Radial Gradient Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#5c4033]/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[900px] mx-auto bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 shadow-lg p-10 md:p-16">
        <div className="text-center mb-12 border-b border-[#5c4033]/20 pb-10">
          <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-[#5c4033] mb-4">Terms and Conditions</h1>
          <p className="text-[#5c4033]/70 font-medium">Last updated: June 2026</p>
        </div>

        <div className="space-y-12 text-black/80 text-lg">
          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using the Humanly website and our platform services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">2. Use of Our Platform</h2>
            <p className="leading-relaxed">
              Humanly provides innovative real estate and platform services designed to empower communities. You agree to use these services only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this site by any third party.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">3. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content included on this site, such as text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Humanly or its content suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">4. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Humanly shall not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, our services or materials on the site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">5. Modifications</h2>
            <p className="leading-relaxed">
              We reserve the right to review and modify these terms at any time. By continuing to use the platform after modifications are made, you accept the revised terms and conditions.
            </p>
          </section>
          
          <section>
            <h2 className="text-3xl font-cormorant font-semibold text-[#5c4033] mb-4">6. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions regarding these Terms and Conditions, please contact us at <a href="mailto:hello@humanly.com" className="font-semibold text-[#5c4033] underline hover:text-[#5c4033]/70 transition-colors">hello@humanly.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
