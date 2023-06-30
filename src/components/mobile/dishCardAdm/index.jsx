import { Container } from "./styles";
import { Link, useNavigate } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

import prato from '../../../assets/salada.svg'

import { useEffect, useState } from "react";

import { api } from "../../../services/api";

export function DishCardMobile({data, icon: Icon, ...rest}){
  const navigate = useNavigate()

    const [image, setImage] = useState(null) 
    const {id} = data

    function handleClickImage () {
      navigate(`/details/${id}`);
  }

  function handleClickEditDish () {
      navigate(`/edit/${id}`);
  }
  

    useEffect(() => {
        async function fetchImage(){
          if(data){
            setImage(`${api.defaults.baseURL}/files/${data.image}`)
          }
        }

        fetchImage()
    }, [data])

  return(
    <Container  {...rest}>

      {
        data && 
        <>
          <Link 
            to="/edit" 
            className="heartButton"
            onClick={handleClickImage}
          >
            {Icon && <Icon size={24} /> }
          </Link>
  
        <div className="containerImg">
          <img 
          src={image} 
          alt="foto do prato" 
          onClick={handleClickEditDish}
          />

          <Link to="/details">
              {data.title} 
              <span><FaAngleRight /></span>
              <p>{data.description}</p>
          </Link>

          <p>{`R$ ${data.price}`}</p>
        </div>
        </>
      }

    </Container>
  )
}