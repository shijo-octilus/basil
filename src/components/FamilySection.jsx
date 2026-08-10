import React from 'react';
import { Heart, Sparkles, Home } from 'lucide-react';

export default function FamilySection() {
  return (
    <section className="relative py-16 px-4 sm:px-6 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto text-center">
        
        <span className="font-cinzel text-xs tracking-widest text-[#9A7B38] font-bold uppercase block mb-1">
          WITH LOVE & BLESSINGS
        </span>
        <h2 className="font-script text-5xl sm:text-6xl text-[#8B263E] my-1">
          The Families
        </h2>
        <div className="flex items-center justify-center gap-3 my-3">
          <span className="h-px w-12 bg-[#E5C384]" />
          <span className="text-[#C5A059] text-sm">❀</span>
          <span className="h-px w-12 bg-[#E5C384]" />
        </div>

        {/* Family Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          
          {/* Groom's Family */}
          <div className="bg-white/80 backdrop-blur-sm border border-[#E5C384]/60 rounded-3xl p-8 shadow-xl text-center flex flex-col justify-between hover:border-[#C5A059] transition-all">
            <div>
              <span className="font-cinzel text-xs font-bold text-[#9A7B38] tracking-widest uppercase block mb-2">
                GROOM'S FAMILY
              </span>
              <h3 className="font-serif-display text-2xl font-bold text-[#8B263E]">
                Eldho & Bindu
              </h3>
              <p className="font-serif-display text-xs text-[#2C2623]/70 italic mt-1">
                Parents of Groom (Basil)
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-[#2C2623]/80">
                <Home className="w-4 h-4 text-[#C5A059]" />
                <span className="font-serif-display italic">
                  Chirrappattu House, Cheekckalloor
                </span>
              </div>
            </div>
          </div>

          {/* Bride's Family */}
          <div className="bg-white/80 backdrop-blur-sm border border-[#E5C384]/60 rounded-3xl p-8 shadow-xl text-center flex flex-col justify-between hover:border-[#C5A059] transition-all">
            <div>
              <span className="font-cinzel text-xs font-bold text-[#9A7B38] tracking-widest uppercase block mb-2">
                BRIDE'S FAMILY
              </span>
              <h3 className="font-serif-display text-2xl font-bold text-[#8B263E]">
                Roy & Sheeja
              </h3>
              <p className="font-serif-display text-xs text-[#2C2623]/70 italic mt-1">
                Parents of Bride (Ansa)
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-[#2C2623]/80">
                <Home className="w-4 h-4 text-[#C5A059]" />
                <span className="font-serif-display italic">
                  Kallapara House, Kappikunnu, Meenangadi
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Best Wishes Highlight */}
        <div className="mt-12 max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#F3ECE1] via-white to-[#F3ECE1] border border-[#E5C384] shadow-md">
          <span className="font-cinzel text-[10px] tracking-widest uppercase text-[#9A7B38] font-bold block mb-1">
            SPECIAL BEST WISHES
          </span>
          <h4 className="font-script text-4xl text-[#8B263E]">
            Ebina & Ribin
          </h4>
        </div>

      </div>
    </section>
  );
}
