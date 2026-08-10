import React, { useState } from 'react';
import { Mail, Sparkles, Heart } from 'lucide-react';

export default function EnvelopeModal({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    if (onOpen) onOpen();
    setTimeout(() => {
      setIsFading(true);
    }, 1000);
  };

  if (isFading) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#1A1615] overflow-hidden transition-opacity duration-1000 ${
        isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.15)_0%,_transparent_70%)]" />

      {/* Floating stars & glow */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#8B263E]/20 rounded-full blur-3xl animate-pulse" />

      {/* Envelope Card Container */}
      <div className="relative z-10 max-w-sm sm:max-w-md w-full px-6 flex flex-col items-center text-center">
        
        {/* Physical Envelope Illustration */}
        <div
          onClick={handleOpen}
          className="group cursor-pointer relative w-full aspect-[4/3] bg-[#FAF7F2] rounded-2xl shadow-2xl border-2 border-[#E5C384]/70 p-6 flex flex-col items-center justify-between transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Decorative Corner Borders */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C5A059]" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C5A059]" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C5A059]" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C5A059]" />

          {/* Envelope Top Header */}
          <div className="pt-2 flex flex-col items-center">
            <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-[#9A7B38]">
              Wedding Invitation
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-px w-8 bg-[#E5C384]" />
              <span className="text-[#C5A059] text-xs">✝</span>
              <span className="h-px w-8 bg-[#E5C384]" />
            </div>
          </div>

          {/* Envelope Center Couple Names */}
          <div className="my-auto">
            <h1 className="font-script text-5xl sm:text-6xl text-[#8B263E] leading-tight">
              Basil <span className="font-serif-display text-2xl italic text-[#C5A059]">&</span> Ansa
            </h1>
            <p className="font-serif-display italic text-sm text-[#2C2623]/80 mt-1">
              31st August 2026 • Monday
            </p>
          </div>

          {/* Golden Wax Stamp Button */}
          <div className="relative pb-2 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#C5A059] to-[#9A7B38] p-0.5 shadow-lg shadow-[#C5A059]/40 group-hover:scale-110 transition-transform">
              <div className="w-full h-full rounded-full bg-[#8B263E] flex items-center justify-center text-[#FAF7F2] font-cinzel text-xs font-bold border border-[#E5C384]/40">
                <Heart className="w-6 h-6 fill-[#FAF7F2] text-[#FAF7F2]" />
              </div>
            </div>
            <span className="font-cinzel text-[11px] tracking-widest uppercase text-[#8B263E] font-semibold mt-3 animate-pulse">
              Click to Open Invitation
            </span>
          </div>
        </div>

        {/* Ambient instruction text below */}
        <p className="font-serif-display italic text-xs text-[#E5C384]/70 mt-6 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" /> Turn sound on for full experience
        </p>
      </div>
    </div>
  );
}
