import { Container, Form, TextArea, MainMobile, MainDesktop } from "./styles";

import { Input } from "../../../components/responsive/input";
import { Button } from "../../../components/responsive/button";
import { HeaderMobile } from "../../../components/mobile/headerAdm"
import { HeaderDesktop} from "../../../components/desktop/headerAdm"
import { FooterMobile } from "../../../components/mobile/footer";
import { FooterDesktop } from "../../../components/desktop/footer";
import { NewIngredient } from "../../../components/responsive/newIngredient";
import { TextButton } from "../../../components/responsive/textButton";

import { FaChevronLeft, FaDownload, FaAngleDown} from "react-icons/fa"
import { Link } from "react-router-dom";

export function NewDish(){
  return(
    <Container>

      <HeaderMobile title={"admin"}/>
      <HeaderDesktop title={"admin"}/>

      <MainMobile>
        <Link to="/">
          <TextButton 
          icon={FaChevronLeft}
          title={"voltar"}
          />
        </Link>

    <Form>
      <h1>Novo prato</h1>

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
        <NewIngredient 
        placeholder={"macarrão"}
        />
        <NewIngredient 
        placeholder={"macarrão"}
        />
      </div>

      <p>preço</p>
      <Input 
      placeholder={"R$ 00,00"}
      />

      <p>Descrição</p>
      <TextArea 
      placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
      />  

      <div className="containerButtons">
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
          <TextButton 
          icon={FaChevronLeft}
          title={"voltar"}
          />
        </Link>
          <h1>Novo prato</h1>

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
                    <NewIngredient 
                    placeholder={"macarrão"}
                    />
                    <NewIngredient 
                    placeholder={"macarrão"}
                    />
                  </div>
                </div>

                <div className="inputPrice">
                  <p>preço</p>
                  <Input 
                  placeholder={"R$ 00,00"}
                  />
                </div>
          </div>

          <p>Descrição</p>
          <TextArea 
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />  

          <div className="containerButtons">
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