import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Play, Pause, Disc } from 'lucide-react';

export default function MusicPlayer({ isAutoPlayTriggered }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const playerRef = useRef(null);
  const iframeRef = useRef(null);

  const videoId = 'Jk-nOtP-go4';

  useEffect(() => {
    if (isAutoPlayTriggered) {
      playMusic();
    }
  }, [isAutoPlayTriggered]);

  const playMusic = () => {
    setIsPlaying(true);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
        '*'
      );
    }
  };

  const pauseMusic = () => {
    setIsPlaying(false);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
        '*'
      );
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const command = nextMute ? 'mute' : 'unMute';
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
    }
  };

  return (
    <>
      {/* Hidden YouTube IFrame Audio Engine */}
      <div className="hidden pointer-events-none opacity-0 invisible" aria-hidden="true">
        <iframe
          ref={iframeRef}
          id="yt-music-player"
          width="100"
          height="100"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=1&loop=1&playlist=${videoId}&controls=0&playsinline=1&origin=${window.location.origin}`}
          title="Background Wedding Song"
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Floating Aesthetic Music Control Bar */}
      <div className="fixed bottom-6 right-6 z-50 transition-all duration-300">
        <div className="flex items-center gap-3 bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E5C384]/60 p-2.5 pr-4 rounded-full shadow-2xl shadow-[#C5A059]/20 hover:border-[#C5A059] transition-all">
          {/* Vinyl Record / Spinning Disc Icon */}
          <button
            onClick={togglePlay}
            aria-label="Toggle background music"
            className={`relative flex items-center justify-center w-10 h-10 rounded-full bg-[#8B263E] text-[#FAF7F2] shadow-md transition-transform active:scale-95 ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          >
            <Disc className="w-6 h-6" />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </div>
            )}
          </button>

          {/* Song Details & Animated Equalizer */}
          <div className="flex flex-col text-left">
            <span className="font-cinzel text-[10px] tracking-widest uppercase text-[#9A7B38] font-bold">
              Background Song
            </span>
            <span className="font-serif-display text-xs font-semibold text-[#2C2623] truncate max-w-[130px] sm:max-w-[170px]">
              Minni Minni — Male Cover
            </span>
          </div>

          {/* Soundwave animation when playing */}
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-4 px-1">
              <span className="w-1 bg-[#8B263E] rounded-full animate-bar-1" />
              <span className="w-1 bg-[#C5A059] rounded-full animate-bar-2" />
              <span className="w-1 bg-[#8B263E] rounded-full animate-bar-3" />
            </div>
          ) : (
            <span className="text-[10px] text-gray-400 italic">Paused</span>
          )}

          {/* Mute / Unmute Button */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            className="p-1.5 text-[#8B263E] hover:text-[#C5A059] transition-colors ml-1"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </>
  );
}
