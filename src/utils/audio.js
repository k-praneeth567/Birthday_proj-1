class AudioManager {
  constructor() {
    if (typeof Audio === 'undefined') {
      this.enabled = false
      return
    }
    // Use import.meta.env.BASE_URL to support GitHub Pages subdirectory hosting
    const baseUrl = import.meta.env.BASE_URL || '/'
    this.bg = new Audio(`${baseUrl}audio/bg-music.mp3`)
    this.bg.loop = true
    this.click = new Audio(`${baseUrl}audio/click.mp3`)
    this.musicOn = false
  }

  async toggleMusic() {
    if (!this.bg) return
    if (this.musicOn) {
      this.bg.pause()
      this.musicOn = false
    } else {
      try {
        await this.bg.play()
        this.musicOn = true
      } catch {
        console.warn('Music needs user interaction')
      }
    }
  }

  async playClick() {
    if (!this.click) return
    try {
      this.click.currentTime = 0
      await this.click.play()
    } catch {
      // ignore
    }
  }
}

export const audioManager = new AudioManager()
