import React, { useEffect, useState } from 'react';
import { FARIS_CONFIG } from '../data/farisData';

interface PreloaderProps {
  onFinish?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 20 + 8;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsDone(true);
        if (onFinish) onFinish();
        setTimeout(() => setIsRemoved(true), 600);
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinish]);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-all duration-700 ease-in-out ${
        isDone ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-xs px-6">
        {/* Glow behind logo */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-faris-500/20 via-gold-500/20 to-faris-700/20 rounded-full blur-2xl animate-pulse" />

        {/* Logo Container with Green Sweep */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 rounded-2xl bg-white p-2 shadow-2xl border border-faris-100 flex items-center justify-center overflow-hidden">
          <img
            src={FARIS_CONFIG.brand.logo}
            alt={FARIS_CONFIG.brand.logoAlt}
            className="w-full h-full object-contain transform transition-transform duration-700 hover:scale-105"
          />
          {/* Animated Green Sweep Line */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-faris-500/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"
            style={{
              animation: 'sweep 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            }}
          />
        </div>

        {/* Brand Name & Location */}
        <div className="text-center space-y-1">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-faris-950">
            FARIS GROUP
          </h2>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-faris-600">
            Hospitality • Edavannappara
          </p>
        </div>

        {/* Luxury Progress Bar */}
        <div className="w-48 h-1 bg-cream-200 rounded-full mt-6 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-faris-600 via-faris-500 to-gold-500 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${Math.round(progress)}%` }}
          />
        </div>

        {/* Loading Counter */}
        <div className="mt-3 text-[11px] font-semibold text-neutral-400 font-mono tracking-wider">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};
