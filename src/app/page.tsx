'use client'

import { useEffect } from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Merriweather, Roboto_Mono } from 'next/font/google'

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

export default function Home() {
  useEffect(() => {
    const textElements = document.querySelectorAll('.flip-text');
    textElements.forEach(element => {
      const text = element.textContent || '';
      element.textContent = '';
      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${Math.random() * 2}s`;
        span.classList.add('flip-char');
        element.appendChild(span);
      });
    });
  }, []);

  return (
    <div className={`min-h-screen bg-[#000000] ${robotoMono.variable} font-mono relative overflow-hidden`}>
      {/* Navigation */}
      <header className="absolute top-0 w-full z-50 px-4 py-6">
        <nav className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo Pipes */}
            <div className="text-white/90 flex items-end space-x-1 cursor-pointer hover:text-white hover:scale-150 transition-transform duration-300 hover:rotate-90">
              <div className="w-1 h-5 bg-white/90"></div>
              <div className="w-1 h-5 bg-white/90"></div>
              <div className="w-1 h-5 bg-white/90"></div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
              <Link href="#about" className="text-white/90 text-sm hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-4 animate-fadeIn">
        <div className="max-w-6xl mx-auto w-full pt-24 z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white/90 font-light leading-tight mb-6">
              <span className="block font-bold flip-text">Private</span>
              <span className="block font-bold flip-text">Safe</span>
              <span className="block font-bold flip-text">Anonymous</span>
            </h1>
            <p className={`${merriweather.variable} font-serif text-2xl md:text-3xl lg:text-4xl text-white/80 font-light leading-relaxed mb-12 animate-fadeIn`}>
              Where your thoughts matter, not your name
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30 backdrop-blur-sm"
              >
                join our community
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30 backdrop-blur-sm"
              >
                get in touch
              </Button>
            </div>
          </div>
        </div>

        {/* Large Pipes */}
        <div className="absolute top-0 md:bottom-0 right-0 flex items-end justify-end p-6 md:p-0" aria-hidden="true">
          <div className="flex space-x-4 md:space-x-8 lg:space-x-12">
            <div className="w-8 h-32 md:w-12 md:h-48 lg:w-14 lg:h-54 bg-white/10"></div>
            <div className="w-8 h-32 md:w-12 md:h-48 lg:w-14 lg:h-54 bg-white/10"></div>
            <div className="w-8 h-32 md:w-12 md:h-48 lg:w-14 lg:h-54 bg-white/10"></div>
          </div>
        </div>

        {/* By Team We Badge */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2 text-white/70 text-sm z-20">
          <span>By Team We</span>
        </div>

        {/* Decorative URL */}
        <div className="absolute bottom-6 left-6 text-white/50 text-sm z-20">
          we.build.the.world
        </div>
      </main>
    </div>
  )
}