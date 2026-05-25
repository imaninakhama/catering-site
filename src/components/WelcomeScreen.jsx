import { DARK, CREAM, GOLD, PARCH } from '../data/constants';
import { useState, useRef } from 'react';

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: DARK }}
      onMouseMove={onMove}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, ${GOLD} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

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
        className="relative overflow-hidden rounded-2xl cursor-pointer"
        style={{
          width: 460,
          background:
            'linear-gradient(160deg, #3D0B14 0%, #5C1020 50%, #3D0B14 100%)',
          border: '1px solid rgba(201,168,76,0.4)',
          padding: '52px 48px 44px',
          boxShadow:
            '0 60px 140px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.1) inset',
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
        <div
          className="absolute top-0 left-[8%] right-[8%] h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          }}
        />

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
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className="h-px flex-1"
              style={{ background: 'rgba(201,168,76,0.3)' }}
            />

            <span className="text-3xl">🍴</span>

            <div
              className="h-px flex-1"
              style={{ background: 'rgba(201,168,76,0.3)' }}
            />
          </div>

          <div
            className="font-mono text-[10px] tracking-[0.5em] mb-3"
            style={{ color: 'rgba(201,168,76,0.7)' }}
          >
            WELCOME TO
          </div>

          <h1 className="leading-none mb-1">
            <span
              className="block text-[52px] font-bold tracking-wide uppercase"
              style={{ color: CREAM }}
            >
              TASTY
            </span>

            <span
              className="block text-[26px] italic font-normal"
              style={{
                color: GOLD,
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.08em',
              }}
            >
              Spices & Catering
            </span>
          </h1>

          <div
            className="font-mono text-[9px] tracking-[0.55em] mt-3"
            style={{ color: 'rgba(201,168,76,0.55)' }}
          >
            · SERVICES ·
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-7">
          <div
            className="h-px flex-1"
            style={{ background: 'rgba(201,168,76,0.2)' }}
          />

          <span className="italic text-lg" style={{ color: GOLD }}>
            The Difference
          </span>

          <div
            className="h-px flex-1"
            style={{ background: 'rgba(201,168,76,0.2)' }}
          />
        </div>

        <p
          className="text-center text-[15px] leading-relaxed mb-7"
          style={{ color: 'rgba(245,237,224,0.55)' }}
        >
          Corporate · Personal · Custom
          <br />

          <span
            className="text-xs tracking-wider"
            style={{ color: 'rgba(245,237,224,0.3)' }}
          >
            An experience like no other
          </span>
        </p>

        {/* Pills */}
        <div className="flex gap-2 justify-center flex-wrap mb-8">
          {['Corporate', 'Personal', 'Custom'].map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] tracking-[0.3em] px-4 py-1.5 rounded-full border"
              style={{
                color: 'rgba(201,168,76,0.9)',
                borderColor: 'rgba(201,168,76,0.25)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          className="w-full flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.3em] rounded-lg py-4 mb-4 border-0 cursor-pointer transition-opacity hover:opacity-85"
          style={{
            background: `linear-gradient(135deg, ${GOLD}, #A07828)`,
            color: '#2A1A0A',
            fontWeight: 700,
          }}
          onClick={(e) => {
            e.stopPropagation();
            onEnter();
          }}
        >
          Enter the Experience →
        </button>

        <p
          className="text-center font-mono text-[9px] tracking-[0.25em]"
          style={{ color: 'rgba(245,237,224,0.2)' }}
        >
          ✦ click anywhere on the card ✦
        </p>

        <div
          className="absolute bottom-0 left-[15%] right-[15%] h-0.5 rounded"
          style={{
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          }}
        />
      </div>

      {/* Corner labels */}
      <div
        className="absolute bottom-7 left-10 font-mono text-[9px] tracking-[0.25em]"
        style={{
          color: 'rgba(201,168,76,0.4)',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.5s 1s',
        }}
      >
        NAIROBI, KENYA
      </div>

      <div
        className="absolute bottom-7 right-10 font-mono text-[9px] tracking-[0.25em] text-right"
        style={{
          color: 'rgba(201,168,76,0.4)',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.5s 1s',
        }}
      >
        EST. 2019
      </div>
    </div>
  );
}