import { Button } from "../../button";
import { Container } from "./styles";
import { FaMinus, FaPlus, FaAngleRight } from 'react-icons/fa'

import prato from '../../../assets/salada.svg'

export function DishCardDesktop({icon: Icon, title, price, quant, ...rest}){
  return(
    <Container>
      <button className="heartButton">
        {Icon && <Icon size={24} />}
      </button>

      <div className="containerImg">
        <img src={prato} alt="" />

        <a href="#">
          {title} 
          <span><FaAngleRight /></span>
        </a>

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