// src/components/Level6.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'

/*
  Encoded phrase is created by shifting each letter BACK by 1.
  Original (correct) phrase:
    "A quiet genius with a breathtaking glow."
  Encoded (shown to the user):
    "Z pthds fdmhtr vhsg z aqdzsgszjhmf fknv."
*/

const ENCODED = 'Z pthds fdmhtr vhsg z aqdzsgszjhmf fknv.'
const CORRECT = 'A quiet genius with a breathtaking glow.'

function normalizeForCompare(s = '') {
  return s
    .toLowerCase()
    // remove punctuation characters (keep letters/numbers and spaces)
    .replace(/[^\w\s]|_/g, '')
    // collapse multiple spaces
    .replace(/\s+/g, ' ')
    .trim()
}

export default function Level6({ onComplete }) {
  const [input, setInput] = useState('')
  const [wrong, setWrong] = useState(false)
  const [answered, setAnswered] = useState(false)

  const handleCheck = () => {
    const user = normalizeForCompare(input)
    const expected = normalizeForCompare(CORRECT)

    if (user === expected) {
      setAnswered(true)
      setWrong(false)

      // show the reveal briefly, then move on
      setTimeout(() => {
        onComplete && onComplete()
      }, 2200)
    } else {
      setWrong(true)
      setTimeout(() => setWrong(false), 5000)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') handleCheck()
  }

  return (
    <div className="text-center">
      <motion.h2
        className="font-script text-3xl text-[#ff4b9f] mb-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Level 6
      </motion.h2>

      <motion.p
        className="text-sm text-slate-200 mb-3 leading-relaxed"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Decode the phrase by shifting each letter <strong>one step forward →</strong>
      </motion.p>

      <motion.div
        className="text-[#ffdfa9] text-lg font-medium mb-5"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
      >
        “{ENCODED}”
      </motion.div>

      {!answered && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type the decoded phrase..."
            className="px-4 py-2 w-[88%] max-w-lg bg-black/40 border border-white/20 rounded-xl text-center text-sm focus:outline-none focus:ring-2 focus:ring-[#ff4b9f]"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleCheck}
            className="px-6 py-2 rounded-full bg-[#ff4b9f] text-[#050818] font-semibold shadow-[0_0_12px_rgba(255,75,159,0.9)]"
          >
            Check
          </motion.button>

          {wrong && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-[#ff4b9f] font-semibold"
            >
              Not quite — try again ♥
            </motion.div>
          )}
        </motion.div>
      )}

      {answered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-6 text-lg text-[#ffdfa9] font-semibold drop-shadow-[0_0_14px_rgba(255,223,169,0.9)] leading-relaxed"
        >
          A quiet genius with a breathtaking glow.
          <div className="mt-2 text-sm text-[#ffb4d3] italic">
            And yes… it's describing someone very real.
          </div>
        </motion.div>
      )}
    </div>
  )
}
