import { Container } from "./styles";
import { Input } from "../../components/input"
import { Footer } from "../../components/footer";
import { RiCloseFill, RiSearchLine } from 'react-icons/ri'

export function MenuClient(){
  return(
    <Container>
        <header>
          <RiCloseFill size={40} />
          <h1>Menu</h1>
        </header>

        <section>
          <Input icon={RiSearchLine} placeholder="Busque por pratos ou ingredientes"/>

        <div>
          <a href="#">Sair</a>
        </div>
        </section>

        <Footer />
    </Container>
  )
}