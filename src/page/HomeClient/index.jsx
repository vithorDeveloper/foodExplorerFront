import { Container } from "./styles";
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { DishCard } from "../../components/dishCard"
import assets from "../../assets/macarrone.png"
import { FaRegHeart } from 'react-icons/fa'


export function HomeClient(){
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
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
      </div>

        <h2>Pratos Principais</h2>
        <div className="containerMainDishes">
        <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard 
          icon={FaRegHeart}
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        </div>

        <h2>Pratos Principais</h2>
      <div className="containerMainDishes">
      <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
        <DishCard 
          icon={FaRegHeart} 
          title={"Salada Ravanello"}
          price={"R$ 45,90"}
          quant={"01"}
          />
      </div>
      </section>

      <Footer />
    </Container>
  )
}