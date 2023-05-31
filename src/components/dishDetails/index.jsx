import { Container } from "./styles";

import { Header } from "../header";
import { Footer } from "../footer";
import { Button } from "../button";
import { Tags } from "../ingredientTags";
import { TextButton } from "../textButton";
import { FaMinus, FaPlus, FaShoppingCart, FaChevronLeft } from "react-icons/fa"

import prato from "../../assets/salada.svg"

export function DishDetails(){
  return(
    <Container>

      <Header />

      <TextButton title="voltar" icon={FaChevronLeft}/>

    <section>

      <div className="containerDish">
        <img src={prato} alt="" />

        <div>
          <h3>Salada Ravanello</h3>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
        </div>
      </div>

      <div className="containerTags">
        <Tags title="alface"/>
        <Tags title="cebola"/>
        <Tags title="pão naan"/>
        <Tags title="pepino"/>
        <Tags title="rabanete"/>
        <Tags title="tomate"/>
      </div>

        <div className="containerButton">

          <div className="containerQuantity">
            <FaMinus />
            <p>01</p>
            <FaPlus />
          </div>

          <Button icon={FaShoppingCart} size={16} title="pedir ∙ R$ 25,00"/>

        </div>

    </section>

      <Footer />
    </Container>
  )
}