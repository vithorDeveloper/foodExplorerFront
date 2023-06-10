import { Container, Form, TextArea, MainMobile, MainDesktop } from "./styles"

import { Link } from "react-router-dom"
import { Input } from "../../../components/responsive/input"
import { Button } from "../../../components/responsive/button"
import { FooterMobile } from "../../../components/mobile/footer"
import { FooterDesktop } from "../../../components/desktop/footer"
import { HeaderMobile } from "../../../components/mobile/headerAdm"
import { HeaderDesktop} from "../../../components/desktop/headerAdm"
import { TextButton } from "../../../components/responsive/textButton"
import { NewIngredient } from "../../../components/responsive/newIngredient"

import { FaChevronLeft, FaDownload, FaAngleDown} from "react-icons/fa"

export function EditDish(){
  return(
    <Container>

    <HeaderMobile title={"admin"}/>
    <HeaderDesktop title={"admin"}/>

    <MainMobile>
      <Link to="/">
        <TextButton icon={FaChevronLeft} title={"voltar"} />
      </Link>

      <Form>
        <h1>Editar prato</h1>

        <p>Imagem do prato</p>
          <Input 
            icon={FaDownload}
            placeholder={"Selecione imagem para alterá-la"}
          />

        <p>Nome</p>
          <Input 
            placeholder={"Salada ceasar"}
          />

        <p>Categoria</p>
          <Input 
            className="imgDish"
            icon={FaAngleDown}
            placeholder={"Refeição"}
          />

        <p>Ingredientes</p>
          <div className="containerTags">
            <NewIngredient 
              placeholder={"adicionar"}
              isNew={true}
            />
            <NewIngredient 
              placeholder={"macarrão"}
            />
          </div>

        <p>preço</p>
          <Input 
          placeholder={"R$ 40,00"}
          />

        <p>Descrição</p>
          <TextArea 
          placeholder="A Salada César é uma opção refrescante para o verão."
          />  

        <div className="containerButtons">
          <Button 
            title={"Excluir prato"}
          />

          <Button 
            title={"Salvar alterações"}
          />
        </div>

      </Form>
    </MainMobile>

      <FooterMobile />

    <MainDesktop>

      <Form>
        <Link to="/"> 
          <TextButton icon={FaChevronLeft} title={"voltar"}/>
        </Link>

        <h1>Editar prato</h1>

        <div className="containerOne">
            <div>
              <p>Imagem do prato</p>
                <Input 
                  icon={FaDownload}
                  placeholder={"Selecione imagem para alterá-la"}
                />
            </div>

            <div className="inputName">
              <p>Nome</p>
                <Input 
                  placeholder={"Salada ceasar"}
                />
            </div>
            

            <div className="inputSnack">
              <p>Categoria</p>
                <Input 
                  icon={FaAngleDown}
                  placeholder={"Refeição"}
                />
            </div>
        </div>

        <div className="containerTwo">
          <div>
            <p>Ingredientes</p>
              <div className="containerTags">
                <NewIngredient 
                  placeholder={"adicionar"}
                  isNew={true}
                />
                <NewIngredient 
                  placeholder={"macarrão"}
                />
              </div>
          </div>

          <div className="inputPrice">
            <p>preço</p>
              <Input 
                placeholder={"R$ 40,00"}
              />
          </div>
        </div>

        <p>Descrição</p>
          <TextArea 
            placeholder="A Salada César é uma opção refrescante para o verão."
          />  

        <div className="containerButtons">
          <Button 
            title={"Excluir prato"}
          />

          <Button 
            title={"Salvar alterações"}
          />
        </div>

      </Form>
    </MainDesktop>
    
      <FooterDesktop />

    </Container>
  )
}