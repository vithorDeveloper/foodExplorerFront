import { Container } from "./styles";
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "../../responsive/button";
import { FaMinus, FaPlus, FaAngleRight } from 'react-icons/fa'

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
    <Container {...rest}>

        <button className="heartButton">
          {Icon && <Icon size={24} />}
        </button>

      <div className="containerImg">
        <img src={image} alt="" />

        <Link to="/details">
          {data.title} 
          <span><FaAngleRight /></span>
        </Link>

        <p>{`R$ ${data.price}`}</p>
      </div>

      <div className="containerQuantity">
        <FaMinus />
        <p>{quant}</p>
        <FaPlus />
      </div>

      <Button title={"incluir"}/>
    </Container>
  )
}