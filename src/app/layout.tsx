import { ReactNode } from 'react'

import { barlow, heebo, inter } from '@/utils/fonts'

import './globals.scss'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${(barlow.className, heebo.className, inter.className)}`}
    >
      <head />
      <body>{children}</body>
    </html>
  )
}
