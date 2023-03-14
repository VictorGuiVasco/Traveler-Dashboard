import { Navbar } from '@/components/nav'
import { Button } from '@/components/button'

import styles from './styles.module.scss'

export default function Cities() {
  return (
    <>
      <Navbar
        pageTitle="Cidades"
        right={<Button content="+ Adicionar um perfil" styleType="primary" />}
      />

      <main className={styles.main}>
        <div className={styles['card-list']}>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
          <div>
            <p>Cities</p>
          </div>
        </div>
      </main>
    </>
  )
}
