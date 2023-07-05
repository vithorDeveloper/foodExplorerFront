import { Container, Section } from "./styles"

import { IoIosHeart } from 'react-icons/io'
import { Footer } from "../../../components/responsive/footer"
import { HeaderMobile } from "../../../components/mobile/headerClient"
import { HeaderDesktop} from "../../../components/desktop/headerClient"
import { DishCardMobile } from "../../../components/mobile/dishCardClient"
import { DishCardDesktop } from "../../../components/desktop/dishCardClient"
import { Menu } from "../../../components/mobile/menu"

import { useEffect, useState } from "react"

import { api } from "../../../services/api"

import assets from "../../../assets/pngegg 2.svg"

export function HomeClient(){
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    async function searchDishes() {
      const response = await api.get(`/dishes?title=${search}&ingredients=${search}`);
      setDishes(response.data);
    }

    searchDishes();
  }, [search]);


  return(
    <Container>
      <HeaderMobile toggleMenu={toggleMenu}/>
      <HeaderDesktop  onChange={e => setSearch(e.target.value)}/>

      {isMenuOpen && <Menu />}

      <div className="containerMacarrone">
        <img src={assets} alt="" />

        <div>
          <h3>Sabores inigualáveis</h3>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>

      <Section>

        <h2>Refeições</h2>
          <div>
              <div className="dishMobile">
              {
                dishes.filter(dish => dish.category === "Refeição").map(dish => (
                  <DishCardMobile
                  key={String(dish.id)}
                  data={dish}
                  icon={IoIosHeart}
                  />
                ))
              }
              </div>

              <div className="dishDesktop">
                {
                    dishes.filter(dish => dish.category === "Refeição").map(dish =>(
                      <DishCardDesktop
                        key={String(dish.id)}
                        data={dish}
                        icon={IoIosHeart}
                      />
                    ))
                  }
              </div>
            </div>

        <h2>Bebidas</h2>
            <div>
              <div className="dishMobile">
              {
                dishes.filter(dish => dish.category === "Bebidas").map(dish => (
                  <DishCardMobile
                  key={String(dish.id)}
                  data={dish}
                  icon={IoIosHeart}
                  />
                ))
              }
              </div>

              <div className="dishDesktop">
                {
                    dishes.filter(dish => dish.category === "Bebidas").map(dish =>(
                      <DishCardDesktop
                        key={String(dish.id)}
                        data={dish}
                        icon={IoIosHeart}
                      />
                    ))
                  }
              </div>
            </div>

            <h2>Sobremesas</h2>
            <div>
              <div className="dishMobile">
              {
                dishes.filter(dish => dish.category === "Sobremesas").map(dish => (
                  <DishCardMobile
                  key={String(dish.id)}
                  data={dish}
                  icon={IoIosHeart}
                  />
                ))
              }
              </div>

              <div className="dishDesktop">
                {
                    dishes.filter(dish => dish.category === "Sobremesas").map(dish =>(
                      <DishCardDesktop
                        key={String(dish.id)}
                        data={dish}
                        icon={IoIosHeart}
                      />
                    ))
                  }
              </div>
            </div>

      </Section>

      <Footer />
    </Container>
  )
}