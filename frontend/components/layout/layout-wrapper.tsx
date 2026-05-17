'use client'

import { useState, useEffect } from 'react'
import LoadingAnimation from '@/components/ui/loading-animation'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loading animation on initial page load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <LoadingAnimation onComplete={handleLoadingComplete} />
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}>
        {children}
      </div>
    </>
  )
}
