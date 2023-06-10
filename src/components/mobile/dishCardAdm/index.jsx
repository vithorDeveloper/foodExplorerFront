import { Button } from "../../responsive/button";
import { Container } from "./styles";
import { FaMinus, FaPlus, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import prato from '../../../assets/salada.svg'

export function DishCardMobile({icon: Icon, title, price, quant, description, ...rest}){
  return(
    <Container
      {...rest}
    >
      <Link to="/edit" className="heartButton">
        {Icon && <Icon size={24} />}
      </Link>

      <div className="containerImg">
        <img src={prato} alt="" />

        <Link to="/details">
          {title} 
          <span><FaAngleRight /></span>
          <p>{description}</p>
        </Link>

        <p>{price}</p>
      </div>
    </Container>
  )
}