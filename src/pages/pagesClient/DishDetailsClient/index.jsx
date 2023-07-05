import { Container, SectionMobile, SectionDesktop } from "./styles"

import { Link } from 'react-router-dom'
import { Button } from "../../../components/responsive/button"
import { Footer } from "../../../components/responsive/footer"
import { Tags } from "../../../components/responsive/tagIngredient"
import { HeaderMobile } from "../../../components/mobile/headerClient"
import { HeaderDesktop} from "../../../components/desktop/headerClient"
import { FaMinus, FaPlus, FaShoppingCart, FaChevronLeft} from "react-icons/fa"

import { Menu } from "../../../components/mobile/menu"

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

export function DishDetailsClient(){
  const [data, setData] = useState(null)
  const [image, setImage] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const formattedQuantity = quantity.toString().padStart(2, "0");

  function featureAlert(){
    return alert("🎈 Estamos trabalhando nessa funcionalidade! 🎈")
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  
  const navigate = useNavigate()
  const params = useParams()
  

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

      <HeaderMobile toggleMenu={toggleMenu}/>
      <HeaderDesktop />

      {isMenuOpen && <Menu />}

      <Link to="/" className="buttonBack">
        <FaChevronLeft/>
        voltar 
      </Link>

    <SectionMobile>

      {

      data && 
        <div className="sectionMobile">
          <div className="containerDish">
            <img src={image} alt="" />
    
            <div>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
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
  
          <div className="containerButton">
            <div className="containerQuantity">
              <FaMinus onClick={handleDecrease}/>
                <p>{formattedQuantity}</p>
              <FaPlus onClick={handleIncrease}/>
            </div>
    
            <Button icon={FaShoppingCart} size={16} title="pedir ∙ R$ 25,00" onClick={featureAlert}/>
          </div>
        </div>
      }

    </SectionMobile>

    <SectionDesktop>

    {
      data && 
        <div className="sectionDesktop">
          <img src={image} alt="foto do prato" />

          <div>   
          <div className="containerDish">
              <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
              
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

            <div className="containerButton">
              <div className="containerQuantity">
                <FaMinus onClick={handleDecrease}/>
                  <p>{formattedQuantity}</p>
                <FaPlus onClick={handleIncrease}/>
              </div>

              <Button icon={FaShoppingCart} size={16} title="pedir ∙ R$ 25,00" onClick={featureAlert}/>
            </div>
          </div>
        </div>
      }

    </SectionDesktop>

      <Footer />
      
    </Container>
  )
}