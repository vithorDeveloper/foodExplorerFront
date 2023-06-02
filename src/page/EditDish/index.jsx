import { Container, Form, TextArea } from "./styles";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { NewIngredient } from "../../components/NewIngredient";
import { TextButton } from "../../components/textButton";

import { FaChevronLeft, FaDownload, FaPlus, FaAngleDown} from "react-icons/fa"
import { FiX} from "react-icons/fi"

export function EditDish(){
  return(
    <Container>

        <Header title={"admin"}/>

    <main>
      <TextButton 
          icon={FaChevronLeft}
          title={"voltar"}
        />

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
          / >
          <NewIngredient 
          placeholder={"macarrão"}
          / >
          <NewIngredient 
          placeholder={"macarrão"}
          / >
          <NewIngredient 
          placeholder={"macarrão"}
          / >
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
    </main>

    <Footer />
    </Container>
  )
}