"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

// Audio tracks for different pages
const TRACKS: Record<string, string> = {
  "/": "/got.mp3", // Forest/Birds
  "/about": "https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3", // Jungle/Nature
  "/safari": "https://assets.mixkit.co/active_storage/sfx/2433/2433-preview.mp3", // Using Forest for Safari too for now
};

const DEFAULT_TRACK = "https://assets.mixkit.co/active_storage/sfx/2433/2433-preview.mp3";
const MAX_VOLUME = 0.1;
const FADE_DURATION = 2000; // 1 second
const TOTAL_DURATION = 5000; // 5 seconds total play time

export default function BackgroundAudio() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false); 

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || isMuted) return;

    let fadeInInterval: NodeJS.Timeout;
    let fadeOutInterval: NodeJS.Timeout;
    let stopTimeout: NodeJS.Timeout;

    const playSequence = async () => {
      // Set track
      const trackUrl = TRACKS[pathname] || DEFAULT_TRACK;
      if (audio.src !== trackUrl) {
        audio.src = trackUrl;
      }

      // Reset state
      audio.currentTime = 0;
      audio.volume = 0;

      try {
        await audio.play();

        // Fade In
        let currentVol = 0;
        const step = MAX_VOLUME / (FADE_DURATION / 50); // Calculate step size based on duration
        
        fadeInInterval = setInterval(() => {
          currentVol = Math.min(MAX_VOLUME, currentVol + step);
          audio.volume = currentVol;
          if (currentVol >= MAX_VOLUME) clearInterval(fadeInInterval);
        }, 50);

        // Schedule Fade Out
        stopTimeout = setTimeout(() => {
          let outVol = audio.volume;
          fadeOutInterval = setInterval(() => {
            outVol = Math.max(0, outVol - step);
            audio.volume = outVol;
            if (outVol <= 0) {
              audio.pause();
              clearInterval(fadeOutInterval);
            }
          }, 50);
        }, TOTAL_DURATION - FADE_DURATION); // Start fading out before end

      } catch (err) {
        console.error("Audio playback failed:", err);
      }
    };

    playSequence();

    return () => {
      clearInterval(fadeInInterval);
      clearInterval(fadeOutInterval);
      clearTimeout(stopTimeout);
      if (audio) {
        audio.pause();
        audio.volume = 0;
      }
    };
  }, [pathname, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        preload="auto"
      />
      
      <motion.button
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black/50 backdrop-blur-md border border-[#F7E07E]/30 text-[#F7E07E] hover:bg-black/70 hover:scale-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(247,224,126,0.2)]"
        onClick={toggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </motion.button>
    </>
  );
}
