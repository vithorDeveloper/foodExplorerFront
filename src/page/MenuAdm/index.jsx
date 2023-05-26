import { Container } from "./styles";
import { Input } from "../../components/input"
import { RiCloseFill, RiSearchLine } from 'react-icons/ri'
import { Footer } from "../../components/footer";

export function MenuAdm(){
  return(
    <Container>
        <header>
          <RiCloseFill size={40} />
          <h1>Menu</h1>
        </header>

        <section>
          <Input icon={RiSearchLine} placeholder="Busque por pratos ou ingredientes"/>

        <div>
          <a href="#">Novo prato</a>
          <a href="#">Sair</a>
        </div>
        </section>

        <Footer />
    </Container>
  )
}