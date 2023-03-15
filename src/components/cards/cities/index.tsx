import { IconButton } from '@/components/icon-button'

import styles from './styles.module.scss'

import editIcon from 'public/icons/edit.svg'
import trashIcon from 'public/icons/trash.svg'

type CitiesCardProps = {
  imageUrl: string
  city: string
  locals_amount: number
}

function CitiesCard({ city, imageUrl, locals_amount }: CitiesCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="city" />

      <div className={styles.info}>
        <h1 title={city}>{city}</h1>
        <p>{locals_amount === 1 ? '1 local' : `${locals_amount} locais`}</p>
      </div>

      <div className={styles.buttons}>
        <IconButton icon={editIcon.src} />
        <IconButton icon={trashIcon.src} />
      </div>
    </div>
  )
}

export { CitiesCard }
