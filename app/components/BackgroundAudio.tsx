"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

// Audio tracks for different pages
const TRACKS: Record<string, string> = {
  "/": "/bgmusic.mp3", // Forest/Birds
  "/about": "/bgmusic.mp3", // Jungle/Nature
  "/safari": "/bgmusic.mp3",
  "/work": "/bgmusic.mp3",
  "/contact": "/bgmusic.mp3", // Using Forest for Safari too for now
};

const DEFAULT_TRACK = "/bgmusic.mp3";
const MAX_VOLUME = 0.5;
const FADE_DURATION = 1500; // 1.5 seconds
const TOTAL_DURATION = 15000; // 5 seconds total play time

export default function BackgroundAudio() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false); 
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || isMuted) return;

    let fadeInInterval: NodeJS.Timeout;
    let fadeOutInterval: NodeJS.Timeout;
    let stopTimeout: NodeJS.Timeout;

    const runFadeSequence = () => {
        // Reset and start
        audio.currentTime = 0;
        audio.volume = 0;
        
        // Fade In
        let currentVol = 0;
        const step = MAX_VOLUME / (FADE_DURATION / 50);
        
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
        }, TOTAL_DURATION - FADE_DURATION);
    };

    const playSequence = async () => {
      // Set track
      const trackUrl = TRACKS[pathname] || DEFAULT_TRACK;
      if (audio.src !== trackUrl) {
        audio.src = trackUrl;
        audio.load(); // Ensure new source is loaded
      }

      try {
        await audio.play();
        runFadeSequence();
      } catch (err) {
        console.log("Autoplay blocked by browser policy. Waiting for user interaction.", err);
        
        const forcePlay = () => {
          audio.play().then(() => {
            runFadeSequence();
            // Remove all listeners once successful
            document.removeEventListener("click", forcePlay);
            document.removeEventListener("mousemove", forcePlay);
            document.removeEventListener("touchstart", forcePlay);
            document.removeEventListener("scroll", forcePlay);
            document.removeEventListener("wheel", forcePlay);
            document.removeEventListener("keydown", forcePlay);
          }).catch(e => console.error("Force play failed", e));
        };

        // Add multiple passive listeners to catch any user activity
        document.addEventListener("click", forcePlay, { once: true });
        document.addEventListener("mousemove", forcePlay, { once: true });
        document.addEventListener("touchstart", forcePlay, { once: true });
        document.addEventListener("scroll", forcePlay, { once: true });
        document.addEventListener("wheel", forcePlay, { once: true });
        document.addEventListener("keydown", forcePlay, { once: true });
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
        autoPlay
      />
      
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 p-2 md:p-3 rounded-full bg-black/50 backdrop-blur-md border border-[#F7E07E]/30 text-[#F7E07E] hover:bg-black/70 hover:scale-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(247,224,126,0.2)]"
            onClick={toggleMute}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6" />}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
