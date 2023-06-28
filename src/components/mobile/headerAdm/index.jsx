import { Container } from "./styles";
import { FaBars } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import logo from "../../../assets/brand2.png"

import { useAuth } from "../../../hooks/authContext";


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
      <FaBars size={24}/>

      <div>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
        <span>{title}</span>
      </div>
    </Container>
  )
}