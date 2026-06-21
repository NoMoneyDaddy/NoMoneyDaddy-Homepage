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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
        {children}
      </body>
    </html>
  )
}
