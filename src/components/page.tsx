'use client'

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Merriweather, Roboto_Mono } from 'next/font/google'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose } from "@/components/ui/drawer"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Moon, Sun, Laptop } from "lucide-react"
import Image from 'next/image'

const merriweather = Merriweather({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

const robotoMono = Roboto_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

function AboutDrawer({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className={`${merriweather.variable} font-serif text-2xl`}>About Our Platform</DrawerTitle>
          </DrawerHeader>
          <div className={`px-4 ${robotoMono.variable} font-mono text-sm`}>
            <p className="mb-4">
              Our platform is designed to provide a safe and anonymous space for individuals to express their thoughts and ideas freely.
            </p>
            <p className="mb-4">
              We believe in the power of unfiltered expression and the importance of privacy in the digital age.
            </p>
            <p>
              Join our community to engage in meaningful discussions without the fear of judgment or repercussions.
            </p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function JoinCommunityDialog({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0">
        <DialogTitle className='text-foreground/90 font-mono hidden'>Join Our Community</DialogTitle>
        <Image
          src="/qr-test.png"
          alt="QR Code"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </DialogContent>
    </Dialog>
  )
}

function ThemeSwitcher() {
  const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('system');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <ToggleGroup type="single" value={theme} onValueChange={(value) => setTheme(value as 'system' | 'light' | 'dark')}>
      <ToggleGroupItem value="system" aria-label="System theme" className="px-2 py-1">
        <Laptop className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Light theme" className="px-2 py-1">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark theme" className="px-2 py-1">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function Page() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isJoinCommunityOpen, setIsJoinCommunityOpen] = useState(false);

  useEffect(() => {
    const textElements = document.querySelectorAll('.flip-text');
    textElements.forEach(element => {
      const text = element.textContent || '';
      element.textContent = '';
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${Math.random() * 2}s`;
        span.classList.add('flip-char');
        element.appendChild(span);
      });
    });
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground ${robotoMono.variable} font-mono relative overflow-hidden`}>
      {/* Navigation */}
      <header className="absolute top-0 w-full z-50 px-4 py-6">
        <nav className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo Pipes */}
            <div className="text-foreground/90 flex items-end space-x-1 cursor-pointer hover:text-foreground hover:scale-150 transition-transform duration-300 hover:rotate-90">
              <div className="w-1 h-5 bg-foreground/90"></div>
              <div className="w-1 h-5 bg-foreground/90"></div>
              <div className="w-1 h-5 bg-foreground/90"></div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-4 animate-fadeIn">
        <div className="max-w-6xl mx-auto w-full pt-24 z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground/90 font-light leading-tight mb-6">
              <span className="block font-bold flip-text">Private</span>
              <span className="block font-bold flip-text">Safe</span>
              <span className="block font-bold flip-text">Anonymous</span>
            </h1>
            <p className={`${merriweather.variable} font-serif text-2xl md:text-3xl lg:text-4xl text-foreground/80 font-light leading-relaxed mb-12 animate-fadeIn`}>
              Where your <span className='underline'>thoughts</span> matter, not your <span className='underline'>name</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:border-primary/30 backdrop-blur-sm"
                onClick={() => setIsJoinCommunityOpen(true)}
              >
                join our community
              </Button>
              <Button
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:border-primary/30 backdrop-blur-sm"
                onClick={() => setIsAboutOpen(true)}
              >
                about
              </Button>
            </div>
          </div>
        </div>

        {/* Large Pipes */}
        <div className="absolute top-0 md:bottom-0 right-0 flex items-end justify-end p-6 md:p-0" aria-hidden="true">
          <div className="flex space-x-4 md:space-x-8 lg:space-x-12">
            <div className="w-8 h-32 md:w-12 md:h-48 lg:w-14 lg:h-54 bg-foreground/10"></div>
            <div className="w-8 h-32 md:w-12 md:h-48 lg:w-14 lg:h-54 bg-foreground/10"></div>
            <div className="w-8 h-32 md:w-12 md:h-48 lg:w-14 lg:h-54 bg-foreground/10"></div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="absolute bottom-6 left-0 right-0 flex flex-col lg:flex-row items-center justify-between px-6 space-y-4 lg:space-y-0">
          {/* Decorative URL */}
          <div className="text-foreground/50 text-sm order-1 lg:order-1">
            we.build.the.world
          </div>

          {/* Theme Switcher */}
          <div className="order-3 lg:order-2">
            <ThemeSwitcher />
          </div>

          {/* By Team We Badge */}
          <div className="flex items-center gap-2 text-foreground/70 text-sm order-2 lg:order-3">
            <span>By Team We</span>
          </div>
        </div>
      </main>

      {/* About Drawer */}
      <AboutDrawer isOpen={isAboutOpen} setIsOpen={setIsAboutOpen} />

      {/* Join Community Dialog */}
      <JoinCommunityDialog isOpen={isJoinCommunityOpen} setIsOpen={setIsJoinCommunityOpen} />
    </div>
  )
}