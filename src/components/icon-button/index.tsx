import Image from 'next/image'

import styles from './styles.module.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: any
  iconSize?: number
}

function IconButton({ icon, iconSize = 20, ...rest }: ButtonProps) {
  return (
    <button type="button" className={styles.button} {...rest}>
      <Image src={icon} alt="" width={iconSize} height={iconSize} />
    </button>
  )
}

export { IconButton }
