import { useState } from 'react';
import { DARK, CREAM, GOLD } from '../data/constants';

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", event: "", guests: "", date: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = () => { if (form.name && form.email) setSent(true); };

  if (sent) return (
    <div className="pt-16 min-h-screen flex flex-col items-center justify-center text-center px-12">
      <div className="text-7xl mb-8">🎉</div>
      <h2 className="text-[clamp(28px,4vw,52px)] font-normal tracking-tight mb-4">Thank You!</h2>
      <p className="text-[17px] max-w-100 mx-auto leading-relaxed" style={{ color: "rgba(42,26,10,0.5)" }}>
        We've received your enquiry and will be in touch within 48 hours.<br />
        <span className="font-semibold" style={{ color: DARK }}>+254 722 116 085</span>
      </p>
    </div>
  );

  const iCls = "w-full px-4 py-3 text-sm font-serif outline-none rounded transition-all duration-200";
  const iSty = { background: "rgba(42,26,10,0.04)", border: "1px solid rgba(42,26,10,0.12)", color: "#2A1A0A" };
  const lCls = "font-mono text-[9px] tracking-[0.35em] block mb-1.5";
  const lSty = { color: "rgba(42,26,10,0.5)" };

  return (
    <div className="pt-16 min-h-screen">
      <div className="px-12 py-20 relative overflow-hidden" style={{ background: DARK }}>
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `radial-gradient(circle, ${GOLD} 1px, transparent 1px)`, 
            backgroundSize: "36px 36px" 
          }} 
        />
        <div className="relative max-w-175">
          <span className="font-mono text-[10px] tracking-[0.45em] block mb-3" style={{ color: "rgba(201,168,76,0.7)" }}>
            ✦ REACH OUT
          </span>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold uppercase tracking-widest leading-none mb-4" style={{ color: CREAM }}>
            Contact Us
          </h1>
          <p className="text-[17px] leading-[1.75] max-w-130" style={{ color: "rgba(245,237,224,0.5)" }}>
            Tell us about your event and we'll craft the perfect catering experience for you.
          </p>
        </div>
      </div>

      <div className="grid gap-16 px-12 py-16 items-start" style={{ gridTemplateColumns: "1fr 320px" }}>
        {/* Form */}
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className={lCls} style={lSty}>Full Name</label><input className={iCls} style={iSty} placeholder="Jane Kamau" value={form.name} onChange={set("name")} /></div>
            <div><label className={lCls} style={lSty}>Email Address</label><input className={iCls} style={iSty} placeholder="jane@company.com" value={form.email} onChange={set("email")} /></div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className={lCls} style={lSty}>Phone Number</label><input className={iCls} style={iSty} placeholder="+254 7xx xxx xxx" value={form.phone} onChange={set("phone")} /></div>
            <div>
              <label className={lCls} style={lSty}>Event Type</label>
              <select className={iCls} style={iSty} value={form.event} onChange={set("event")}>
                <option value="">Select…</option>
                {["Wedding","Corporate Event","Birthday / Private Party","Conference / Seminar","Product Launch","Custom / Other"].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className={lCls} style={lSty}>Number of Guests</label><input className={iCls} style={iSty} placeholder="e.g. 150" value={form.guests} onChange={set("guests")} /></div>
            <div><label className={lCls} style={lSty}>Preferred Date</label><input className={iCls} style={iSty} type="date" value={form.date} onChange={set("date")} /></div>
          </div>
          <div className="mb-6">
            <label className={lCls} style={lSty}>Additional Details</label>
            <textarea className={iCls} style={{ ...iSty, height: "120px", resize: "vertical" }} placeholder="Dietary requirements, venue, package preference, special requests…" value={form.message} onChange={set("message")} />
          </div>
          <button
            className="w-full font-mono text-[11px] tracking-[0.3em] border-0 py-5 rounded cursor-pointer hover:opacity-85 transition-opacity font-bold"
            style={{ background: DARK, color: CREAM, boxShadow: "0 8px 32px rgba(122,14,32,0.25)" }}
            onClick={submit}
          >Send Enquiry →</button>
        </div>

        {/* Sidebar info */}
        <div className="pt-2">
          {[
            ["📞","Phone","+254 722 116 085\n+254 739 968 828"],
            ["✉️","Email","tastyspicescatering@gmail.com"],
            ["🌍","Service Area","Nairobi & Surrounding Regions"],
            ["🕐","Response Time","Within 48 business hours"]
          ].map(([icon, label, val]) => (
            <div key={label} className="flex items-start py-5" style={{ borderBottom: "1px solid rgba(42,26,10,0.08)" }}>
              <span className="text-xl mr-4 mt-0.5">{icon}</span>
              <div>
                <div className="font-mono text-[9px] tracking-[0.35em] mb-1" style={{ color: "rgba(42,26,10,0.4)" }}>{label}</div>
                <div className="text-[14px] leading-relaxed whitespace-pre-line" style={{ color: "rgba(42,26,10,0.75)" }}>{val}</div>
              </div>
            </div>
          ))}

          <div className="mt-8 p-6 rounded-xl" style={{ background: DARK }}>
            <div className="font-mono text-[9px] tracking-[0.4em] mb-3" style={{ color: "rgba(201,168,76,0.65)" }}>NOTE ON PACKAGES</div>
            <p className="text-[12px] leading-relaxed" style={{ color: "rgba(245,237,224,0.5)" }}>
              Free Kids Menu (50 Pax) for guests above 300 Pax — inclusive of table set up. Prices vary by guest count and package tier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;