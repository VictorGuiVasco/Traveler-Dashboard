import { useRef, useEffect, RefObject } from 'react'
import { useField } from '@unform/core'

import styles from './styles.module.scss'
import { heebo } from '@/utils/fonts'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  placeholder?: string
}

export function Input({ name, label, placeholder, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, clearError, registerField } =
    useField(name)

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

  return (
    <div className={styles.field}>
      {label && (
        <label
          htmlFor={fieldName}
          className={`${styles.label} ${heebo.className}`}
        >
          {label}
        </label>
      )}

      <input
        id={fieldName}
        ref={inputRef}
        className={styles.input}
        defaultValue={defaultValue}
        onChangeCapture={clearError}
        {...rest}
      />
      {placeholder && (
        <label
          id="placeholder"
          className={`${styles.placeholder} ${heebo.className}`}
        >
          {placeholder}
        </label>
      )}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
