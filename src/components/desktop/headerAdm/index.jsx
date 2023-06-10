import { Container } from "./styles";
import { Input } from "../../responsive/input";
import { SignOut, MagnifyingGlass } from "@phosphor-icons/react"
import logo from "../../../assets/brand2.png"
import { Link } from "react-router-dom";

export function HeaderDesktop({title}){
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
        />

      <Link to="/new" className="containerIcon">
        <span>Novo prato</span>
      </Link>

      <Link to="/login">
          <SignOut size={28} color="black"/>
      </Link>
    </Container>
  )
}