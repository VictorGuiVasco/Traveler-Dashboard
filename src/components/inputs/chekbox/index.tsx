import { useField } from '@unform/core'
import { InputHTMLAttributes, RefObject, useEffect, useRef } from 'react'

import { heebo } from '@/utils/fonts'
import styles from './styles.module.scss'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string | React.ReactNode
  value: string
  checked?: boolean
}

export function Checkbox({
  name,
  label,
  value,
  checked,
  ...rest
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name)

  const defaultChecked = defaultValue === value

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref: any) => {
        return ref.current?.checked
      },
      setValue: (ref: RefObject<HTMLInputElement>, value: boolean) => {
        if (ref.current) ref.current.checked = value
      },
      clearValue: (ref: RefObject<HTMLInputElement>) => {
        if (ref.current) ref.current.checked = defaultChecked
      },
    })
  }, [defaultValue, checked, fieldName, registerField])

  return (
    <div>
      <label className={styles['checkbox-container']}>
        <input
          name={name}
          ref={inputRef}
          className={styles.checkbox}
          value={value}
          checked={checked}
          onChangeCapture={clearError}
          defaultChecked={defaultChecked}
          type="checkbox"
          {...rest}
        />
        <p className={heebo.className}>{label}</p>
      </label>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
