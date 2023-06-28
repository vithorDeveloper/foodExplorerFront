import { Container, Form} from './styles'

import { useState} from 'react'
import { api } from '../../../services/api'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../../components/responsive/input'
import { Button } from '../../../components/responsive/button'

import logo from '../../../assets/brand2.png'

export function SingUp() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp() {
    if(!name || !email || !password){
      alert("preencha todos os campos")
    }

    if(password.length < 6){
      return alert("Senha muito curta (mìnimo 6 caracteres!)")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("usuario cadastrado")
    })
      navigate(-1)
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }
    })
  }

  return (
    <Container>

      <div className='brand'>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
      </div>

      <Form>

        <h1>Crie sua conta</h1>
        
        <div>
          <p>Seu nome</p>
            <Input 
            type="text" 
            placeholder="Exemplo: Neymar da Silva" 
            onChange={e => setName(e.target.value)}
            />
            
        </div>
        
        <div>
          <p>Email</p>
            <Input 
            type="email" 
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            onChange={e => setEmail(e.target.value)}
            />
        </div>
        
        <div>
          <p>Senha</p>
            <Input 
            type="password" 
            placeholder="No mínimo 6 caracteres" 
            onChange={e => setPassword(e.target.value)}
            />
        </div>
        
          <Button 
          title='Criar conta' 
          onClick={handleSignUp}
          />

        <Link to="/">Já tenho uma conta</Link>

      </Form>
      
    </Container>
  )
}
