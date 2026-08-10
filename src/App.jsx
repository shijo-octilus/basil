import React, { useState } from 'react';
import EnvelopeModal from './components/EnvelopeModal';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import Countdown from './components/Countdown';
import InvitationCardModal from './components/InvitationCardModal';
import EventSchedule from './components/EventSchedule';
import LoveStory from './components/LoveStory';
import PhotoGallery from './components/PhotoGallery';
import FamilySection from './components/FamilySection';
import PetalEffect from './components/PetalEffect';
import Footer from './components/Footer';

export default function App() {
  const [isMusicAutoPlayed, setIsMusicAutoPlayed] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsMusicAutoPlayed(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#2C2623] overflow-x-hidden selection:bg-[#E5C384]/30 selection:text-[#8B263E]">
      {/* Floating Petal Effect */}
      <PetalEffect />

      {/* Opening Animated Envelope Screen */}
      <EnvelopeModal onOpen={handleEnvelopeOpen} />

      {/* Background YouTube Audio Controller Widget */}
      <MusicPlayer isAutoPlayTriggered={isMusicAutoPlayed} />

      {/* Hero Banner Section */}
      <HeroSection
        onOpenCardModal={() => setIsCardModalOpen(true)}
      />

      {/* Live Countdown & Calendar Saver */}
      <Countdown />

      {/* Event Schedule (Kanniyambetta Church & Bichas Auditorium) */}
      <EventSchedule />

      {/* Love Story Timeline */}
      <LoveStory />

      {/* Memories Photo Gallery */}
      <PhotoGallery />

      {/* Family Tree & Best Wishes */}
      <FamilySection />

      {/* Page Footer */}
      <Footer />

      {/* High Res Original Card Modal */}
      <InvitationCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
      />
    </div>
  );
}
