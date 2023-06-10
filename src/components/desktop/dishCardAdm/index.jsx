import { Container } from "./styles";
import { Link } from "react-router-dom";
import { FaAngleRight } from 'react-icons/fa'

import prato from '../../../assets/salada.svg'

export function DishCardDesktop({icon: Icon, title, price, quant, description, ...rest}){

  return(
    <Container {...rest}>

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