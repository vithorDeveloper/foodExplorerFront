import { Container, SectionMobile, SectionDesktop } from "./styles";

import { HeaderMobile } from "../../../components/mobile/headerClient"
import { HeaderDesktop} from "../../../components/desktop/headerClient"
import { FooterDesktop } from "../../../components/desktop/footer";
import { FooterMobile } from "../../../components/mobile/footer";
import { Button } from "../../../components/responsive/button";
import { Tags } from "../../../components/responsive/tagIngredient";
import { Link } from 'react-router-dom'
import { TextButton } from "../../../components/responsive/textButton";
import { FaMinus, FaPlus, FaShoppingCart, FaChevronLeft } from "react-icons/fa"

import prato from "../../../assets/salada.svg"

export function DishDetailsClient(){
  return(
    <Container>

      <HeaderMobile />
      <HeaderDesktop />

      <Link to="/">
        <TextButton title="voltar" icon={FaChevronLeft}/>
      </Link>

    <SectionMobile>

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

    </SectionMobile>
      <FooterMobile />

    <SectionDesktop>

      <div className="containerDish">
        <img src={prato} alt="" />
      </div>

      <div>
          <div className="containerTitulo">
            <h3>Salada Ravanello</h3>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
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
      </div>

    </SectionDesktop>
      <FooterDesktop />
      
    </Container>
  )
}