import { Container, Form, TextArea, MainMobile, MainDesktop } from "./styles"

import { Link } from "react-router-dom"
import { Input } from "../../../components/responsive/input"
import { Button } from "../../../components/responsive/button"
import { FooterMobile } from "../../../components/mobile/footer"
import { FooterDesktop } from "../../../components/desktop/footer"
import { HeaderMobile } from "../../../components/mobile/headerAdm"
import { HeaderDesktop} from "../../../components/desktop/headerAdm"
import { NewIngredient } from "../../../components/responsive/newIngredient"

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

import { FaChevronLeft, FaDownload, FaAngleDown} from "react-icons/fa"

export function EditDish(){
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const params = useParams();

  function handleAddIngredient(){
  console.log(newIngredient)

      if(!newIngredient || !newIngredient.trim() === ""){
          return alert("Não é possível adicionar campo vazio.")
      }
      
      const { name } = newIngredient;
      const newIngredientObj = { id: null, dish_id: null, name: newIngredient }; // Criar objeto com as propriedades esperadas
      setIngredients(prevState => [...prevState, newIngredientObj]);
    
      setNewIngredient("")
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient.name !== deleted))
  }

  async function handleDishDeleted(){
    const condition = window.confirm("Deseja mesmo excluir o prato ?");

    if(condition){
      await api.delete(`/dishes/${params.id}`)
      navigate("/")
    }
  }

  async function handleSaveDish() {
    const formData = new FormData();
  
    if (newIngredient) {
      return alert('Ainda existe ingrediente para ser adicionado');
    }
  
    formData.append('title', title);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('ingredients', JSON.stringify(ingredients.map(ingredient => ingredient.name)));
    formData.append('image', image);

    try {
      await api.put(`/dishes/${params.id}`, formData);
  
      alert('Prato Atualizado');
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchDishes(){
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data);
      setImage(response.data?.image || null);
      setTitle(response.data?.title || "");
      setDescription(response.data?.description || "");
      setPrice(response.data?.price || "");
      setCategory(response.data?.category || "");
      setIngredients(response.data?.ingredients || []);
    }

    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDishes();
    fetchDish();
  }, [])

  return(
    <Container>

    <HeaderMobile title={"admin"}/>
    <HeaderDesktop title={"admin"}/>

    <MainMobile>
      <Link to="/">
        <FaChevronLeft/>
        <span>voltar</span> 
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
            <FaChevronLeft/> 
            <span>voltar</span>
        </Link>

        <h1>Editar prato</h1>
            <div>
              
                <div className="containerOne">
                  <div className="imageDish">

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
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        placeholder={data && data.title}
                      />
                  </div>
                
  
                  <div className="inputSnack">
                    <p>Categoria</p>
                    <select 
                      onChange={e => setCategory(e.target.value)}
                      value={category}
                    >
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
                        {ingredients.map((ingredient, index) => (
                          <NewIngredient
                            key={String(index)}
                            value={ingredient.name}
                            onClick={() => handleRemoveIngredient(ingredient.name)}
                            isNew={false}
                          />
                        ))}
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
                    value={price}
                    placeholder={data && data.price}
                    onChange={e => setPrice(e.target.value)}
                  />
              </div>
            </div>
    
            <p>Descrição</p>
              <TextArea 
                value={description}
                placeholder={data && data.description}
                onChange={e => setDescription(e.target.value)}
              />  
    
            <div className="containerButtons">
              <Button 
                title={"Excluir prato"}
                onClick={handleDishDeleted}
              />
    
              <Button 
                title={"Salvar alterações"}
                onClick={handleSaveDish}
              />
            </div>

            </div>

      </Form>
    </MainDesktop>
    
      <FooterDesktop />

    </Container>
  )
}