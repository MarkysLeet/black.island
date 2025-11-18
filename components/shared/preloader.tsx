'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Preloader = () => {
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [taglineFadeOut, setTaglineFadeOut] = useState(false);
  const [mainFadeOut, setMainFadeOut] = useState(false);
  const [overlayFade, setOverlayFade] = useState(false);
  const [done, setDone] = useState(false);
  const timers = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const taglineTimer = setTimeout(() => setTaglineVisible(true), 300);
    const progressTimer = setTimeout(() => {
      setTaglineFadeOut(true);
      const mainTimer = setTimeout(() => {
        setMainFadeOut(true);
        const overlayTimer = setTimeout(() => setOverlayFade(true), 400);
        const completeTimer = setTimeout(() => setDone(true), 800);
        timers.current.push(overlayTimer, completeTimer);
      }, 500);
      timers.current.push(mainTimer);
    }, 1800);

    timers.current.push(taglineTimer, progressTimer);

    return () => {
      timers.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  if (done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: overlayFade ? 0 : 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-3">
        <motion.div
          className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/40"
          animate={{ opacity: mainFadeOut ? 0 : 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.imgur.com/qyalAmQ.png"
            alt="Black Island logo"
            className="h-24 w-24 object-contain"
          />
        </motion.div>
        <div className="text-center">
          <motion.p
            className="font-playfair text-2xl text-white"
            animate={{ opacity: mainFadeOut ? 0 : 1, y: mainFadeOut ? -4 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            Black Island
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: taglineFadeOut ? 0 : taglineVisible ? 1 : 0,
              y: taglineFadeOut ? 6 : taglineVisible ? 0 : 6,
            }}
            transition={{ duration: taglineFadeOut ? 0.5 : 0.7, ease: 'easeInOut' }}
            className="text-sm uppercase tracking-[0.5em] text-white/70"
          >
            Chill out place
          </motion.p>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-accent"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};
