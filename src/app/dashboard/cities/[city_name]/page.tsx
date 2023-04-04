import { Navbar } from '@/components/nav'
import { IconButton } from '@/components/icon-button'
import { Button } from '@/components/button'

import styles from './styles.module.scss'

import editIcon from 'public/icons/edit.svg'
import trashIcon from 'public/icons/trash.svg'

export default function City() {
  return (
    <>
      <Navbar
        goBack
        right={
          <>
            <div className={styles['nav-icon']}>
              <IconButton icon={editIcon.src} iconSize={24} />
              <IconButton icon={trashIcon.src} iconSize={24} />
            </div>
            <Button content="+ Adicionar um local" />
          </>
        }
      />

      <div>
        <h1>Cidade</h1>
      </div>
    </>
  )
}
