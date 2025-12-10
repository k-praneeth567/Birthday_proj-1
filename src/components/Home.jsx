import React from 'react'
import { motion } from 'framer-motion'

export default function Home({ progressLevel, onBegin, onContinue }) {
  const hasProgress = progressLevel > 0

  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        className="mb-3 text-[10px] uppercase tracking-[0.34em] text-slate-200/80"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Level 0 · The Invitation
      </motion.div>

      <motion.h1
        className="mb-2 font-script text-4xl md:text-5xl text-[#ff4b9f] drop-shadow-[0_0_22px_rgba(255,75,159,0.9)]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        Janaki&apos;s Birthday Quest
      </motion.h1>

      <motion.p
        className="mb-6 max-w-xl text-[13px] md:text-sm text-slate-100/90"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        A story-driven, cosmic mystery that quietly reveals why you are
        <span className="text-[#ffdfa9]"> impossible to forget.</span>
      </motion.p>

      <motion.div
        className="mb-7 max-w-xl text-[13px] leading-relaxed text-slate-200/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <p className="mb-2">
          <span className="text-[#ffdfa9]">Janaki R,</span> you are chosen to enter the
          Circle of Extraordinary Souls.
        </p>
        <p className="mb-2">
          To unlock your birthday prophecy, you must solve six soft trials. Each trial
          reveals a gentle truth about how precious you are.
        </p>
        <p className="italic text-slate-300/85">
          This isn&apos;t about puzzles. It&apos;s about seeing yourself the way someone
          in your class secretly does.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onBegin}
          className="rounded-full bg-gradient-to-r from-[#ff4b9f] via-[#fb7185] to-[#ffdfa9] px-8 py-2.5 text-sm font-semibold text-[#050818] shadow-neon"
        >
          Tap to Begin the Journey
        </motion.button>

        {hasProgress && (
          <button
            onClick={onContinue}
            className="text-[11px] text-sky-200/85 underline underline-offset-4"
          >
            or continue from Level {progressLevel}
          </button>
        )}

        <div className="mt-2 text-[9px] uppercase tracking-[0.35em] text-slate-400/85">
          Watch closely · even the tiniest ✦ matters
        </div>
      </motion.div>
    </div>
  )
}
