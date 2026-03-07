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

  const outerGlowStyle: React.CSSProperties = {
    position: 'fixed',
    width: '32px',
    height: '32px',
    pointerEvents: 'none',
    zIndex: 9998,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent)',
    boxShadow: 'inset 0 0 20px rgba(99, 102, 241, 0.3)',
  }

  const mainCursorStyle: React.CSSProperties = {
    position: 'fixed',
    width: '24px',
    height: '24px',
    pointerEvents: 'none',
    zIndex: 9999,
    borderRadius: '50%',
    border: '2px solid',
    borderColor: 'var(--primary)',
    background: 'radial-gradient(circle, rgba(0, 240, 255, 0.3), rgba(0, 240, 255, 0.1))',
    boxShadow: '0 0 12px rgba(0, 240, 255, 0.5), inset 0 0 8px rgba(0, 240, 255, 0.3)',
    backdropFilter: 'blur(2px)',
  }

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        style={{
          ...outerGlowStyle,
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />

      {/* Main cursor circle */}
      <motion.div
        style={{
          ...mainCursorStyle,
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        variants={variants}
        animate={isClicking ? 'click' : cursorVariant}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />

      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(0, 240, 255, 0.4))',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 1.5 : 1,
          opacity: isClicking ? 1 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      />
    </>
  )
}