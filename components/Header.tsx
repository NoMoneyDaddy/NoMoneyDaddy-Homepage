'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: '首頁', href: '#home' },
    { label: '作品', href: '#projects' },
    { label: '特色', href: '#features' },
    { label: '聯絡', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="section-container flex justify-between items-center h-14 sm:h-16">
        <Link href="#home" className="text-sm sm:text-lg font-bold text-blue-600 leading-tight" aria-label="NoMoneyDaddy 奶爸實驗室">
          <span className="block text-xs sm:text-sm font-semibold">NoMoneyDaddy</span>
          <span className="text-xs text-gray-600">奶爸實驗室</span>
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 hover:bg-gray-100 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-14 sm:top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <div className="section-container py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
