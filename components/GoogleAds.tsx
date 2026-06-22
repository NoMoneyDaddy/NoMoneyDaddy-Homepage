'use client'

import { useEffect } from 'react'

export default function GoogleAds() {
  useEffect(() => {
    // Push ads for Google AdSense
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      } catch (err) {
        console.log('AdSense error:', err)
      }
    }
  }, [])

  return (
    <section className="py-8 sm:py-12">
      <div className="section-container">
        {/* Responsive Ad Unit - Mobile: 320x50, Tablet: 468x60, Desktop: 728x90 */}
        <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto">
          {/* Mobile ad (320x50) */}
          <ins
            className="adsbygoogle hidden sm:inline-block"
            style={{
              display: 'none',
              width: '320px',
              height: '50px',
            }}
            data-ad-client="ca-pub-2955827057895484"
            data-ad-slot="YOUR_AD_SLOT_ID"
          ></ins>

          {/* Tablet/Desktop ad (728x90) */}
          <ins
            className="adsbygoogle"
            style={{
              display: 'inline-block',
              width: '728px',
              height: '90px',
              minWidth: '320px',
            }}
            data-ad-client="ca-pub-2955827057895484"
            data-ad-slot="YOUR_AD_SLOT_ID"
            data-ad-format="horizontal"
          ></ins>
        </div>
      </div>
    </section>
  )
}
