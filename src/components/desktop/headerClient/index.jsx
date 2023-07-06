import { Container } from "./styles";
import { Link } from 'react-router-dom'
import { Input } from "../../responsive/input";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks/authContext";

import { SignOut, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react"

import logo from "../../../assets/brand2.png"

export function HeaderDesktop({onChange, title}){
  const {signOut} = useAuth()
  const navigate = useNavigate()

  function handleLogout(){
    navigate("/")
    signOut()
}

  function featureAlert(){
    return alert("🎈 Estamos trabalhando nessa funcionalidade! 🎈")
  }

  return(
    <Container>

      <div>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
      </div>

      <Input
        placeholder={"Busque por pratos ou ingredientes"}
        icon={MagnifyingGlass}
        onChange={onChange}
      />

      <div className="containerIcon" onClick={featureAlert}>
        <ShoppingCart size={28} className="iconCar"/>
        <span>Pedidos <span>(0)</span></span>
      </div>

          <SignOut 
            size={28} 
            color="black" 
            onClick={handleLogout}
          />

    </Container>
  )
}