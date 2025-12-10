import React from 'react'

export default function OrbitalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Deep cosmic gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,#2b1230_0%,transparent_55%),radial-gradient(circle_at_80%_0%,#311f6b_0%,transparent_55%),radial-gradient(circle_at_10%_90%,#1b1233_0%,transparent_55%),radial-gradient(circle_at_90%_90%,#111827_0%,transparent_55%),radial-gradient(circle_at_center,#020617_0%,#020617_60%,#020617_100%)]" />

      {/* floating nebula blobs */}
      <div className="absolute -top-40 -left-10 h-72 w-72 rounded-full bg-[#ff4b9f]/35 blur-3xl animate-float" />
      <div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-[#38bdf8]/30 blur-3xl animate-float" />
      <div className="absolute bottom-[-6rem] left-1/3 h-64 w-64 rounded-full bg-[#d4bfff]/28 blur-3xl animate-float" />

      {/* twinkling gold stars */}
      {Array.from({ length: 26 }).map((_, i) => (
  <div
    key={i}
    className="absolute h-1 w-1 rounded-full bg-[#ffdfa9] animate-twinkle"
    style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: 0.4 + Math.random() * 0.6,
      // no animation property here – Tailwind handles it
    }}
  />
))}


      {/* orbital rings perfectly centered on screen */}
    <div className="absolute inset-0 flex items-center justify-center">
  {/* MUCH BIGGER orbit container */}
  <div className="relative aspect-square w-[1980px] max-w-[98vw]">

    {/* OUTER RING (now thicker) */}
    <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-white/25 animate-orbitSlow" />

    {/* MIDDLE RING (bigger + thicker) */}
    <div className="absolute inset-[80px] rounded-full border-[2px] border-dashed border-white/22 animate-orbitMedium" />

    {/* INNER RING (bigger + thicker) */}
    <div className="absolute inset-[160px] rounded-full border-[2px] border-dashed border-white/18 animate-orbitFast" />

    {/* OUTER PINK PLANET */}
    <div className="absolute inset-0">
      <div className="absolute left-1/2 -top-2 h-4.5 w-4.5 -translate-x-1/2 rounded-full bg-[#ff4b9f] shadow-[0_0_22px_rgba(255,75,159,0.9)]" />
    </div>

    {/* MIDDLE BLUE PLANET */}
    <div className="absolute inset-[80px]">
      <div className="absolute top-1/2 -right-2.5 h-4 w-4 -translate-y-1/2 rounded-full bg-[#38bdf8] shadow-[0_0_18px_rgba(56,189,248,0.85)]" />
    </div>

    {/* INNER GOLD PLANET */}
    <div className="absolute inset-[160px]">
      <div className="absolute -bottom-2.5 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#ffdfa9] shadow-[0_0_18px_rgba(255,223,169,0.95)]" />
    </div>
  </div>
</div>

    </div>
  )
}
