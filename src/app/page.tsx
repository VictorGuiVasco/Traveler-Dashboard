'use client'

import Image from 'next/image'

import { SignInForm } from '@/components/forms/signIn'

import { barlow, heebo, inter } from '@/utils/fonts'
import styles from './page.module.scss'

import cover from 'public/images/auth-cover.png'
import alert from 'public/icons/alert.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles['image-container']}>
        <Image
          src={cover.src}
          width={cover.width}
          height={cover.height}
          alt="cover"
        />
      </section>

      <section className={styles['auth-container']}>
        <div>
          <h1 className={barlow.className}>Fazer login</h1>

          <SignInForm />

          <div className={styles['alert-content']}>
            <Image
              src={alert.src}
              width={alert.width}
              height={alert.height}
              alt="cover"
            />
            <p className={heebo.className}>
              Acesso restrito à sócios e moderadores
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
