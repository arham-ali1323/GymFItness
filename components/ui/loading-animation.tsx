'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingAnimationProps {
  onComplete?: () => void
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete?.()
    }, 3500) // Animation duration

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="relative">
            {/* Animated person with dumbbells */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: [0, 1.2, 1],
                rotate: [ -180, 0, 10, 0]
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.5, 0.8, 1]
              }}
              className="relative"
            >
              {/* Person Image/Avatar */}
              <div className="relative w-32 h-32 mx-auto">
                <motion.img
                  src="/images/German Fitness.png"
                  alt="German Fitness Person"
                  className="w-full h-full object-contain"
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                
                {/* Fallback fitness icon */}
                <div className="hidden w-full h-full flex flex-col items-center justify-center">
                  <div className="text-5xl mb-2">💪</div>
                  <div className="text-xs font-bold text-orange-500">GF</div>
                </div>
              </div>
            </motion.div>
            
            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center mt-8"
            >
              <div className="text-2xl font-bold text-orange-500 mb-2">German Fitness</div>
              <motion.div
                className="text-sm text-gray-600 mb-4"
                animate={{ 
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Building Stronger Bodies
              </motion.div>
              <motion.div
                className="flex justify-center gap-2"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-orange-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
