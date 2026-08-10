import React from 'react';
import { MapPin, Clock, Utensils, Church, Navigation, ExternalLink, Heart } from 'lucide-react';

export default function EventSchedule() {
  const events = [
    {
      title: 'Holy Engagement',
      subtitle: 'Ring Ceremony & Prayers',
      time: '11:00 AM IST',
      day: 'Monday, 24th August 2026',
      venue: 'St. Peter’s Orthodox Valiya Palli',
      location: 'Meenangadi, Wayanad',
      icon: Heart,
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=St.+Peter%27s+Orthodox+Valiya+Palli+Meenangadi',
      image: '/images/gallery-1.jpg',
      badge: 'ENGAGEMENT'
    },
    {
      title: 'Holy Marriage Ceremony',
      subtitle: 'Nuptial Blessing',
      time: '8:00 AM IST',
      day: 'Monday, 31st August 2026',
      venue: 'St. George Jacobite Syrian Church',
      location: 'Kanniyambetta, Wayanad',
      icon: Church,
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=St.+George+Jacobite+Syrian+Church+Kanniyambetta',
      image: '/images/church-bg.jpg',
      badge: 'NUPTIALS'
    },
    {
      title: 'Wedding Feast & Reception',
      subtitle: 'Grand Celebration',
      time: '12:00 PM Onwards',
      day: 'Monday, 31st August 2026',
      venue: 'Bichas Auditorium',
      location: 'Millumukku, Wayanad',
      icon: Utensils,
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bichas+Auditorium+Millumukku',
      image: '/images/couple-portrait.jpg',
      badge: 'FEAST'
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-px w-12 bg-[#E5C384]" />
          <span className="font-cinzel text-xs tracking-widest text-[#9A7B38] font-bold uppercase">
            CELEBRATION DETAILS
          </span>
          <span className="h-px w-12 bg-[#E5C384]" />
        </div>

        <h2 className="font-script text-5xl sm:text-6xl text-[#8B263E] my-1">
          Events Schedule
        </h2>
        
        <p className="font-serif-display italic text-sm sm:text-base text-[#2C2623]/80 mb-12 max-w-lg mx-auto">
          We request the honour of your gracious presence to bless our new beginning.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => {
            const IconComponent = event.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl border border-[#E5C384]/60 shadow-xl overflow-hidden flex flex-col text-left transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image Header with Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-[#1A1615]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#8B263E] text-white font-cinzel text-[10px] font-bold tracking-widest uppercase">
                    {event.badge}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                    <IconComponent className="w-5 h-5 text-[#E5C384]" />
                    <h3 className="font-serif-display text-xl font-bold">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-3">
                    {/* Time & Day */}
                    <div className="flex items-center gap-3 text-[#8B263E]">
                      <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <div>
                        <span className="font-cinzel text-xs font-bold text-[#2C2623]">
                          {event.time}
                        </span>
                        <span className="font-serif-display text-xs text-[#2C2623]/70 block font-semibold">
                          {event.day}
                        </span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3 text-[#2C2623]">
                      <MapPin className="w-4 h-4 text-[#8B263E] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-serif-display text-base font-bold block text-[#8B263E]">
                          {event.venue}
                        </span>
                        <span className="font-serif-display text-xs text-[#2C2623]/80 italic">
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Get Directions Button */}
                  <div className="pt-2">
                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#8B263E] hover:bg-[#681528] text-white font-cinzel text-xs font-semibold tracking-wider transition-all shadow-md group-hover:shadow-lg"
                    >
                      <Navigation className="w-4 h-4 text-[#E5C384]" />
                      Get Directions
                      <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
