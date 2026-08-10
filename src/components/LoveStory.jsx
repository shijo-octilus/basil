import React from 'react';
import { Heart, Gem, Sparkles, Church, Coffee } from 'lucide-react';

export default function LoveStory() {
  const milestones = [
    {
      year: 'CHAPTER I',
      title: 'Where It Began',
      description: 'Our paths crossed quietly, turning a simple acquaintance into a deep, unwavering connection.',
      icon: Sparkles
    },
    {
      year: 'CHAPTER II',
      title: 'The Promise',
      description: 'A heartfelt "Yes" transformed a cherished bond into a lifelong commitment of love and trust.',
      icon: Heart
    },
    {
      year: 'CHAPTER III',
      title: 'Building Our Story',
      description: 'Growing together through life’s seasons, guided by shared values, family love, and abiding faith.',
      icon: Coffee
    },
    {
      year: 'CHAPTER IV',
      title: 'Our Engagement',
      description: 'Surrounded by the warmth and prayers of our families, we exchanged rings and pledged forever.',
      icon: Gem
    },
    {
      year: 'CHAPTER V',
      title: 'Two Hearts, One Covenant',
      description: 'Now, as two families unite, we joyfully step into Holy Matrimony to begin our forever journey.',
      icon: Church
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 bg-[#F3ECE1]/40 border-t border-[#E5C384]/40">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Header */}
        <span className="font-cinzel text-xs tracking-widest text-[#9A7B38] font-bold uppercase block mb-1">
          OUR JOURNEY
        </span>
        <h2 className="font-script text-5xl sm:text-6xl text-[#8B263E] my-1">
          Where It All Began
        </h2>
        <div className="flex items-center justify-center gap-3 my-4">
          <span className="h-px w-12 bg-[#E5C384]" />
          <span className="text-[#C5A059] text-sm">❀</span>
          <span className="h-px w-12 bg-[#E5C384]" />
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12 max-w-xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#E5C384] via-[#8B263E]/40 to-[#E5C384] -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const IconComp = item.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full sm:w-[calc(50%-3rem)] bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-[#E5C384]/50 shadow-md text-left">
                    <span className="font-cinzel text-[10px] tracking-widest text-[#9A7B38] font-bold uppercase block">
                      {item.year}
                    </span>
                    <h3 className="font-serif-display text-xl font-bold text-[#8B263E] mt-0.5">
                      {item.title}
                    </h3>
                    <p className="font-serif-display italic text-xs sm:text-sm text-[#2C2623]/80 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Icon Node Center */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FAF7F2] border-2 border-[#C5A059] shadow-md flex items-center justify-center text-[#8B263E] shrink-0 z-10">
                    <IconComp className="w-5 h-5 text-[#8B263E]" />
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden sm:block w-[calc(50%-3rem)]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
