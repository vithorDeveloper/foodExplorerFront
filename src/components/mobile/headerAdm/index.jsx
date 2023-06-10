import { Container } from "./styles";
import { FaBars } from "react-icons/fa"
import logo from "../../../assets/brand2.png"

export function HeaderMobile({title}){
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