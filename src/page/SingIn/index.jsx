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

        <p>Email</p>
        <Input placeholder="Exemplo: exemplo@exemplo.com.br" />

        <p>Senha</p>
        <Input placeholder="No mínimo 6 caracteres" />

        <Button title='Entrar' />

        <TextButton href="/src/page/SingUp" title='Criat nova conta'/>

      </form>
      
    </Container>
  )
}
