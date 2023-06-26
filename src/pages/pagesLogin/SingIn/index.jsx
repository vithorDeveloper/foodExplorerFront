import { Container, Form} from './styles'
import { useState } from 'react'
import { useAuth } from '../../../hooks/authContext'
import { Link } from 'react-router-dom'
import { Input } from '../../../components/responsive/input'
import { Button } from '../../../components/responsive/button'

import logo from '../../../assets/brand2.png'

export function SingIn() {

  const { singIn } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSingIn(){
    singIn({email, password})
  }

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
            <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" 
            onChange={e => setEmail(e.target.value)}
            />
        </div>
        
        <div>
          <p>Senha</p>
            <Input type="password" placeholder="No mínimo 6 caracteres" 
            onChange={e => setPassword(e.target.value)}
            />
        </div>

        <Button title='Entrar' onClick={handleSingIn}/>

        <Link to="/register">
        Criar nova conta
        </Link>

      </Form>
      
    </Container>
  )
}
