import { Navbar } from '@/components/nav'
import { Button } from '@/components/button'

export default function Cities() {
  return (
    <>
      <Navbar
        pageTitle="Cidades"
        right={<Button content="+ Adicionar um perfil" styleType="primary" />}
      />

      <div>
        <p>Cities</p>
      </div>
    </>
  )
}
