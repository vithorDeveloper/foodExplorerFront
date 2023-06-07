import { Button } from "../../button";
import { Container } from "./styles";
import { FaMinus, FaPlus, FaAngleRight } from 'react-icons/fa'

import prato from '../../../assets/salada.svg'

export function DishCardMobile({icon: Icon, title, price, quant, description, ...rest}){
  return(
    <Container
      {...rest}
    >
      <button className="heartButton">
        {Icon && <Icon size={24} />}
      </button>

      <div className="containerImg">
        <img src={prato} alt="" />

        <a href="#">
          {title} 
          <span><FaAngleRight /></span>
          <p>{description}</p>
        </a>

        <p>{price}</p>
      </div>
    </Container>
  )
}