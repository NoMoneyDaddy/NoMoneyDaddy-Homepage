import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NoMoneyDaddy 奶爸實驗室 - 解決現實問題的工具',
  description: '奶爸實驗室｜為 Shopee 分潤人員和忙碌父母打造的實用應用。iWantPo 自動發文平台 × FamilyPlay 親子遊戲',
  viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
  openGraph: {
    title: 'NoMoneyDaddy 奶爸實驗室',
    description: '為 Shopee 分潤人員和忙碌父母打造的實用應用',
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
        <meta name="google-adsense-account" content="ca-pub-2955827057895484" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2955827057895484"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-slate-950 text-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
