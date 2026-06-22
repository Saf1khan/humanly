"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="w-full bg-black ">
      <div className="rounded-b-[40px] md:rounded-b-[64px] bg-sandstone-200">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 py-28 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-[#5c4033] leading-[1.05]">
                News, insights &amp; updates — delivered to you.
              </h2>

              <p className="text-[#5c4033]/70 text-base md:text-lg leading-relaxed max-w-xl">
                Subscribe to receive the latest articles, community stories,
                platform updates, and real estate intelligence from the Humanly
                team.
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="bg-white/60 backdrop-blur-sm border border-[#5c4033]/10 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(92,64,51,0.08)]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
                <div className="w-16 h-16 rounded-full bg-[#5c4033]/10 flex items-center justify-center">
                  <CheckCircle size={34} className="text-[#5c4033]" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl font-cormorant font-bold text-[#5c4033]">
                    You're subscribed!
                  </h3>

                  <p className="text-[#5c4033]/70 leading-relaxed max-w-sm mx-auto">
                    Thank you for joining. Expect thoughtful updates,
                    intelligence, and stories delivered directly to your inbox.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-cormorant font-bold text-[#5c4033]">
                    Stay connected
                  </h3>

                  <p className="text-[#5c4033]/60">
                    Join our community and never miss an update.
                  </p>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="newsletter-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-white border border-[#5c4033]/15 rounded-2xl pl-6 pr-40 py-5 text-[#5c4033] placeholder-[#5c4033]/40 focus:outline-none focus:border-[#5c4033]/40 focus:ring-2 focus:ring-[#5c4033]/10 transition-all"
                  />

                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#5c4033] hover:bg-[#4a3329] text-white font-medium px-5 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#5c4033]/20"
                  >
                    Subscribe
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                <div className="pt-2 border-t border-[#5c4033]/10">
                  <p className="text-sm text-[#5c4033]/50">
                    No spam, ever. Unsubscribe at any time.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};