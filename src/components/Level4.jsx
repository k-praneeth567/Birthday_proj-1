import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { spawnSparkles } from './Sparkles'

const OPTIONS = ['A candle', 'The moon', 'Fabulous (You)', 'A flower']

export default function Level4({ onComplete }) {
  const [selected, setSelected] = useState(null)
  const [showOptions, setShowOptions] = useState(true)
  const [revealed, setRevealed] = useState(false)

  const handleSelect = (opt, e) => {
    setSelected(opt)

    // sparkles ONLY if that option should be considered "correct" — 
    // per your earlier request sparkles are only for correct options.
    // Level 4 reveals regardless of selection; we will spawn sparkles
    // when user selects the "Fabulous (You)" option (optional).
    try {
      if (opt === 'Fabulous (You)') {
        const glass = document.querySelector('.glass-card') || document.body
        spawnSparkles(glass, e.clientX, e.clientY, { count: 14 })
      }
    } catch (err) { console.warn('sparkles failed', err) }

    // Hide options smoothly
    setShowOptions(false)

    // reveal highlighted message
    setTimeout(() => setRevealed(true), 450)

    // move to next after a short delay so user can read
    setTimeout(() => onComplete && onComplete(), 5000)
  }

  return (
    <div className="text-center">
      <motion.h2 className="font-script text-3xl text-[#ff4b9f] mb-4"
        initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>Level 4</motion.h2>

      <motion.p className="text-sm text-slate-200 mb-5 leading-relaxed"
        initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
        What gets more beautiful every year,<br/>
        lights up every room she walks into,<br/>
        and makes one lucky guy thank the universe every single day?
      </motion.p>

      {showOptions && (
        <motion.div initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.45}} className="flex flex-col gap-3 items-center">
          {OPTIONS.map((opt, i) => (
            <motion.button
              key={i}
              onClick={(e) => handleSelect(opt, e)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-full bg-black/40 border border-white/20 text-sm w-64 max-w-full`}
            >
              {opt}
            </motion.button>
          ))}
        </motion.div>
      )}

      {revealed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-6 text-lg text-[#ffdfa9] font-semibold drop-shadow-[0_0_12px_rgba(255,223,169,0.9)] leading-relaxed"
        >
          …No answer needed — we both know it’s you.<br/>
          <span className="italic">Happy birthday, beautiful.</span>
        </motion.div>
      )}
    </div>
  )
}
