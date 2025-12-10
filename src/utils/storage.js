const STORAGE_KEY = 'janakiBirthdayQuest'

export function loadGameState() {
  if (typeof window === 'undefined') return { progressLevel: 0, secretUnlocked: false }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { progressLevel: 0, secretUnlocked: false }
    const data = JSON.parse(raw)
    return {
      progressLevel: typeof data.progressLevel === 'number' ? data.progressLevel : 0,
      secretUnlocked: !!data.secretUnlocked,
    }
  } catch {
    return { progressLevel: 0, secretUnlocked: false }
  }
}

function saveGameState(state) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

export function updateProgress(level) {
  const state = loadGameState()
  const next = { ...state, progressLevel: Math.max(state.progressLevel, level) }
  saveGameState(next)
  return next
}

export function setSecretUnlocked() {
  const state = loadGameState()
  const next = { ...state, secretUnlocked: true }
  saveGameState(next)
  return next
}

export function resetGameState() {
  saveGameState({ progressLevel: 0, secretUnlocked: false })
}
