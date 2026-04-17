"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MediaItem } from "../../data";

interface ProductGalleryProps {
  media: MediaItem[];
}

export default function ProductGallery({ media }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentMedia = media[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Reset play state when changing media
  useEffect(() => {
    setIsPlaying(false);
  }, [currentIndex]);

  return (
    <div className="space-y-12">
      {/* Main Media Container - Full Width */}
      <div className="relative h-[500px] md:h-[750px] w-full group overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            {currentMedia.type === "video" ? (
              <video
                ref={videoRef}
                src={currentMedia.url}
                className="w-full h-full object-cover"
                loop
                muted={false}
                playsInline
                onClick={togglePlay}
              />
            ) : (
              <img
                src={currentMedia.url}
                className="w-full h-full object-cover"
                alt="Product"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer z-20 group/btn"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-10 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer z-20 group/btn"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Play/Pause Overlay - Only for Video */}
        {currentMedia.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={togglePlay}
              className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl pointer-events-auto cursor-pointer transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-10 h-10 text-black fill-current" />
              ) : (
                <Play className="w-10 h-10 text-black fill-current ml-2" />
              )}
            </motion.button>
          </div>
        )}
      </div>

      {/* Thumbnails - Contained in container */}
      <div className="container mx-auto px-6 flex justify-center gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {media.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative min-w-[120px] md:min-w-[180px] h-24 md:h-32 rounded-sm overflow-hidden border-2 transition-all cursor-pointer ${
              currentIndex === idx ? "border-primary" : "border-transparent opacity-40 hover:opacity-100"
            }`}
          >
            <img 
              src={item.thumbnail || item.url} 
              className="w-full h-full object-cover" 
              alt={`Thumb ${idx}`}
            />
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
