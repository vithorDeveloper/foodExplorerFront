import { Container } from "./styles";
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { DishCard } from "../../components/dishCard"
import assets from "../../assets/macarrone.png"
import { FaPen} from 'react-icons/fa'

export function HomeAdm(){
  return(
    <Container>
      <Header />

      <div className="containerMacarrone">
            <img src={assets} alt="" />

          <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
      </div>

    <section>
        <h2>Refeições</h2>
      <div className="containerMeals">
        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />

        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />

        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />

        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />

        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />
      </div>

        <h2>Pratos Principais</h2>
        <div className="containerMainDishes">
        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />

        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />

        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />

        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />
        </div>

        <h2>Pratos Principais</h2>
      <div className="containerMainDishes">
        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />

        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />

        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />

        <DishCard 
        icon={FaPen}
        title="Salada Ravanello" 
        price={"R$ 45,90"}
        />
      </div>
      </section>

      <Footer />
    </Container>
  )
}