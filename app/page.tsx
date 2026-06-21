'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import GoogleAds from '@/components/GoogleAds'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <GoogleAds />
      <Projects />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
