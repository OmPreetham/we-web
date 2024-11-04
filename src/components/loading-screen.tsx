'use client'

import { useState, useEffect } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export function LoadingScreenComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // Set initial state based on system preference
    if (!isDarkMode && systemPrefersDark) {
      setIsDarkMode(true)
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-background overflow-hidden">
      <div className="flex-grow flex items-center justify-center">
        <div className="flex gap-4 animate-zoom-rotate-move">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-24 bg-foreground"
            />
          ))}
        </div>
      </div>
      <footer className="w-full py-4 flex flex-col items-center gap-4">
        <div className="absolute right-4 bottom-4 flex flex-end space-x-2">
          <Switch
            id="theme-mode"
            checked={isDarkMode}
            onCheckedChange={toggleTheme}
          />
          <Label className='hidden' htmlFor="theme-mode">
            {isDarkMode ? 'Dark Mode' : 'System Default'}
          </Label>
        </div>
        <p className="text-sm text-foreground">we.build.the.world</p>
      </footer>

      <style jsx global>{`
        @keyframes zoomRotateMove {
          0% {
            transform: scale(0);
          }
          23% {
            transform: scale(1);
          }
          46% {
            transform: scale(1) rotate(95deg);
          }
          66% {
            transform: scale(1) rotate(90deg);
          }
          100% {
            transform: scale(1) rotate(90deg) translateY(calc(-300vh));
          }
        }

        .animate-zoom-rotate-move {
          animation: zoomRotateMove 3s ease-in-out forwards;
          transform: scale(0);
        }
      `}</style>
    </div>
  )
}