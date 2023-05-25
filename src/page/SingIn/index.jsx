import logo from '../../assets/brand2.png'

import { Container} from './styles'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { TextButton } from '../../components/textButton'

export function SingIn() {

  return (
    <Container>

      <div className='brand'>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
      </div>

      <form>

      <h1>Faça login</h1>
        
        <div>
          <p>Email</p>
          <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </div>
        
        <div>
          <p>Senha</p>
          <Input type="password" placeholder="No mínimo 6 caracteres" />
        </div>

        <Button title='Entrar' />

        <TextButton href="/src/page/SingUp" title='Criar nova conta'/>

      </form>
      
    </Container>
  )
}
