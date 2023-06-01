import { Container } from "./styles";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";
import { Tags } from "../../components/ingredientTags";
import { TextButton } from "../../components/textButton";
import { FaMinus, FaPlus, FaShoppingCart, FaChevronLeft } from "react-icons/fa"

import prato from "../../assets/salada.svg"

export function DishDetailsAdm(){
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

          <Button title="Editar prato"/>

    </section>

      <Footer />
    </Container>
  )
}