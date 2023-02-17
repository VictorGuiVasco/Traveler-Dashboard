'use client'

import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

import logoIcon from 'public/icons/logo.svg'
import logout from 'public/icons/logout.svg'

import cities from 'public/icons/cities.svg'
import cities_off from 'public/icons/cities_off.svg'
import dashboard from 'public/icons/dashboard.svg'
import dashboard_off from 'public/icons/dashboard_off.svg'
import chat from 'public/icons/chat.svg'
import chat_off from 'public/icons/chat_off.svg'

import styles from './styles.module.scss'

function Aside() {
  const pathName = usePathname()

  return (
    <nav className={styles.aside}>
      <Link href="dashboard/cities">
        <Image src={logoIcon.src} alt="Trevaler" width="22" height="48" />
      </Link>

      <div className={styles.navigation}>
        <Link href="dashboard/cities">
          {pathName === '/dashboard/cities' ? (
            <Image src={cities.src} alt="cities" width="25" height="24" />
          ) : (
            <Image src={cities_off.src} alt="cities" width="25" height="24" />
          )}
        </Link>

        <Link href="dashboard/categories">
          {pathName === '/dashboard/categories' ? (
            <Image
              src={dashboard.src}
              alt="categories"
              width="22"
              height="48"
            />
          ) : (
            <Image
              src={dashboard_off.src}
              alt="categories"
              width="22"
              height="48"
            />
          )}
        </Link>
        <Link href="dashboard/comments">
          {pathName === '/dashboard/comments' ? (
            <Image src={chat.src} alt="comments" width="22" height="48" />
          ) : (
            <Image src={chat_off.src} alt="comments" width="22" height="48" />
          )}
        </Link>
      </div>

      <Link href="/">
        <Image src={logout.src} alt="logout" width="24" height="24" />
      </Link>
    </nav>
  )
}

export { Aside }
