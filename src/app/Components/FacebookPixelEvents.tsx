'use client'
import React, { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(String(process.env.PIXEL_ID)) // don't forget to change this
        ReactPixel.pageView()
      })
  }, [pathname, searchParams])

  return null
}
