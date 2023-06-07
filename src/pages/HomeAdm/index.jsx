import { Container } from "./styles";
import { FooterMobile } from "../../components/mobile/footer";
import { FooterDesktop } from "../../components/desktop/footer";
import { HeaderMobile } from "../../components/mobile/headerAdm"
import { HeaderDesktop} from "../../components/desktop/headerAdm"
import { DishCardMobile } from "../../components/mobile/dishCardAdm"
import { DishCardDesktop } from "../../components/desktop/dishCardAdm"
import assets from "../../assets/pngegg 2.svg"
import { FaPen } from 'react-icons/fa'

export function HomeAdm(){
  return(
    <Container>
      <HeaderMobile title={"admin"}/>
      <HeaderDesktop title={"admin"}/>

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
                icon={FaPen}
                title="Salada Ravanello" 
                description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                price={"R$ 45,90"}
                />

                <DishCardMobile
                icon={FaPen}
                title="Salada Ravanello" 
                description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                price={"R$ 45,90"}
                />

                <DishCardMobile
                icon={FaPen}
                title="Salada Ravanello" 
                description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                price={"R$ 45,90"}
                />

                <DishCardMobile
                icon={FaPen}
                title="Salada Ravanello" 
                description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                price={"R$ 45,90"}
                />

                <DishCardMobile
                icon={FaPen}
                title="Salada Ravanello" 
                description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                price={"R$ 45,90"}
                />
              </div>

              <div className="dishDesktop">
                  <DishCardDesktop
                  icon={FaPen}
                  title="Salada Ravanello" 
                  description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                  price={"R$ 45,90"}
                  />

                  <DishCardDesktop
                  icon={FaPen}
                  title="Salada Ravanello" 
                  description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                  price={"R$ 45,90"}
                  />

                  <DishCardDesktop
                  icon={FaPen}
                  title="Salada Ravanello" 
                  description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                  price={"R$ 45,90"}
                  />

                  <DishCardDesktop
                  icon={FaPen}
                  title="Salada Ravanello" 
                  description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                  price={"R$ 45,90"}
                  />

                  <DishCardDesktop
                  icon={FaPen}
                  title="Salada Ravanello" 
                  description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                  price={"R$ 45,90"}
                  />
              </div>
          </div>

                <h2>Pratos principais</h2>
            <div>
              <div className="dishMobile">
                <DishCardMobile
                icon={FaPen}
                title="Salada Ravanello" 
                description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                price={"R$ 45,90"}
                />

                <DishCardMobile
                icon={FaPen}
                title="Salada Ravanello" 
                description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                price={"R$ 45,90"}
                />

                <DishCardMobile
                icon={FaPen}
                title="Salada Ravanello" 
                description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                price={"R$ 45,90"}
                />

                <DishCardMobile
                icon={FaPen}
                title="Salada Ravanello" 
                description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                price={"R$ 45,90"}
                />

                <DishCardMobile
                icon={FaPen}
                title="Salada Ravanello" 
                description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                price={"R$ 45,90"}
                />
              </div>

              <div className="dishDesktop">
                  <DishCardDesktop
                  icon={FaPen}
                  title="Salada Ravanello" 
                  description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                  price={"R$ 45,90"}
                  />

                  <DishCardDesktop
                  icon={FaPen}
                  title="Salada Ravanello" 
                  description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                  price={"R$ 45,90"}
                  />

                  <DishCardDesktop
                  icon={FaPen}
                  title="Salada Ravanello" 
                  description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                  price={"R$ 45,90"}
                  />

                  <DishCardDesktop
                  icon={FaPen}
                  title="Salada Ravanello" 
                  description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                  price={"R$ 45,90"}
                  />

                  <DishCardDesktop
                  icon={FaPen}
                  title="Salada Ravanello" 
                  description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                  price={"R$ 45,90"}
                  />
              </div>
            </div>

      </section>

      <FooterDesktop />
      <FooterMobile />
    </Container>
  )
}