import { Container, SectionMobile, SectionDesktop } from "./styles";

import { HeaderMobile } from "../../components/mobile/headerAdm"
import { HeaderDesktop} from "../../components/desktop/headerAdm"
import { FooterMobile } from "../../components/mobile/footer";
import { FooterDesktop } from "../../components/desktop/footer";
import { Button } from "../../components/button";
import { Tags } from "../../components/ingredientTags";
import { TextButton } from "../../components/textButton";
import { FaChevronLeft } from "react-icons/fa"

import prato from "../../assets/salada.svg"

export function DishDetailsAdm(){
  return(
    <Container>

      <HeaderMobile title={"admin"}/>
      <HeaderDesktop title={"admin"}/>

      <TextButton title="voltar" icon={FaChevronLeft}/>

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
          <Button title="Editar prato"/>
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
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
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
            <Button title="Editar prato"/>
          </div>
        </div>

      </SectionDesktop>
        <FooterDesktop />

    </Container>
  )
}