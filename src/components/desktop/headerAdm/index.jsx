import { Container } from "./styles";
import { Input } from "../../responsive/input";
import { SignOut, MagnifyingGlass } from "@phosphor-icons/react"
import logo from "../../../assets/brand2.png"
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks/authContext";


export function HeaderDesktop({onChange, title}){
  const {signOut} = useAuth()
  const navigate = useNavigate()

  function handleLogout(){
    navigate("/")
    signOut()
}

  return(
    <Container>

      <div>
        <div>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
        </div>
        
        <p>{title}</p>
      </div>

        <Input
          placeholder={"Busque por pratos ou ingredientes"}
          icon={MagnifyingGlass}
          onChange={onChange}
        />

      <Link to="/new" className="containerIcon">
        <span>Novo prato</span>
      </Link>

      
      <SignOut size={28} 
        color="black" 
        onClick={handleLogout}
      />
      
    </Container>
  )
}