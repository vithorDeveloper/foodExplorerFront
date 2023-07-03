import { Container, SectionMobile, SectionDesktop } from "./styles"

import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"
import { Button } from "../../../components/responsive/button"
import { FooterMobile } from "../../../components/mobile/footer"
import { FooterDesktop } from "../../../components/desktop/footer"
import { Tags } from "../../../components/responsive/tagIngredient"
import { TextButton } from "../../../components/responsive/textButton"
import { HeaderMobile } from "../../../components/mobile/headerClient"
import { HeaderDesktop} from "../../../components/desktop/headerClient"

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

import prato from "../../../assets/salada.svg"

export function DishDetailsAdm(){
  const [data, setData] = useState(null)
  const [image, setImage] = useState(null)
  
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

      <HeaderMobile title={"admin"}/>
      <HeaderDesktop title={"admin"}/>

      <Link to="/">
        {FaChevronLeft()}
        <span>voltar</span> 
      </Link>

      <SectionMobile>

        <div className="containerDish">
            <img src={prato} alt="" />

            <div>
              <h3>Salada Ravanello</h3>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            </div>
        </div>

        <div className="containerTags">
          <Tags title="alface"/>
          <Tags title="cebola"/>
          <Tags title="pão naan"/>
          <Tags title="pepino"/>
          <Tags title="rabanete"/>
          <Tags title="tomate"/>
        </div>

        <Button 
          title="Editar prato"
          onClick={handleDishEdit}
        />

      </SectionMobile>

        <FooterMobile />


      <SectionDesktop>

      {
        data && 

        <div>

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
{/* 
              <button to="/edit" className="containerButton"> */}
                <Button 
                title="Editar prato"
                onClick={handleDishEdit}
                />
              {/* </button> */}
          </div>

        </div>
      }

      </SectionDesktop>

        <FooterDesktop />

    </Container>
  )
}