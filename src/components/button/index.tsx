import Image from 'next/image'

import { heebo } from '@/utils/fonts'

import styles from './styles.module.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: any
  content: string
  outline?: boolean
  styleType?: 'primary' | 'secondary' | 'cancel'
}

function Button({
  icon,
  content,
  outline,
  styleType = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${heebo.className} ${styles[styleType]} ${
        outline ? styles.outline : ''
      }`}
      {...rest}
    >
      {icon && <Image src={icon} alt="" width="20" height="20" />} {content}
    </button>
  )
}

export { Button }
