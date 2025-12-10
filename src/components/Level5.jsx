import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { spawnSparkles } from './Sparkles'

const OPTIONS = ['Someone who won the lottery', 'Me', 'Whoever’s reading this']
const CORRECT = 'Me'

export default function Level5({ onComplete }) {
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [wrong, setWrong] = useState(false)

  const handleSelect = (opt, e) => {
    setSelected(opt)
    if (opt === CORRECT) {
      try {
        const glass = document.querySelector('.glass-card') || document.body
        spawnSparkles(glass, e.clientX, e.clientY, { count: 14 })
      } catch (err) { console.warn('sparkles failed', err) }

      setAnswered(true)
      setTimeout(() => onComplete && onComplete(), 5000)
    } else {
      setWrong(true)
      setTimeout(() => setWrong(false), 900)
    }
  }

  return (
    <div className="text-center">
      <motion.h2 className="font-script text-3xl text-[#ff4b9f] mb-4"
        initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>Level 5</motion.h2>

      <motion.p className="text-sm text-slate-200 mb-6 leading-relaxed"
        initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>
        Who’s the luckiest person alive right now?
      </motion.p>

      <div className="flex flex-col gap-3 items-center">
        {OPTIONS.map((opt, i) => (
          <motion.button
            key={i}
            onClick={(e) => handleSelect(opt, e)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className={`px-5 py-2 rounded-full bg-black/40 border border-white/20 text-sm w-64 max-w-full
              ${selected === opt ? 'bg-[#ff4b9f]/30 border-[#ff4b9f]' : ''}`}
          >
            {opt}
          </motion.button>
        ))}
      </div>

      {wrong && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="mt-4 text-[#ff4b9f] font-semibold">
          Not quite — try again ♥
        </motion.div>
      )}

      {answered && (
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.45}} className="mt-6 text-sm text-[#ffdfa9]">
          Because I get to wish the most amazing girl a happy birthday.
        </motion.p>
      )}
    </div>
  )
}
