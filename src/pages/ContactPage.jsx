import { useState } from 'react';
import { DARK, CREAM, GOLD } from '../data/constants';

function ContactPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="px-4 md:px-12 py-10 md:py-20 relative overflow-hidden" style={{ background: DARK }}>
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `radial-gradient(circle, ${GOLD} 1px, transparent 1px)`, 
            backgroundSize: "36px 36px" 
          }} 
        />
        <div className="relative max-w-175 text-center md:text-left mx-auto md:mx-0">
          <span className="font-mono text-[10px] tracking-[0.45em] block mb-3" style={{ color: "rgba(201,168,76,0.7)" }}>
            ✦ GET IN TOUCH
          </span>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold uppercase tracking-widest leading-none mb-4" style={{ color: CREAM }}>
            Contact Us
          </h1>
          <p className="text-[15px] md:text-[17px] leading-[1.75] max-w-130 mx-auto md:mx-0" style={{ color: "rgba(245,237,224,0.5)" }}>
            We'd love to hear from you. Reach out for inquiries, bookings, or any questions.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="px-4 md:px-12 py-12 md:py-20">
        {/* Main contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Phone Card */}
          <div className="p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300" 
               style={{ background: DARK, border: `1px solid ${GOLD}20` }}>
            <div className="text-4xl mb-3">📞</div>
            <div className="font-mono text-[9px] tracking-[0.4em] mb-2" style={{ color: GOLD }}>PHONE</div>
            <div className="text-[15px] leading-relaxed" style={{ color: CREAM }}>
              +254 722 116 085<br />
              +254 739 968 828
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300" 
               style={{ background: DARK, border: `1px solid ${GOLD}20` }}>
            <div className="text-4xl mb-3">✉️</div>
            <div className="font-mono text-[9px] tracking-[0.4em] mb-2" style={{ color: GOLD }}>EMAIL</div>
            <div className="text-[14px] leading-relaxed break-all" style={{ color: CREAM }}>
              tastyspicescatering@gmail.com
            </div>
          </div>

          {/* Service Area Card */}
          <div className="p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300" 
               style={{ background: DARK, border: `1px solid ${GOLD}20` }}>
            <div className="text-4xl mb-3">🌍</div>
            <div className="font-mono text-[9px] tracking-[0.4em] mb-2" style={{ color: GOLD }}>SERVICE AREA</div>
            <div className="text-[15px] leading-relaxed" style={{ color: CREAM }}>
              Nairobi & Surrounding Regions
            </div>
          </div>

          {/* Response Time Card */}
          <div className="p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300" 
               style={{ background: DARK, border: `1px solid ${GOLD}20` }}>
            <div className="text-4xl mb-3">🕐</div>
            <div className="font-mono text-[9px] tracking-[0.4em] mb-2" style={{ color: GOLD }}>RESPONSE TIME</div>
            <div className="text-[15px] leading-relaxed" style={{ color: CREAM }}>
              Within 48 business hours
            </div>
          </div>
        </div>

        {/* Note on Packages */}
        <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-xl text-center" style={{ background: DARK, border: `1px solid ${GOLD}30` }}>
          <div className="font-mono text-[10px] tracking-[0.4em] mb-3" style={{ color: GOLD }}>
            ✦ NOTE ON PACKAGES ✦
          </div>
          <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ color: "rgba(245,237,224,0.6)" }}>
            Free Kids Menu (50 Pax) for guests above 300 Pax — inclusive of table set up. 
            Prices vary by guest count and package tier.
          </p>
        </div>

        {/* Social/Additional Info */}
        <div className="mt-12 text-center">
          <p className="font-mono text-[10px] tracking-[0.3em]" style={{ color: "rgba(42,26,10,0.4)" }}>
            ✦ WE LOOK FORWARD TO MAKING YOUR EVENT UNFORGETTABLE ✦
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;