import { Button } from "../button";
import { Container } from "./styles";
import { FaRegHeart, FaMinus, FaPlus, FaAngleRight } from 'react-icons/fa'
import prato from '../../assets/image 2.png'

export function DishCard({title}){
  return(
    <Container>
      <button className="heartButton">
        <FaRegHeart />
      </button>

      <div className="containerImg">
        <img src={prato} alt="" />

        <a href="#">
          salada revanello 
          <span><FaAngleRight /></span>
        </a>

        <p>R$ 45,80</p>
      </div>

      <div className="containerQuantity">
        <FaMinus />
        <p>01</p>
        <FaPlus />
      </div>

      <Button title={"incluir"}/>
    </Container>
  )
}