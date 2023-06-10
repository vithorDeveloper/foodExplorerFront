import { Container } from "./styles";
import { ShoppingCart, List} from "@phosphor-icons/react"

import logo from "../../../assets/brand2.png"

export function HeaderMobile({title}){
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