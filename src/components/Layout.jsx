import React, { useState } from 'react'
import OrbitalBackground from './OrbitalBackground'
import ProgressBar from './ProgressBar'
import { AnimatePresence, motion } from 'framer-motion'

export default function Layout({
  children,
  progressLevel,
}) {

  return (
    <div className="relative min-h-screen overflow-hidden text-[13px] text-slate-50">
      {/* Cosmic Background */}
      <OrbitalBackground />

      <div className="relative z-10 flex min-h-screen flex-col">

        {/* --- HEADER (CLEAN, NO MUSIC, NO CHIME, NO HOME) --- */}
        <header className="flex items-center justify-center px-5 pt-6">
          <div className="font-script text-3xl text-[#ff4b9f] drop-shadow-[0_0_18px_rgba(255,75,159,0.9)]">
            Janaki&apos;s Birthday Quest
          </div>
          <div className="text-[9px] uppercase tracking-[0.32em] text-slate-200/80">
  A cosmic · gentle journey
          </div>
          
        </header>

        {/* --- CONTENT CARD --- */}
        <main className="flex flex-1 items-center justify-center px-4 pb-10 pt-4">
          <div className="relative max-w-3xl flex-1">
            <div className="relative glass-card px-7 py-8 md:px-10 md:py-10">
              <div className="neon-outline" />
              
              {/* Page Content */}
              {children}

              {/* Progress Bar */}
              <ProgressBar progressLevel={progressLevel} />

              {/* Bottom right text ONLY */}
              <div className="mt-5 flex items-center justify-end text-[11px] text-[#ffdfa9]/80">
                <span>Made with care ♡</span>
              </div>
            </div>
          </div>
        </main>

      </div>
    </div>
  )
}
