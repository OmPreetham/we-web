'use client'

import { useState, useEffect } from 'react'
import { LoadingScreenComponent } from './loading-screen'
import {Page} from './page'

export function LoadingTransitionComponent() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Adjust this value to control how long the loading screen is shown

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <LoadingScreenComponent />
      ) : (
        <div className="animate-fadeIn">
          <Page />
        </div>
      )}
    </div>
  )
}