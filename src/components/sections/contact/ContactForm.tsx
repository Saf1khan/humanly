import React from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';


export function ContactForm() {
    return (
        <section className="min-h-screen relative overflow-x-clip bg-sandstone-200 pt-32 pb-24">
            {/* Radial Gradient Layers */}
            <div
                className="absolute  pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at top right, rgba(255,255,255,0.7), transparent, transparent)",
                }}
            />

            <div
                className="absolute pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at bottom left, rgba(92,64,51,0.1), transparent, transparent)",
                }}
            />

            <div
                className="absolute pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent, transparent, rgba(92,64,51,0.05))",
                }}
            />

            <div className="max-w-[1440px] px-8 md:px-12 lg:px-16 mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Column: Contact Info */}
                <div className="flex flex-col text-left">
                    <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-[#5c4033] mb-6 leading-tight">
                        Get in touch with our team.
                    </h1>
                    <p className="text-[#5c4033]/70 text-base md:text-lg mb-12 max-w-md leading-relaxed">
                        Whether you have a question about our real estate platform, want to explore investment opportunities, or just want to say hello — we're here to help.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-full bg-[#5c4033]/10 group-hover:bg-[#5c4033] flex items-center justify-center shrink-0 transition-colors duration-300">
                                <Mail className="text-[#5c4033] group-hover:text-white transition-colors" size={20} />
                            </div>
                            <div>
                                <h3 className="text-[#5c4033] font-semibold text-lg mb-1">Email Us</h3>
                                <a href="mailto:hello@humanly.com" className="text-[#5c4033]/70 hover:text-[#5c4033] transition-colors">hello@humanly.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-full bg-[#5c4033]/10 group-hover:bg-[#5c4033] flex items-center justify-center shrink-0 transition-colors duration-300">
                                <MapPin className="text-[#5c4033] group-hover:text-white transition-colors" size={20} />
                            </div>
                            <div>
                                <h3 className="text-[#5c4033] font-semibold text-lg mb-1">Visit Us</h3>
                                <p className="text-[#5c4033]/70">123 Humanly Way<br />New York, NY 10001</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="w-12 h-12 rounded-full bg-[#5c4033]/10 group-hover:bg-[#5c4033] flex items-center justify-center shrink-0 transition-colors duration-300">
                                <Phone className="text-[#5c4033] group-hover:text-white transition-colors" size={20} />
                            </div>
                            <div>
                                <h3 className="text-[#5c4033] font-semibold text-lg mb-1">Call Us</h3>
                                <p className="text-[#5c4033]/70">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="bg-white/50 backdrop-blur-md border border-[#5c4033]/10 p-8 md:p-10 rounded-3xl shadow-xl shadow-[#5c4033]/5 relative">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#5c4033]/10 blur-3xl rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

                    <h3 className="text-2xl font-cormorant font-bold text-[#5c4033] mb-6">Send us a message</h3>

                    <form className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm text-[#5c4033]/80 font-medium">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full bg-white/60 border border-[#5c4033]/20 rounded-xl px-4 py-3 text-[#5c4033] placeholder-[#5c4033]/30 focus:outline-none focus:border-[#5c4033] focus:ring-1 focus:ring-[#5c4033] transition-all"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm text-[#5c4033]/80 font-medium">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full bg-white/60 border border-[#5c4033]/20 rounded-xl px-4 py-3 text-[#5c4033] placeholder-[#5c4033]/30 focus:outline-none focus:border-[#5c4033] focus:ring-1 focus:ring-[#5c4033] transition-all"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm text-[#5c4033]/80 font-medium">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/60 border border-[#5c4033]/20 rounded-xl px-4 py-3 text-[#5c4033] placeholder-[#5c4033]/30 focus:outline-none focus:border-[#5c4033] focus:ring-1 focus:ring-[#5c4033] transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm text-[#5c4033]/80 font-medium">Subject</label>
                            <select
                                id="subject"
                                className="w-full bg-white/60 border border-[#5c4033]/20 rounded-xl px-4 py-3 text-[#5c4033] focus:outline-none focus:border-[#5c4033] focus:ring-1 focus:ring-[#5c4033] transition-all appearance-none"
                            >
                                <option value="general">General Inquiry</option>
                                <option value="invest">Investment Opportunities</option>
                                <option value="support">Platform Support</option>
                                <option value="partnership">Partnership</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm text-[#5c4033]/80 font-medium">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-white/60 border border-[#5c4033]/20 rounded-xl px-4 py-3 text-[#5c4033] placeholder-[#5c4033]/30 focus:outline-none focus:border-[#5c4033] focus:ring-1 focus:ring-[#5c4033] transition-all resize-none"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-[#5c4033] hover:bg-[#4a3329] text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group mt-4 shadow-lg shadow-[#5c4033]/20"
                        >
                            Send Message
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}