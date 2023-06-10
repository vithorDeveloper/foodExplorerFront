import { Container, Section } from "./styles"

import { RiCloseFill, RiSearchLine } from 'react-icons/ri'
import { Input } from "../../../components/responsive/input"
import { FooterMobile } from "../../../components/mobile/footer"

export function MenuClient(){
  return(
    <Container>

        <header>
          <RiCloseFill size={40} />
          <h1>Menu</h1>
        </header>

        <Section>
          <Input icon={RiSearchLine} placeholder="Busque por pratos ou ingredientes"/>

          <div>
            <a href="#">Sair</a>
          </div>
        </Section>
        
        <FooterMobile />

    </Container>
  )
}