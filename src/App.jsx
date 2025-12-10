import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout'
import Home from './components/Home'
import Level1 from './components/Level1'
import Level2 from './components/Level2'
import Level3 from './components/Level3'
import Level4 from './components/Level4'
import Level5 from './components/Level5'
import Level6 from './components/Level6'
import FinalDoor from './components/FinalDoor'
import SecretPath from './components/SecretPath'
import HiddenEnding from './components/HiddenEnding'
import { loadGameState, updateProgress, setSecretUnlocked, resetGameState } from './utils/storage'
import { audioManager } from './utils/audio'

const SCREENS = {
  HOME: 'home',
  L1: 'level1',
  L2: 'level2',
  L3: 'level3',
  L4: 'level4',
  L5: 'level5',
  L6: 'level6',
  FINAL: 'final',
  SECRET_PATH: 'secretPath',
  HIDDEN_ENDING: 'hiddenEnding',
}

const screenTransition = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -40, scale: 1.02 },
  transition: { duration: 0.65, ease: 'easeOut' },
}

export default function App() {
  const [screen, setScreen] = useState(SCREENS.HOME)
  const [progressLevel, setProgressLevel] = useState(0)
  const [secretUnlocked, setSecret] = useState(false)

  useEffect(() => {
    const state = loadGameState()
    setProgressLevel(state.progressLevel)
    setSecret(state.secretUnlocked)
  }, [])

  const goTo = (next) => setScreen(next)

  const handleLevelComplete = (levelNumber, nextScreen) => {
    const state = updateProgress(levelNumber)
    setProgressLevel(state.progressLevel)
    goTo(nextScreen)
  }

  const handleSecretUnlock = () => {
    const state = setSecretUnlocked()
    setSecret(state.secretUnlocked)
    goTo(SCREENS.SECRET_PATH)
  }

  const handlePlayAgain = () => {
    resetGameState()
    setProgressLevel(0)
    setSecret(false)
    goTo(SCREENS.HOME)
  }

  const renderScreen = () => {
    switch (screen) {
      case SCREENS.HOME:
        return (
          <Home
            progressLevel={progressLevel}
            onBegin={() => goTo(SCREENS.L1)}
            onContinue={() => {
              const map = {
                1: SCREENS.L1,
                2: SCREENS.L2,
                3: SCREENS.L3,
                4: SCREENS.L4,
                5: SCREENS.L5,
                6: SCREENS.L6,
              }
              goTo(map[progressLevel] || SCREENS.L1)
            }}
          />
        )
      case SCREENS.L1:
        return <Level1 onComplete={() => handleLevelComplete(1, SCREENS.L2)} />
      case SCREENS.L2:
        return <Level2 onComplete={() => handleLevelComplete(2, SCREENS.L3)} />
      case SCREENS.L3:
        return <Level3 onComplete={() => handleLevelComplete(3, SCREENS.L4)} />
      case SCREENS.L4:
        return <Level4 onComplete={() => handleLevelComplete(4, SCREENS.L5)} />
      case SCREENS.L5:
        return <Level5 onComplete={() => handleLevelComplete(5, SCREENS.L6)} />
      case SCREENS.L6:
        return <Level6 onComplete={() => handleLevelComplete(6, SCREENS.FINAL)} />
      case SCREENS.FINAL:
        return <FinalDoor onComplete={() => goTo(SCREENS.HIDDEN_ENDING)} />
      case SCREENS.SECRET_PATH:
        return <SecretPath onSolved={() => goTo(SCREENS.HIDDEN_ENDING)} />
      case SCREENS.HIDDEN_ENDING:
        return <HiddenEnding onPlayAgain={handlePlayAgain} secretUnlocked={secretUnlocked} />
      default:
        return <Home onBegin={() => goTo(SCREENS.L1)} />
    }
  }

  const currentScreenElement = renderScreen()

  return (
    <Layout
      progressLevel={progressLevel}
      secretUnlocked={secretUnlocked}
      onHome={() => setScreen(SCREENS.HOME)}
      onSecretStar={handleSecretUnlock}
      audioManager={audioManager}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={screenTransition.initial}
          animate={screenTransition.animate}
          exit={screenTransition.exit}
          transition={screenTransition.transition}
        >
          {currentScreenElement}
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
