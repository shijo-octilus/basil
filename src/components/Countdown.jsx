import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export default function Countdown() {
  const targetDate = new Date('2026-08-31T08:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Google Calendar Integration Link Generator
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Basil & Ansa Wedding'
  )}&dates=20260831T023000Z/20260831T103000Z&details=${encodeURIComponent(
    'Join us for the Holy Matrimony of Basil & Ansa at St. George Jacobite Syrian Church Kanniyambetta, followed by Feast at Bichas Auditorium.'
  )}&location=${encodeURIComponent(
    'St. George Jacobite Syrian Church, Kanniyambetta, Wayanad'
  )}`;

  return (
    <section className="relative py-12 px-4 sm:px-6 bg-[#F3ECE1]/60 border-y border-[#E5C384]/40 text-center">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-px w-12 bg-[#E5C384]" />
          <span className="font-cinzel text-xs tracking-widest text-[#9A7B38] font-bold uppercase">
            SAVE THE DATE
          </span>
          <span className="h-px w-12 bg-[#E5C384]" />
        </div>

        <h2 className="font-script text-5xl sm:text-6xl text-[#8B263E] my-1">
          Counting Down To Forever
        </h2>
        
        <p className="font-serif-display italic text-sm text-[#2C2623]/80 mb-8">
          Monday, 31st August 2026 • 8:00 AM IST
        </p>

        {/* Counter Display Cards */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds }
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white border border-[#E5C384]/60 shadow-md shadow-[#C5A059]/10"
            >
              <span className="font-cinzel text-2xl sm:text-4xl text-[#8B263E] font-bold tabular-nums">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[9px] sm:text-[11px] tracking-widest text-[#9A7B38] font-semibold mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Add to Google Calendar Action */}
        <div className="mt-8 flex justify-center">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#8B263E] border border-[#E5C384] font-cinzel text-xs font-semibold shadow-sm transition-all hover:shadow-md hover:scale-105"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            Add to Google Calendar
          </a>
        </div>

      </div>
    </section>
  );
}
