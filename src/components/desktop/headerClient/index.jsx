import { Container } from "./styles";
import { Link } from 'react-router-dom'
import { Input } from "../../responsive/input";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks/authContext";

import { SignOut, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react"

import logo from "../../../assets/brand2.png"

export function HeaderDesktop({title}){
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

      <div>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
        <span>{title}</span>
      </div>

      <Input
        placeholder={"Busque por pratos ou ingredientes"}
        icon={MagnifyingGlass}
      />

      <div className="containerIcon">
        <ShoppingCart size={28} className="iconCar"/>
        <span>Pedidos <span>(0)</span></span>
      </div>

      <Link to="/">
          <SignOut size={28} color="black" onClick={handleSingOut}/>
      </Link>

    </Container>
  )
}