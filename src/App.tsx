/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Cake, Camera, Heart, PartyPopper } from 'lucide-react';
import { Wishes } from './components/Wishes';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Initial confetti burst
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen birthday-gradient overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <h1 className="text-6xl md:text-9xl font-cursive text-pink-600 mb-4 drop-shadow-sm">
            Happy Birthday <br /> 
            <span className="text-stone-900 font-display italic">Thrilok!</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-xl mx-auto mb-10 font-light">
            Wishing you a day as special as you are. Let's make this year the best one yet!
          </p>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-200"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "110%",
                rotate: 0 
              }}
              animate={{ 
                y: "-10%",
                rotate: 360
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 10
              }}
            >
              <Heart size={Math.random() * 40 + 20} fill="currentColor" />
            </motion.div>
          ))}
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-4">Memories</h2>
              <p className="text-stone-500">A journey through the years.</p>
            </div>
            <div className="flex gap-2">
              <div className="p-3 bg-white rounded-2xl shadow-sm border border-stone-100 text-pink-500">
                <Camera size={24} />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://i.ibb.co/bMBhR7gY/20260303-202335.jpg", span: "row-span-2" },
              { src: "https://i.ibb.co/6R7ZDK4R/20260303-102640.jpg", span: "" },
              { src: "https://i.ibb.co/939N1KN2/VID-20260101-180903-2.jpg", span: "" },
              { src: "https://i.ibb.co/nt6GCM8/20251123-142453.jpg", span: "row-span-2" },
              { src: "https://i.ibb.co/TxY1gKGL/20251018-174013.jpg", span: "col-span-2" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-3xl group ${img.span}`}
              >
                <img 
                  src={img.src} 
                  alt={`Memory ${i+1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium">Moment #{i+1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wishes Section */}
      <Wishes />

      {/* Footer */}
      <footer className="py-12 text-center border-t border-stone-200">
        <div className="flex justify-center gap-6 mb-6">
          <Cake className="text-pink-500" />
          <PartyPopper className="text-violet-500" />
          <Heart className="text-red-500" />
        </div>
        <p className="text-stone-400 text-sm">
          Made with love for Thrilok's Special Day.
        </p>
      </footer>
    </div>
  );
}
