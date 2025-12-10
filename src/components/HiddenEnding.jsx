import React from 'react'
import { motion } from 'framer-motion'

export default function HiddenEnding({ onPlayAgain, secretUnlocked }) {
  return (
    <div>
      <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-slate-200/80">
        Epilogue · Birthday Constellation
      </div>

      {secretUnlocked && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 rounded-2xl bg-black/40 p-4 text-sm text-slate-100/85"
        >
          <p className="mb-1 text-rose-200">
            Hidden Ending · whispered truth
          </p>
          <p>
            Somewhere between homework, shared glances, and tiny inside jokes, a quiet
            feeling grew. This page is the part he didn&apos;t know how to say out loud,
            so he turned it into stars instead.
          </p>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3 font-script text-3xl text-rose-200"
      >
        Your Birthday Message
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3 text-sm leading-relaxed text-slate-100/85"
      >
        <p>
          <span className="text-rose-200">Janaki R,</span>
        </p>
        <p>
          You&apos;re not just celebrating a birthday — you&apos;re celebrating the
          existence of a girl who is kind, strong, funny, dramatic, intelligent, and
          unforgettable.
        </p>
        <p>
          May this year bring you peace, happiness, and success in every door you open.
        </p>
        <p>
          And may the people who care about you never stop reminding you how special you
          are — especially the one who made this for you.
        </p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={onPlayAgain}
        className="mt-6 rounded-full bg-gradient-to-r from-[#fb7185] via-[#ff9f9a] to-[#ffdfa9] px-8 py-2.5 text-sm font-semibold text-[#05091f] shadow-neon"
      >
        Play Again
      </motion.button>
    </div>
  )
}
