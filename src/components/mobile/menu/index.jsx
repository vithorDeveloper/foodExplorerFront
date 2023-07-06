import { Container } from './styles'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from "../../../hooks/authContext";

export function Menu({title}){
  const {signOut} = useAuth()
  const navigate = useNavigate()

  function handleLogout(){
      navigate("/")
      signOut()
  }

  return(
    <Container>
      <div>
        <div className="linha"></div>

        <Link to="/">Home</Link>
        <Link  to="/new">Novo Prato</Link>
        <a onClick={handleLogout}>Logout</a>
      </div>
  </Container>
  )
}