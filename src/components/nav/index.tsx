'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { barlow, heebo, inter } from '@/utils/fonts'
import styles from './styles.module.scss'

import arrow_left from 'public/icons/arrow_left.svg'
import { ReactNode } from 'react'

type NavbarProps = {
  pageTitle?: string
  goBack?: boolean
  centerTitle?: string
  right?: ReactNode
}

function Navbar({ pageTitle, centerTitle, goBack, right }: NavbarProps) {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        {goBack && (
          <Image
            src={arrow_left.src}
            alt="Voltar"
            width="24"
            height="24"
            onClick={router.back}
          />
        )}

        {pageTitle && <h1 className={barlow.className}>{pageTitle}</h1>}
      </div>

      <div className={styles.center}>
        {centerTitle && <p className={barlow.className}>{centerTitle}</p>}
      </div>

      <div className={styles.right}>{right}</div>
    </nav>
  )
}

export { Navbar }
