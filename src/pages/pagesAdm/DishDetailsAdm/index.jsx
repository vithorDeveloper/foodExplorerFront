import { Container, SectionMobile, SectionDesktop } from "./styles"

import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"
import { Button } from "../../../components/responsive/button"
import { Footer } from "../../../components/responsive/footer"
import { Tags } from "../../../components/responsive/tagIngredient"
import { HeaderMobile } from "../../../components/mobile/headerAdm"
import { HeaderDesktop} from "../../../components/desktop/headerAdm"
import { Menu } from "../../../components/mobile/menu"

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

export function DishDetailsAdm(){
  const [data, setData] = useState(null)
  const [image, setImage] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  
  const navigate = useNavigate()
  const params = useParams()

  function handleDishEdit(){
    navigate(`/edit/${params.id}`)
  }
  

  useEffect(() => {
      async function fetchDishes(){
        const response = await api.get(`/dishes/${params.id}`)
        setData(response.data)
      }

      fetchDishes()
  }, [])

  useEffect(() => {
      function fetchImage(){
        if(data){
          setImage(`${api.defaults.baseURL}/files/${data.image}`)
        }
      }

      fetchImage()
  }, [data])

  return(
    <Container>

      <HeaderMobile title={"admin"} toggleMenu={toggleMenu}/>
      <HeaderDesktop title={"admin"}/>

      {isMenuOpen && <Menu />}

      <Link to="/">
        {FaChevronLeft()}
        <span>voltar</span> 
      </Link>

      <SectionMobile>

      {
        data && 

        <div className="sectionMobile">

          <div className="containerDish">
            <img src={image} alt="foto do prato" />
          </div>

          <div>
              <div className="containerTitulo">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>

            {
              data.ingredients &&
              <div className="containerTags">
              {
                data.ingredients.map(ingredient => (
                  <Tags 
                  key={String(ingredient.id)}
                  title={ingredient.name}
                  />
                ))
              }
              </div>

            }
                <Button 
                title="Editar prato"
                onClick={handleDishEdit}
                />
          </div>

        </div>
      }

      </SectionMobile>

      <SectionDesktop>

      {
        data && 

        <div className="sectionDesktop">

          <div className="containerDish">
            <img src={image} alt="foto do prato" />
          </div>

          <div>
              <div className="containerTitulo">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>

            {
              data.ingredients &&
              <div className="containerTags">
              {
                data.ingredients.map(ingredient => (
                  <Tags 
                  key={String(ingredient.id)}
                  title={ingredient.name}
                  />
                ))
              }
              </div>

            }
                <Button 
                title="Editar prato"
                onClick={handleDishEdit}
                />
          </div>

        </div>
      }

      </SectionDesktop>

        <Footer/>

    </Container>
  )
}