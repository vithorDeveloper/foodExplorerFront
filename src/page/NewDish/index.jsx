import { Container, Form, TextArea } from "./styles";

import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Tags } from "../../components/ingredientTags";
import { TextButton } from "../../components/textButton";

import { FaChevronLeft, FaDownload, FaPlus, FaAngleDown} from "react-icons/fa"
import { FiX} from "react-icons/fi"

export function NewDish(){
  return(
    <Container>

        <Header title={"admin"}/>

    <main>
      <TextButton 
          icon={FaChevronLeft}
          title={"voltar"}
        />

      <Form>
        <h1>Novo prato</h1>

        <p>Imagem do prato</p>
        <Input 
          icon={FaDownload}
          placeholder={"Selecione imagem"}
        />

        <p>Nome</p>
        <Input 
          placeholder={"Ex: salada ceasar"}
        />

        <p>Categoria</p>
        <Input 
          className="imgDish"
          icon={FaAngleDown}
          placeholder={"Refeição"}
        />

        <p>Ingredientes</p>
        <div className="tags">
          <Tags title={"pão naan"} icon={FiX}/>
          <Tags title={"adicionar"} icon={FaPlus}/>
        </div>

        <p>preço</p>
        <Input 
        placeholder={"R$ 00,00"}
        />

        <p>Descrição</p>
        <TextArea 
        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        />  

        <Button 
          title={"Salvar alterações"}
        />
      </Form>
    </main>

    <Footer />
    </Container>
  )
}