import { Button } from "../../responsive/button";
import { Container } from "./styles";
import { Link } from 'react-router-dom'
import { FaMinus, FaPlus, FaAngleRight } from 'react-icons/fa'

import prato from '../../../assets/salada.svg'

export function DishCardMobile({icon: Icon, title, price, quant, ...rest}){
  return(
    <Container>

        <button className="heartButton">
          {Icon && <Icon size={24} />}
        </button>

      <div className="containerImg">
        <img src={prato} alt="" />

        <Link to="/details">
          {title} 
          <span><FaAngleRight /></span>
        </Link>

        <p>{price}</p>
      </div>

      <div className="containerQuantity">
        <FaMinus />
        <p>{quant}</p>
        <FaPlus />
      </div>

      <Button title={"incluir"}/>
    </Container>
  )
}