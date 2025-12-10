import React from 'react'

const TOTAL_LEVELS = 6

export default function ProgressBar({ progressLevel }) {
  const items = Array.from({ length: TOTAL_LEVELS }, (_, i) => i + 1)
  return (
    <div className="mt-5 flex flex-col items-center gap-2 text-xs text-slate-200/70">
      <div className="flex items-center gap-1">
        {items.map((lvl) => {
          const active = progressLevel >= lvl
          return (
            <div
              key={lvl}
              className={[
                'h-1.5 rounded-full transition-all duration-500',
                active ? 'w-10 bg-rose-400 shadow-neon' : 'w-6 bg-slate-500/50',
              ].join(' ')}
            />
          )
        })}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300/70">
        Progress · Level {progressLevel} / {TOTAL_LEVELS}
      </div>
    </div>
  )
}
