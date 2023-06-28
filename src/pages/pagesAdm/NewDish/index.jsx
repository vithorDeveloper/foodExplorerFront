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

import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/authContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FaChevronLeft, FaDownload, FaAngleDown} from "react-icons/fa"

export function NewDish(){
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const [image, setImage] = useState(null)

  const navigate = useNavigate()

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient ])
}

function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient != deleted))
}

async function handleAddDishes(){
  const formData = new FormData();

  if(!title || !price || !description || !category){
    return alert("Preencha todos os campos para criar o prato.")
  }

  formData.append("title", title)
  formData.append("price", price)
  formData.append("category", category)
  formData.append("description", description)
  formData.append("ingredients", ingredients)
  formData.append("image", image)

  await api.post('/dishes', formData)

  alert("Opa!, mais um prato cadastrado")
  navigate(-1)
}

  return(
    <Container>

      <HeaderMobile title={"admin"}/>
      <HeaderDesktop title={"admin"}/>

      <MainMobile>
        <Link to="/">
          <FaChevronLeft/>  
            voltar
        </Link>

        <Form>
          <h1>Novo prato</h1>

          <p>Imagem do prato</p>
          <div className="photoDish">
            <label htmlFor="avatar">

              <FaDownload size={22}/>
              Selecione uma imagem

                <input 
                type="file" 
                id="avatar"
                />

            </label>
          </div>

          <p>Nome</p>
            <Input 
              placeholder={"Salada ceasar"}
              onChange={e => setTitle(e.target.value)}
            />

          <p>Categoria</p>
            <select 
              onChange={e => setCategory(e.target.value)}
              defaultValue="option1"
            >
              <option value="option1">Selecione uma categoria</option>
              <option value="Refeição">Refeição</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Sobremesas">Sobremesas</option>
            </select>

          <p>Ingredientes</p>
            <div className="containerTags">
            {
              ingredients.map((ingredient, index) => (
                <NewIngredient 
                value={String(ingredient)}
                key={index}
                onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))
            }

              <NewIngredient 
                placeholder={"adicionar"}
                isNew={true}
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />

            </div>

          <p>preço</p>
            <Input 
            placeholder={"R$ 00,00"}
            onChange={e => setPrice(e.target.value)}
            />

          <p>Descrição</p>
            <TextArea 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={e => setDescription(e.target.value)}
            />  

          <div className="containerButtons">
            <Button 
              title={"Salvar alterações"}
              onClick={handleAddDishes}
            />
          </div>
        </Form>
      </MainMobile>

        <FooterMobile />

      <MainDesktop>

        <Form>
          <Link to="/">
            <FaChevronLeft/> voltar
          </Link>

          <h1>Novo prato</h1>

          <div className="containerOne">

            <div>
              <p>Imagem do prato</p>
                <label htmlFor="avatar">
                <FaDownload size={22}/>
                Selecione uma imagem
                  <input 
                  type="file" 
                  id="avatar"
                  onChange={e => setImage(e.target.files[0])}
                  />
                </label>
            </div>

            <div className="inputName">
              <p>Nome</p>
                <Input 
                  placeholder={"Salada ceasar"}
                  onChange={e => setTitle(e.target.value)}
                />
            </div>
            

            <div className="inputSnack">
              <p>Categoria</p>
                <select 
                  onChange={e => setCategory(e.target.value)}
                  defaultValue="option1"
                >
                  <option value="option1">Selecione uma categoria</option>
                  <option value="Refeição">Refeição</option>
                  <option value="Bebidas">Bebidas</option>
                  <option value="Sobremesas">Sobremesas</option>
                </select>
            </div>
          </div>

          <div className="containerTwo">
            <div>
              <p>Ingredientes</p>
                <div className="containerTags">
                {
                  ingredients.map((ingredient, index) => (
                    <NewIngredient 
                    value={String(ingredient)}
                    key={index}
                    onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }

              <NewIngredient 
                placeholder={"adicionar"}
                isNew={true}
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />
                </div>
            </div>

            <div className="inputPrice">
              <p>preço</p>
                <Input 
                placeholder={"R$ 00,00"}
                onChange={e => setPrice(e.target.value)}
                />
            </div>
          </div>

          <p>Descrição</p>
            <TextArea 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={e => setDescription(e.target.value)}
            />  

          <div className="containerButtons">
            <Button 
              title={"Salvar alterações"}
              onClick={handleAddDishes}
            />
          </div>
        </Form>
      </MainDesktop>
      
        <FooterDesktop />

    </Container>
  )
}