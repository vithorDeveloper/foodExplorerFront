import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../../hooks/authContext";

export function Menu(){
  const {signOut} = useAuth()

  const navigate = useNavigate()

  function handleDishNew(){
    navigate("/new")
  }

  function handleHome(){
    navigate("/")
  }

  function handleLogout(){
    const wantToLeave = window.confirm("Quer mesmo sair ?")

    if(wantToLeave){
      navigate(-1)
      signOut()
    }
  }

  return(
    <Container>
    <div>
        <div className="linha"></div>

        <a href="#" onClick={handleHome}>Home</a>
        <a href="#" onClick={handleDishNew}>Novo Prato</a>
        <a href="#" onClick={handleLogout}>Logout</a>
      </div>
  </Container>
  )
}