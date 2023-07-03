import { Container } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleRight } from 'react-icons/fa'

import { useEffect, useState } from "react";

import { api } from "../../../services/api";

export function DishCardDesktop({data, icon: Icon, ...rest}){
    const navigate = useNavigate()

    const [image, setImage] = useState(null) 
    const {id} = data

    function handleDishDetails () {
      navigate(`/details/${id}`);
  }

  function handleEditDish () {
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
    <Container {...rest}>

      {
        data && 
        <>
          <button
            className="heartButton"
            onClick={handleEditDish}
          >
            {Icon && <Icon size={24} /> }
          </button>
  
          <div className="containerImg">
            <img 
            src={image} 
            alt="foto do prato" 
          />

          <button onClick={handleDishDetails} >
              {data.title} 
            <span><FaAngleRight /></span>
          </button>
          
          <p className="descript">{data.description}</p>

          <p>{`R$ ${data.price}`}</p>
        </div>
        </>
      }

    </Container>
  )
}