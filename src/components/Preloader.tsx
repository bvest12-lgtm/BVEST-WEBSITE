'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onVideoEnd: () => void;
}

export default function Preloader({ onVideoEnd }: PreloaderProps) {
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          } 
        }}
      >
        <motion.video
          autoPlay
          muted
          onEnded={onVideoEnd}
          className="h-[40vh] w-auto object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
        >
          <source src="/bvest-preloader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </motion.div>
    </AnimatePresence>
  );
}
