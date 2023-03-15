import Image from 'next/image'

import styles from './styles.module.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: any
}

function IconButton({ icon, ...rest }: ButtonProps) {
  return (
    <button type="button" className={styles.button} {...rest}>
      <Image src={icon} alt="" width="20" height="20" />
    </button>
  )
}

export { IconButton }
