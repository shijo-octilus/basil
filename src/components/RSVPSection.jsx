import React, { useState } from 'react';
import { Send, CheckCircle, Heart, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    guests: 1,
    attendingCeremony: 'yes',
    attendingFeast: 'yes',
    wishes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save response locally
    const existing = JSON.parse(localStorage.getItem('basil_ansa_rsvps') || '[]');
    existing.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('basil_ansa_rsvps', JSON.stringify(existing));

    // Trigger golden confetti explosion
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8B263E', '#C5A059', '#E5C384']
      });
    } catch (err) {
      console.log(err);
    }

    setIsSubmitted(true);
  };

  // Generate direct WhatsApp RSVP text
  const hostPhoneNumber = '919876543210'; // Standard template link format
  const whatsappMessage = `Hi Basil & Ansa, %0A%0A*RSVP Confirmation*%0AName: ${encodeURIComponent(formData.name)}%0AGuests: ${formData.guests}%0AAttending Ceremony: ${formData.attendingCeremony === 'yes' ? 'Yes' : 'No'}%0AAttending Feast: ${formData.attendingFeast === 'yes' ? 'Yes' : 'No'}%0AWishes: ${encodeURIComponent(formData.wishes || 'Best Wishes!')}`;
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <section id="rsvp" className="relative py-16 px-4 sm:px-6 bg-[#F3ECE1]/50 border-t border-[#E5C384]/40">
      <div className="max-w-xl mx-auto text-center">
        
        <span className="font-cinzel text-xs tracking-widest text-[#9A7B38] font-bold uppercase block mb-1">
          KINDLY RESPOND
        </span>
        <h2 className="font-script text-5xl sm:text-6xl text-[#8B263E] my-1">
          Will You Be Joining Us?
        </h2>
        <p className="font-serif-display italic text-sm text-[#2C2623]/80 mb-8">
          Please confirm your presence by filling out the form below.
        </p>

        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-8 border-2 border-[#E5C384] shadow-2xl space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#8B263E] text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-[#8B263E]">
              Thank You, {formData.name}!
            </h3>
            <p className="font-serif-display italic text-sm text-[#2C2623]/90 leading-relaxed">
              Your RSVP has been successfully recorded. We look forward to celebrating this joyful day with you!
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-cinzel text-xs font-bold tracking-wider shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Send RSVP via WhatsApp
              </a>

              <button
                onClick={() => setIsSubmitted(false)}
                className="py-3 px-6 rounded-full bg-white hover:bg-gray-100 text-[#2C2623] border border-gray-300 font-cinzel text-xs font-semibold"
              >
                Edit Response
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#E5C384]/60 shadow-xl space-y-6 text-left"
          >
            {/* Full Name */}
            <div>
              <label className="font-cinzel text-xs font-bold text-[#9A7B38] uppercase block mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ebina & Family"
                className="w-full font-serif-display text-base border-b-2 border-[#E5C384]/60 pb-2 focus:outline-none focus:border-[#8B263E] bg-transparent transition-colors"
              />
            </div>

            {/* Guest Count */}
            <div>
              <label className="font-cinzel text-xs font-bold text-[#9A7B38] uppercase block mb-1">
                Number of Guests Attending
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full font-serif-display text-base border-b-2 border-[#E5C384]/60 pb-2 focus:outline-none focus:border-[#8B263E] bg-transparent cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Attendance Radios */}
            <div className="space-y-4 pt-2 border-t border-gray-100">
              <div>
                <span className="font-cinzel text-xs font-bold text-[#2C2623] block mb-2">
                  Holy Marriage Ceremony (8:00 AM)
                </span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer font-serif-display text-sm">
                    <input
                      type="radio"
                      name="attendingCeremony"
                      value="yes"
                      checked={formData.attendingCeremony === 'yes'}
                      onChange={handleChange}
                      className="accent-[#8B263E]"
                    />
                    Joyfully Attending
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-serif-display text-sm">
                    <input
                      type="radio"
                      name="attendingCeremony"
                      value="no"
                      checked={formData.attendingCeremony === 'no'}
                      onChange={handleChange}
                      className="accent-[#8B263E]"
                    />
                    Regretfully Regret
                  </label>
                </div>
              </div>

              <div>
                <span className="font-cinzel text-xs font-bold text-[#2C2623] block mb-2">
                  Wedding Feast & Reception (12:00 PM)
                </span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer font-serif-display text-sm">
                    <input
                      type="radio"
                      name="attendingFeast"
                      value="yes"
                      checked={formData.attendingFeast === 'yes'}
                      onChange={handleChange}
                      className="accent-[#8B263E]"
                    />
                    Joyfully Attending
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-serif-display text-sm">
                    <input
                      type="radio"
                      name="attendingFeast"
                      value="no"
                      checked={formData.attendingFeast === 'no'}
                      onChange={handleChange}
                      className="accent-[#8B263E]"
                    />
                    Regretfully Regret
                  </label>
                </div>
              </div>
            </div>

            {/* Wishes */}
            <div>
              <label className="font-cinzel text-xs font-bold text-[#9A7B38] uppercase block mb-1">
                Warm Wishes for the Couple
              </label>
              <textarea
                name="wishes"
                rows="3"
                value={formData.wishes}
                onChange={handleChange}
                placeholder="Write your prayers and blessings..."
                className="w-full font-serif-display text-sm border border-[#E5C384]/60 rounded-xl p-3 focus:outline-none focus:border-[#8B263E] bg-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#8B263E] hover:bg-[#681528] text-white font-cinzel text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#8B263E]/30 transition-all hover:scale-[1.01]"
            >
              Confirm RSVP
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
