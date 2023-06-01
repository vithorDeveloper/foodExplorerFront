import { Container } from "./styles";
import { FaBars, FaShoppingCart } from "react-icons/fa"
import logo from "../../assets/brand2.png"

export function Header({title}){
  return(
    <Container>
      <FaBars size={24}/>

      <div>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
        <span>{title}</span>
      </div>

      <FaShoppingCart size={24} className="iconCar"/>
    </Container>
  )
}