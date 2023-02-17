import { ReactNode } from 'react'

import { Aside } from '@/components/aside'

import styles from './layout.module.scss'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body>
        <div className={styles.container}>
          <div>
            <Aside />
          </div>

          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
