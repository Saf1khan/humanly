import React from 'react';
import Link from 'next/link';
import { Home, Info, Box, Users, Monitor, TrendingUp, UsersRound, Mail, Shield, FileText } from 'lucide-react';

export default function SiteMap() {
  const sitemapLinks = [
    { title: 'Home', href: '/', icon: Home, desc: 'Return to the homepage' },
    { title: 'Why Humanly', href: '/why-humanly', icon: Info, desc: 'Learn about our core mission' },
    { title: 'Platform', href: '/platform', icon: Box, desc: 'Explore our platform features' },
    { title: 'Communities', href: '/communities', icon: Users, desc: 'Discover our communities' },
    { title: 'Humanly OS', href: '/humanly-os', icon: Monitor, desc: 'The operating system for real estate' },
    { title: 'Invest', href: '/invest', icon: TrendingUp, desc: 'Investment opportunities' },
    { title: 'Team', href: '/team', icon: UsersRound, desc: 'Meet the people behind Humanly' },
    { title: 'Contact', href: '/contact', icon: Mail, desc: 'Get in touch with us' },
    { title: 'Terms and Conditions', href: '/terms-and-conditions', icon: FileText, desc: 'Our rules and guidelines' },
    { title: 'Privacy Policy', href: '/privacy-policy', icon: Shield, desc: 'How we protect your data' },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      <div className="rounded-b-[40px] md:rounded-b-[64px] bg-sandstone-200 py-24 px-8 md:px-12 lg:px-16 pt-32">
      {/* Radial Gradient Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#5c4033]/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold text-[#5c4033] mb-6 drop-shadow-sm">Site Map</h1>
          <p className="text-[#5c4033]/80 text-lg max-w-2xl mx-auto">
            Navigate through the Humanly platform to explore our offerings, learn about our mission, or get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sitemapLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href} className="group">
                <div className="bg-white/40 hover:bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-[#5c4033]/10 text-[#5c4033] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#5c4033] group-hover:text-white shadow-sm">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-cormorant font-bold text-[#5c4033] mb-2">{link.title}</h3>
                  <p className="text-black/60 text-sm">{link.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      </div>
    </main>
  );
}
