import { useRef, useEffect, RefObject, useState } from 'react'
import Image from 'next/image'
import { useField } from '@unform/core'

import styles from './styles.module.scss'
import { heebo } from '@/utils/fonts'

import eye from 'public/icons/eye.svg'
import eyeVisible from 'public/icons/eye_visible.svg'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  placeholder: string
}

export function Input({ name, placeholder, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, clearError, registerField } =
    useField(name)

  const [isEyeVisible, setIsEyeVisible] = useState(true)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref: RefObject<HTMLInputElement>) => {
        return ref.current?.value
      },
      setValue: (ref: RefObject<HTMLInputElement>, value: any) => {
        if (ref.current) ref.current.value = value
      },
      clearValue: (ref: RefObject<HTMLInputElement>) => {
        if (ref.current) ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  function switchType() {
    if (!inputRef) return

    if (inputRef?.current?.type === 'text') {
      inputRef.current.type = 'password'
      setIsEyeVisible(true)
    } else if (inputRef?.current?.type === 'password') {
      inputRef.current.type = 'text'
      setIsEyeVisible(false)
    }
  }

  return (
    <div className={styles.field}>
      <div id={fieldName} className={styles['input-wrapper']}>
        <input
          ref={inputRef}
          className={styles.input}
          defaultValue={defaultValue}
          onChangeCapture={clearError}
          type={rest.type}
          {...rest}
        />

        <label className={`${styles.label} ${heebo.className}`}>
          {placeholder}
        </label>
      </div>

      {rest.type === 'password' && isEyeVisible && (
        <Image
          src={eye}
          alt="Ver senha"
          onClick={switchType}
          width="24"
          height="24"
        />
      )}

      {rest.type === 'password' && !isEyeVisible && (
        <Image
          src={eyeVisible}
          alt="Ver senha"
          onClick={switchType}
          width="24"
          height="24"
        />
      )}
    </div>
  )
}
