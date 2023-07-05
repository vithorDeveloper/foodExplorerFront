import { Container } from "./styles";
import { FaBars } from "react-icons/fa"
import { ShoppingCart} from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/authContext";

import logo from "../../../assets/brand2.png"

export function HeaderMobile({title, toggleMenu}){
  const {signOut} = useAuth()
  const navigate = useNavigate()

  function featureAlert(){
    return alert("🎈 Estamos trabalhando nessa funcionalidade! 🎈")
  }

  return(
    <Container>

      <FaBars size={24}
      onClick={toggleMenu}
      />

      <div>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
        <span>{title}</span>
      </div>

      <ShoppingCart size={28} onClick={featureAlert}/>
    </Container>
  )
}