import { Container } from "./styles";

import { Input } from "../../input";
import { SignOut, MagnifyingGlass } from "@phosphor-icons/react"
import logo from "../../../assets/brand2.png"

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

      <div className="containerIcon">
        <span>Novo prato</span>
      </div>

      <SignOut size={28} />
    </Container>
  )
}