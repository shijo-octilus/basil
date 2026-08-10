import React from 'react';
import { FileText, Heart } from 'lucide-react';

export default function HeroSection({ onOpenCardModal }) {
  return (
    <section className="relative w-full pt-12 pb-16 px-4 sm:px-6 overflow-hidden text-center bg-[#FAF7F2]">
      {/* Background Subtle Floral & Arch Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[radial-gradient(ellipse_at_top,_rgba(229,195,132,0.25)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Holy Cross Symbol */}
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#E5C384] shadow-sm text-[#C5A059]">
          <span className="text-xl font-serif">✝</span>
        </div>

        <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-[#9A7B38] font-semibold">
          Solacing Blessings of Almighty
        </p>

        {/* Formal Invitation Text Box */}
        <div className="mt-4 max-w-lg bg-white/80 backdrop-blur-sm border border-[#E5C384]/40 rounded-2xl px-6 py-4 shadow-sm">
          <p className="font-serif-display text-sm sm:text-base italic text-[#2C2623] leading-relaxed">
            "Together with our families, we joyfully invite you to celebrate the holy matrimony of our children"
          </p>
        </div>

        {/* Couple Names Header */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          
          {/* Groom Block */}
          <div className="flex flex-col items-center text-center">
            <span className="font-cinzel text-[11px] tracking-widest text-[#9A7B38] uppercase font-bold">
              GROOM
            </span>
            <h1 className="font-script text-6xl sm:text-7xl text-[#8B263E] my-1 drop-shadow-sm">
              Basil
            </h1>
            <p className="font-serif-display text-xs sm:text-sm text-[#2C2623]/90 font-medium">
              S/O Eldho & Bindu
            </p>
            <p className="font-serif-display text-xs text-[#2C2623]/70 italic">
              Chirrappattu House, Cheekckalloor
            </p>
          </div>

          {/* Golden Interlocking Heart / "with" */}
          <div className="flex flex-col items-center my-2 sm:my-0">
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E5C384] flex items-center justify-center text-[#8B263E] shadow-sm">
              <Heart className="w-5 h-5 fill-[#8B263E]" />
            </div>
            <span className="font-script text-3xl text-[#C5A059] mt-1">with</span>
          </div>

          {/* Bride Block */}
          <div className="flex flex-col items-center text-center">
            <span className="font-cinzel text-[11px] tracking-widest text-[#9A7B38] uppercase font-bold">
              BRIDE
            </span>
            <h1 className="font-script text-6xl sm:text-7xl text-[#8B263E] my-1 drop-shadow-sm">
              Ansa
            </h1>
            <p className="font-serif-display text-xs sm:text-sm text-[#2C2623]/90 font-medium">
              D/O Roy & Sheeja
            </p>
            <p className="font-serif-display text-xs text-[#2C2623]/70 italic">
              Kallapara House, Kappikunnu, Meenangadi
            </p>
          </div>
        </div>

        {/* Featured Couple Portrait Card */}
        <div className="mt-10 relative group w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-[#C5A059]/25 transition-transform duration-500 hover:scale-[1.01]">
          <img
            src="/images/couple-portrait.jpg"
            alt="Basil & Ansa"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-left">
            <span className="font-cinzel text-xs tracking-widest text-[#E5C384] font-semibold">
              31ST AUGUST 2026
            </span>
            <h3 className="font-script text-4xl text-white mt-0.5">
              Basil & Ansa
            </h3>
            <p className="font-serif-display italic text-xs text-white/90">
              St. George Jacobite Syrian Church, Kanniyambetta
            </p>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={onOpenCardModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#8B263E] hover:bg-[#681528] text-white font-cinzel text-xs font-semibold tracking-wider shadow-lg shadow-[#8B263E]/30 transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            View Invitation Card
          </button>
        </div>

      </div>
    </section>
  );
}
