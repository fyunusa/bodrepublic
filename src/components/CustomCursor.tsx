import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 15)
      cursorY.set(e.clientY - 15)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    // Handle interactive elements
    const handleMouseEnterInteractive = () => setCursorVariant('pointer')
    const handleMouseLeaveInteractive = () => setCursorVariant('default')

    const interactiveElements = document.querySelectorAll('button, a, [role="button"], [data-cursor="pointer"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive)
      el.addEventListener('mouseleave', handleMouseLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive)
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive)
      })
    }
  }, [cursorX, cursorY])

  const variants = {
    default: {
      scale: 1,
      opacity: 0.8,
    },
    pointer: {
      scale: 1.5,
      opacity: 1,
    },
    click: {
      scale: 0.8,
      opacity: 1,
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-lg animate-pulse" />
      </motion.div>

      {/* Main cursor circle */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        variants={variants}
        animate={isClicking ? 'click' : cursorVariant}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-border shadow-lg shadow-indigo-500/50" />
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-60" />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9999]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 1.5 : 1,
          opacity: isClicking ? 1 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      >
        <div className="w-full h-full rounded-full bg-white/80 shadow-md shadow-white/50" />
      </motion.div>
    </>
  )
}