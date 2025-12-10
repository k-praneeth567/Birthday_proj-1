import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CORRECT_SEQUENCE = [1, 3, 2] // soft secret order

export default function SecretPath({ onSolved }) {
  const [sequence, setSequence] = useState([])
  const [message, setMessage] = useState('')

  const handleStar = (idx) => {
    if (sequence.length >= 3) return
    const next = [...sequence, idx]
    setSequence(next)

    if (next.length === 3) {
      const ok = CORRECT_SEQUENCE.every((v, i) => v === next[i])
      if (ok) {
        setMessage('The constellation aligns. A quiet, hidden ending opens just for you.')
      } else {
        setMessage('The stars flicker, amused. Try tracing a softer path.')
        setSequence([])
      }
    } else {
      setMessage('')
    }
  }

  const solved =
    sequence.length === 3 && CORRECT_SEQUENCE.every((v, i) => v === sequence[i])

  return (
    <div>
      <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-slate-200/80">
        Secret Path · Star Sequence
      </div>
      <h2 className="mb-3 font-script text-3xl text-rose-200">
        Connect the Quiet Constellation
      </h2>
      <p className="mb-5 text-sm text-slate-100/85">
        By clicking the wandering ✦ five times, you slipped into a secret orbit.
        Now, choose the correct three-star sequence.
      </p>

      <div className="mb-5 flex justify-center gap-6 text-3xl">
        {[1, 2, 3].map((num) => (
          <motion.button
            key={num}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleStar(num)}
            className={[
              'relative rounded-full px-2 py-1 text-amber-100/90 transition',
              sequence.includes(num) && 'text-rose-200 drop-shadow',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            ✦
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-slate-300/80">
              {num}
            </span>
          </motion.button>
        ))}
      </div>

      {message && <div className="mb-3 text-sm text-slate-100/85">{message}</div>}

      {solved && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onSolved}
          className="mt-2 rounded-full bg-rose-400/90 px-6 py-2 text-sm font-semibold text-[#05091f]"
        >
          Step into the hidden ending
        </motion.button>
      )}
    </div>
  )
}
