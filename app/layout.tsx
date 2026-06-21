import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NoMoneyDaddy - Portfolio & Projects',
  description: 'Discover innovative projects including iWantPo and FamilyPlay',
  openGraph: {
    title: 'NoMoneyDaddy - Portfolio & Projects',
    description: 'Discover innovative projects including iWantPo and FamilyPlay',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-2955827057895484" />
        <title>NoMoneyDaddy - Portfolio & Projects</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2955827057895484"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-white text-gray-900">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
