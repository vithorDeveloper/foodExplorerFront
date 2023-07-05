import { Container } from "./styles";
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "../../responsive/button";
import { FaMinus, FaPlus, FaAngleRight } from 'react-icons/fa'

import { useEffect, useState } from "react";

import { api } from "../../../services/api";

export function DishCardMobile({data, icon: Icon, ...rest}){
    const navigate = useNavigate()

    const [image, setImage] = useState(null) 
    const [isLiked, setIsLiked] = useState(false); 
    const [quantity, setQuantity] = useState(0);
    const {id} = data

    function handleClickImage () {
      navigate(`/details/${id}`);
  }
  
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const formattedQuantity = quantity.toString().padStart(2, "0");

  function handleClickImage () {
    navigate(`/details/${id}`);
  }

  const handleLike = () => {
      setIsLiked(!isLiked);
  }

  function featureAlert(){
    return alert("🎈 Estamos trabalhando nessa funcionalidade! 🎈")
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
            className={`heartButton ${isLiked ? 'red' : ''}`}
            onClick={handleLike}
          >
            {Icon && <Icon size={24} />}
          </button>

          <div className="containerImg">
            <img src={image} alt="" onClick={handleClickImage}/>

            <button onClick={handleClickImage}>
              {data.title} 
              <span><FaAngleRight /></span>
            </button>

            <p>{`R$ ${data.price}`}</p>
          </div>

          <div className="containerQuantity">
            <FaMinus onClick={handleDecrease}/>
            <p>{formattedQuantity}</p>
            <FaPlus onClick={handleIncrease}/>
          </div>

      <Button title={"incluir"} onClick={featureAlert}/>
        </>
      }
    </Container>
  )
}