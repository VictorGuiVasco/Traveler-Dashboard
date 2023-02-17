import { useState } from 'react'
import { Form } from '@unform/web'

import { Checkbox } from '@/components/inputs/chekbox'
import { Input } from '@/components/inputs/sign-input'

import { heebo } from '@/utils/fonts'
import styles from './styles.module.scss'

export function SignInForm() {
  const [keepConnected, setKeepConnected] = useState(false)

  function handleFormSubmit() {}

  return (
    <Form className={styles.form} onSubmit={handleFormSubmit}>
      <Input name="email" placeholder="Email" required />
      <Input name="password" type="password" placeholder="Senha" required />

      <div className={styles['checkbox-container']}>
        <Checkbox
          name="keepConnected"
          label="Lembrar-me"
          value="value"
          checked={keepConnected}
          onChange={() => setKeepConnected(!keepConnected)}
        />
        <p className={heebo.className}>Esqueci minha senha</p>
      </div>

      <button className={heebo.className}>Acessar plataforma</button>
    </Form>
  )
}
