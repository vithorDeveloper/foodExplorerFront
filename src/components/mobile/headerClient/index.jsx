import { Container } from "./styles";
import { ShoppingCart, List} from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"


import logo from "../../../assets/brand2.png"

export function HeaderMobile({title}){
  const {signOut} = useAuth()
  const navigate = useNavigate()

  function handleSingOut(){
    const wantToLeave = window.confirm("Quer mesmo sair ?")

    if(wantToLeave){
      navigate(-1)
      signOut()
    }
  }

  return(
    <Container>
      <List size={28}/>

      <div>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
        <span>{title}</span>
      </div>

      <ShoppingCart size={28}/>
    </Container>
  )
}