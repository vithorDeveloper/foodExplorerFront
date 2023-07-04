import { Container, Form, TextArea, MainMobile, MainDesktop } from "./styles"

import { Link } from "react-router-dom"
import { Input } from "../../../components/responsive/input"
import { Button } from "../../../components/responsive/button"
import { Footer } from "../../../components/responsive/footer"
import { HeaderMobile } from "../../../components/mobile/headerAdm"
import { HeaderDesktop} from "../../../components/desktop/headerAdm"
import { NewIngredient } from "../../../components/responsive/newIngredient"
import { Menu } from "../../../components/mobile/menu"

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
  const [isString, setIsString] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const params = useParams();
  
  const names = ingredients.map(({ name }) => name)

  function handleAddIngredient(){

      if(!newIngredient || !newIngredient.trim() === ""){
          return alert("Não é possível adicionar campo vazio.")
      }

      if (typeof(image) === 'string') {
        setIsString(true)
      }

      const { name } = newIngredient;
      const newIngredientObj = { id: null, dish_id: null, name: newIngredient }; // Criar objeto com as propriedades esperadas
      setIngredients(prevState => [...prevState, newIngredientObj]);

      setNewIngredient("")
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleDishDeleted(){
    const condition = window.confirm("Deseja mesmo excluir o prato ?");

    if(condition){
      await api.delete(`/dishes/${user.id}`)
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
    formData.append('ingredients', names);
    formData.append('image', image);
    formData.append('isString', isString);

    try {
      await api.put(`/dishes/${params.id}`, formData);

      alert('Prato Atualizado');
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
      const response = await api.get(`/dishes/${params.id}`);
        setData(response.data);
        setImage(response.data?.image || null);
        setTitle(response.data?.title || "");
        setDescription(response.data?.description || "");
        setPrice(response.data?.price || "");
        setCategory(response.data?.category || "");
        setIngredients(response.data.ingredients);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [params.id]);
  

  return(
    <Container>

    <HeaderMobile title={"admin"} toggleMenu={toggleMenu}/>
    <HeaderDesktop title={"admin"}/>

    <MainMobile>
    {isMenuOpen && <Menu />}


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
                            onClick={() => handleRemoveIngredient(ingredient)}
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
    </MainMobile>

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
                        onChange={(e) => setImage(e.target.files[0])}
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
                            onClick={() => handleRemoveIngredient(ingredient)}
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
    
      <Footer />

    </Container>
  )
}