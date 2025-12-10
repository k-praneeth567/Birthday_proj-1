// src/components/Sparkles.jsx
// tiny DOM-based sparkle spawner for button-origin bursts (Style 1.5: cosmic dust)
export function spawnSparkles(containerOrSelector, clientX, clientY, opts = {}) {
  const {
    count = 14,           // number of particles
    colors = ['#ffdfa9', '#ffb4d3', '#ff4b9f'], // gold, pink, magenta
    spread = 70,          // radius in px
    lifetime = 650,       // ms
  } = opts

  let container = null
  if (typeof containerOrSelector === 'string') {
    container = document.querySelector(containerOrSelector)
  } else {
    container = containerOrSelector
  }
  if (!container) return

  // compute local coords inside container
  const rect = container.getBoundingClientRect()
  const x = clientX - rect.left
  const y = clientY - rect.top

  const wrapper = document.createElement('div')
  wrapper.className = 'sparkle-wrapper'
  wrapper.style.left = `${x}px`
  wrapper.style.top = `${y}px`
  wrapper.style.pointerEvents = 'none'

  // create particles
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div')
    p.className = 'sparkle-particle'
    const angle = Math.random() * Math.PI * 2
    const dist = (0.4 + Math.random() * 0.9) * spread
    const tx = Math.cos(angle) * dist
    const ty = Math.sin(angle) * dist
    const delay = Math.random() * 0.06 // stagger
    const size = 2 + Math.random() * 6
    const color = colors[Math.floor(Math.random() * colors.length)]
    p.style.background = color
    p.style.width = `${size}px`
    p.style.height = `${size}px`
    p.style.left = '0px'
    p.style.top = '0px'
    p.style.transform = `translate(0px,0px) scale(0.6)`
    p.style.opacity = '0'
    // set CSS variables for animation to use
    p.style.setProperty('--tx', `${tx}px`)
    p.style.setProperty('--ty', `${ty}px`)
    p.style.setProperty('--d', `${delay}s`)
    wrapper.appendChild(p)
  }

  container.appendChild(wrapper)

  // remove after lifetime + small buffer
  setTimeout(() => {
    // fade out then remove
    wrapper.style.transition = 'opacity 220ms ease'
    wrapper.style.opacity = '0'
    setTimeout(() => wrapper.remove(), 240)
  }, lifetime + 80)

  // ensure wrapper removed even if something fails
  setTimeout(() => {
    if (wrapper.parentNode) wrapper.remove()
  }, lifetime + 1200)
}
