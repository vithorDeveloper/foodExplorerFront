import { Container } from "./styles";
import { Link } from 'react-router-dom'

import { FooterMobile } from "../../../components/mobile/footer";
import { FooterDesktop } from "../../../components/desktop/footer";
import { HeaderMobile } from "../../../components/mobile/headerClient"
import { HeaderDesktop} from "../../../components/desktop/headerClient"
import { DishCardMobile } from "../../../components/mobile/dishCardClient"
import { DishCardDesktop } from "../../../components/desktop/dishCardClient"
import assets from "../../../assets/pngegg 2.svg"
import { FaRegHeart } from 'react-icons/fa'


export function HomeClient(){
  return(
    <Container>
      <HeaderMobile />
      <HeaderDesktop />

      <div className="containerMacarrone">
            <img src={assets} alt="" />

          <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
      </div>

      <section>

              <h2>Refeições</h2>
          <div>
            <div className="dishMobile">
                <DishCardMobile
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardMobile 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardMobile 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardMobile 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
            </div>
                
            <div className="dishDesktop">    
                <DishCardDesktop
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardDesktop 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardDesktop 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardDesktop 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
            </div>
          </div>

              <h2>Pratos principais</h2>
          <div>
            <div className="dishMobile">
                <DishCardMobile
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardMobile 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardMobile 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardMobile 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
            </div>
                
            <div className="dishDesktop">    
                <DishCardDesktop
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardDesktop 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardDesktop 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
                <DishCardDesktop 
                  icon={FaRegHeart} 
                  title={"Salada Ravanello"}
                  price={"R$ 45,90"}
                  quant={"01"}
                  />
              </div>
          </div>

      </section>

      <FooterDesktop />
      <FooterMobile />
    </Container>
  )
}