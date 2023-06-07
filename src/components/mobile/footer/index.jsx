import { Container } from "./style";
import logo from '../../../assets/brand.png'

export function FooterMobile(){
  return(
    <Container>
      <div>
        <img src={logo} alt="" />
          <p>food explorer</p>
        </div>

      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}