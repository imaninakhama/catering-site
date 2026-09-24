import { useState, useRef } from 'react';
import homepagephoto from '../assets/homepagephoto.jpeg';

export default function WelcomeScreen({ mounted, leaving, onEnter }) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const ref = useRef(null);

  const onMove = (e) => {
    if (!ref.current) return;

    const r = ref.current.getBoundingClientRect();

    setMouse({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <div
      className="min-h-svh flex items-center justify-center relative overflow-hidden bg-night px-4 py-16"
      onMouseMove={onMove}
    >
      {/* Food photo backdrop */}
      <img
        src={homepagephoto}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: mounted ? 'scale(1)' : 'scale(1.08)',
          transition: 'transform 2.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-night/80 via-wine/75 to-night/90" />

      {/* Mouse glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 60% 60% at ${mouse.x}% ${mouse.y}%,
            rgba(201,168,76,0.18) 0%,
            transparent 70%
          )`,
          transition: 'background 0.08s ease',
        }}
      />

      {/* Card */}
      <div
        ref={ref}
        onClick={onEnter}
        className="relative w-full max-w-115 overflow-hidden rounded-2xl cursor-pointer px-6 py-10 sm:px-12 sm:pt-13 sm:pb-11"
        style={{
          background: 'linear-gradient(160deg, rgba(61,11,20,0.92) 0%, rgba(92,16,32,0.92) 50%, rgba(61,11,20,0.92) 100%)',
          border: '1px solid rgba(201,168,76,0.4)',
          boxShadow: '0 60px 140px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.1) inset',
          backdropFilter: 'blur(6px)',
          opacity: mounted ? 1 : 0,
          transform: mounted
            ? leaving
              ? 'scale(0.84) rotateX(12deg)'
              : 'translateY(0)'
            : 'translateY(40px)',
          transition: leaving
            ? 'transform 0.75s cubic-bezier(0.4,0,1,1), opacity 0.55s ease, filter 0.55s ease'
            : 'transform 1s cubic-bezier(0.16,1,0.3,1) 0.1s, opacity 0.8s ease 0.1s',
          filter: leaving ? 'blur(4px)' : 'none',
        }}
      >
        {/* Top gold line */}
        <div className="absolute top-0 left-[8%] right-[8%] h-px bg-linear-to-r from-transparent via-gold to-transparent" />

        {/* Mouse spotlight */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(
              circle 300px at ${mouse.x}% ${mouse.y}%,
              rgba(201,168,76,0.1) 0%,
              transparent 70%
            )`,
          }}
        />

        {/* Logo area */}
        <div className="relative text-center mb-8">
          <div className="eyebrow text-gold/80 mb-4">Welcome to</div>

          <h1 className="leading-none">
            <span className="block font-display text-[clamp(52px,14vw,68px)] font-extrabold tracking-[0.08em] text-cream">
              TASTY
            </span>
            <span className="block font-display italic text-[clamp(22px,6vw,28px)] text-gold mt-1">
              Spices & Catering
            </span>
          </h1>

          <div className="eyebrow text-gold/55 mt-3 tracking-[0.5em]!">Services</div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gold/25" />
          <span className="font-display italic text-lg text-gold">The Difference</span>
          <div className="h-px flex-1 bg-gold/25" />
        </div>

        <p className="relative text-center text-[15px] leading-relaxed mb-7 text-cream/60">
          An experience like no other
        </p>

        {/* Pills */}
        <div className="relative flex gap-2 justify-center flex-wrap mb-8">
          {['Corporate', 'Personal', 'Custom'].map((t) => (
            <span key={t} className="eyebrow text-[10px]! text-gold/90 px-4 py-1.5 rounded-full border border-gold/30">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          className="relative btn-gold w-full py-4! mb-4"
          onClick={(e) => {
            e.stopPropagation();
            onEnter();
          }}
        >
          Enter the Experience →
        </button>

        <p className="relative text-center text-[12px] text-cream/35">
          or click anywhere on the card
        </p>

        <div className="absolute bottom-0 left-[15%] right-[15%] h-0.5 rounded bg-linear-to-r from-transparent via-gold to-transparent" />
      </div>

      {/* Corner labels */}
      <div
        className="absolute bottom-5 left-4 sm:bottom-7 sm:left-10 eyebrow text-[10px]! text-gold/60"
        style={{ opacity: mounted ? 1 : 0, transition: 'opacity 1.5s 1s' }}
      >
        Nairobi, Kenya
      </div>

      <div
        className="absolute bottom-5 right-4 sm:bottom-7 sm:right-10 eyebrow text-[10px]! text-gold/60 text-right"
        style={{ opacity: mounted ? 1 : 0, transition: 'opacity 1.5s 1s' }}
      >
        Est. 2019
      </div>
    </div>
  );
}
