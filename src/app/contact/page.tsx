import React from 'react';
import {ContactForm} from "@/components/sections/contact/ContactForm"
import {NewsletterSubscription} from "@/components/sections/contact/NewsletterSubscription"
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-sandstone-200" style={{ '--radial-gradient-color': '107, 206, 255' } as React.CSSProperties}>
        <ContactForm />
        <NewsletterSubscription />
    </div>
  );
}
