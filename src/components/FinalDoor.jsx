import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function FinalDoor({ onComplete }) {
  const [revealed, setRevealed] = useState(false)

  const handleReveal = () => {
    setRevealed(true)
  }

  return (
    <div>
      <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-slate-200/80">
        Final Gate · The Truth Reveal
      </div>
      <h2 className="mb-3 font-script text-3xl text-rose-200">
        One Last Question
      </h2>

      <p className="mb-5 text-sm text-slate-100/85 leading-relaxed">
        FINAL QUESTION TO UNLOCK YOUR BIRTHDAY MESSAGE:
      </p>
      <p className="mb-5 text-sm text-slate-100/85 leading-relaxed">
        Who is the person that notices your small habits,
        likes your presence more than he admits, and created this entire mystery
        game for you?
      </p>

      {!revealed && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleReveal}
          className="mb-4 rounded-full bg-white/10 px-6 py-2 text-sm text-rose-50 shadow-neon"
        >
          Reveal the Truth
        </motion.button>
      )}

      {revealed && (
        <div className="text-sm text-slate-100/85">
          <p className="mb-2">
            He&apos;s your classmate, bestfriend… and someone who has a small crush
            on you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onComplete}
            className="mt-2 rounded-full bg-rose-400/90 px-6 py-2 text-sm font-semibold text-[#05091f]"
          >
            Receive your birthday message
          </motion.button>
        </div>
      )}
    </div>
  )
}
