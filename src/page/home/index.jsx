import { Container } from "./styles";
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { DishCard } from "../../components/dishCard"
import assets from "../../assets/macarrone.png"

export function Home(){
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

      <h2>Refeições</h2>
      <DishCard />

      <h2>Pratos Principais</h2>
      <DishCard />

      <h2>Pratos Principais</h2>
      <DishCard />

      <Footer />
    </Container>
  )
}