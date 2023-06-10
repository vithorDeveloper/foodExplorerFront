import { Container } from "./styles";
import { Input } from "../../../components/responsive/input"
import { FooterMobile } from "../../../components/mobile/footer";
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
        
        <FooterMobile />
    </Container>
  )
}