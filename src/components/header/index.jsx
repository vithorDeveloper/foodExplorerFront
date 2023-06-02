import { Container } from "./styles";
import { FaSearch} from "react-icons/fa"
import { SignOut, ShoppingCart, List, MagnifyingGlass } from "@phosphor-icons/react"
import { Input } from "../input";
import logo from "../../assets/brand2.png"

export function Header({title}){
  return(
    <Container>
      <List size={28} className="iconMenu"/>

      <div>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
        <span>{title}</span>
      </div>

      <div className="hidden">
        <Input
          placeholder={"Busque por pratos ou ingredientes"}
          icon={MagnifyingGlass}
        />
      </div>

      <div className="containerIcon">
        <ShoppingCart size={28} className="iconCar"/>
        <span className="hidden">Pedidos <span>(0)</span></span>
      </div>

      <SignOut size={26} className="iconSingOut"/>
    </Container>
  )
}