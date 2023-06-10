import { Container, Form} from './styles'

import { Link } from 'react-router-dom'
import { Input } from '../../../components/responsive/input'
import { Button } from '../../../components/responsive/button'
import { TextButton } from '../../../components/responsive/textButton'

import logo from '../../../assets/brand2.png'

export function SingIn() {

  return (
    <Container>

    <div className='brand'>
      <img src={logo} alt="" />
      <h1>food explorer</h1>
    </div>

      <Form>

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

        <Link to="/register">
          <TextButton href="/src/page/SingUp" title='Criar nova conta'/>
        </Link>

      </Form>
      
    </Container>
  )
}
