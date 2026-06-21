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
    <section className="py-12">
      <div className="section-container">
        {/* Responsive Ad Unit - 728x90, 468x60 or 320x50 */}
        <div className="flex justify-center mb-8">
          <ins
            className="adsbygoogle"
            style={{
              display: 'inline-block',
              width: '728px',
              height: '90px',
            }}
            data-ad-client="ca-pub-2955827057895484"
            data-ad-slot="YOUR_AD_SLOT_ID"
          ></ins>
        </div>
      </div>
    </section>
  )
}
