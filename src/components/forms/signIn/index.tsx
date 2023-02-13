import { Input } from '@/components/inputs/sign-input'
import { heebo } from '@/utils/fonts'
import { Form } from '@unform/web'

import styles from './styles.module.scss'

export function SignInForm() {
  function handleFormSubmit() {}

  return (
    <Form className={styles.form} onSubmit={handleFormSubmit}>
      <Input name="email" placeholder="Email" required />
      <Input name="password" type="password" placeholder="Senha" required />

      <div className={styles['checkbox-container']}>
        <input name="stay_connected" type="checkbox" />
        <p className={heebo.className}>Esqueci minha senha</p>
      </div>

      <button className={heebo.className}>Acessar plataforma</button>
    </Form>
  )
}
