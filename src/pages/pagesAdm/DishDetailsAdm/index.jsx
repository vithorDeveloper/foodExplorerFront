import { Container, SectionMobile, SectionDesktop } from "./styles"

import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"
import { Button } from "../../../components/responsive/button"
import { FooterMobile } from "../../../components/mobile/footer"
import { FooterDesktop } from "../../../components/desktop/footer"
import { Tags } from "../../../components/responsive/tagIngredient"
import { TextButton } from "../../../components/responsive/textButton"
import { HeaderMobile } from "../../../components/mobile/headerClient"
import { HeaderDesktop} from "../../../components/desktop/headerClient"

import prato from "../../../assets/salada.svg"

export function DishDetailsAdm(){
  return(
    <Container>

      <HeaderMobile title={"admin"}/>
      <HeaderDesktop title={"admin"}/>

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

        <Link to="/edit" className="containerButton">
            <Button title="Editar prato"/>
        </Link>

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

            <Link to="/edit" className="containerButton">
              <Button title="Editar prato"/>
            </Link>
        </div>

      </SectionDesktop>

        <FooterDesktop />

    </Container>
  )
}