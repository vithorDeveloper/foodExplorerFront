import { Container } from "./styles";
import { Input } from "../../components/input"
import logo from '../../assets/brand.png'
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

          <div className="link">
            <a href="#">Sair</a>
          </div>
        </section>

        <footer>
          <div>
            <img src={logo} alt="" />
            <p>food explorer</p>
          </div>

          <span>© 2023 - Todos os direitos reservados.</span>
        </footer>
    </Container>
  )
}