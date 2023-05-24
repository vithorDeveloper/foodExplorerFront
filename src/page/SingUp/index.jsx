import logo from '../../assets/brand2.png'

import { Container} from './styles'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { TextButton } from '../../components/textButton'

export function SingUp() {

  return (
    <Container>

      <div className='brand'>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
      </div>

      <form>

        <p>Seu nome</p>
        <Input type="text" placeholder="Exemplo: Neymar da Silva" />
        
        <p>Email</p>
        <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />

        <p>Senha</p>
        <Input type="password" placeholder="No mínimo 6 caracteres" />

        <Button title='Criar conta' />

        <TextButton href="/src/page/SingIn" title='Já tenho uma conta'/>

      </form>
      
    </Container>
  )
}
