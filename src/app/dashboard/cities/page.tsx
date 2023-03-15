import { Navbar } from '@/components/nav'
import { Button } from '@/components/button'
import { CitiesCard } from '@/components/cards/cities'

import { cities } from '@/utils/cities'

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
          {cities.map((city) => (
            <CitiesCard
              key={city.id}
              city={city.city}
              imageUrl={city.imageUrl}
              locals_amount={city.locals_amount}
            />
          ))}
        </div>
      </main>
    </>
  )
}
