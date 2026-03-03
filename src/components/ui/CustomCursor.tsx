import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'click'>('default')
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12)
      cursorY.set(e.clientY - 12)
      setIsVisible(true)
    }

    const onMouseDown = () => setCursorState('click')
    const onMouseUp = () => setCursorState('default')

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => setIsVisible(false)

    const handleHoverElements = () => {
      const hoverElements = document.querySelectorAll(
        'button, a, [role="button"], .interactive-element, .btn-glow, .surface-hover'
      )

      hoverElements.forEach((element) => {
        element.addEventListener('mouseenter', () => setCursorState('hover'))
        element.addEventListener('mouseleave', () => setCursorState('default'))
      })

      return () => {
        hoverElements.forEach((element) => {
          element.removeEventListener('mouseenter', () => setCursorState('hover'))
          element.removeEventListener('mouseleave', () => setCursorState('default'))
        })
      }
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)

    const cleanupHover = handleHoverElements()

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      cleanupHover()
    }
  }, [cursorX, cursorY])

  const getCursorContent = () => {
    switch (cursorState) {
      case 'hover':
        return '👆'
      case 'click':
        return '🐱'
      default:
        return '•'
    }
  }

  const getCursorSize = () => {
    switch (cursorState) {
      case 'hover':
        return 32
      case 'click':
        return 40
      default:
        return 24
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] mix-blend-mode-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: cursorState === 'click' ? 1.2 : cursorState === 'hover' ? 1.1 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
      }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full"
        animate={{
          width: getCursorSize(),
          height: getCursorSize(),
        }}
        style={{
          background: cursorState === 'click' 
            ? 'linear-gradient(45deg, #10b981, #8b5cf6)'
            : cursorState === 'hover'
            ? 'linear-gradient(45deg, #f97316, #a855f7)'
            : 'linear-gradient(45deg, #818cf8, #fb923c)',
          boxShadow: '0 0 20px rgba(129, 140, 248, 0.4)',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <span className="text-white text-xs">
          {getCursorContent()}
        </span>
      </motion.div>

      {/* Trailing particles */}
      {cursorState === 'click' && (
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full"
              initial={{ scale: 0, x: 12, y: 12 }}
              animate={{
                scale: [0, 1, 0],
                x: [12, 12 + Math.cos(i * 60 * Math.PI / 180) * 20],
                y: [12, 12 + Math.sin(i * 60 * Math.PI / 180) * 20],
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}

// Hook to add cursor effects to elements
export function useCursorEffects() {
  useEffect(() => {
    const addCursorEffects = () => {
      const elements = document.querySelectorAll('[data-cursor="pointer"]')
      elements.forEach((element) => {
        element.classList.add('interactive-element')
      })
    }

    addCursorEffects()
    
    // Re-run when DOM changes
    const observer = new MutationObserver(addCursorEffects)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])
}