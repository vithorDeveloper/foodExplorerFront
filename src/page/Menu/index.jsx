import { Container } from "./styles";
import { Input } from "../../components/input"
import logo from '../../assets/brand.png'

export function Menu(){
  return(
    <Container>
        <header>
          <h1>Menu</h1>
        </header>

        <section>
          <Input placeholder="Busque por pratos ou ingredientes"/>
        </section>

        <footer>
          <div>
            <img src={logo} alt="" />
            <p>food explorer</p>
          </div>
        </footer>
    </Container>
  )
}