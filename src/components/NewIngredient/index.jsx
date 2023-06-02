import { Container } from "./styles";
import {FiPlus, FiX} from "react-icons/fi"

export function NewIngredient({isNew = false , onClick, value, title, ...rest }) {
  return(
    <Container
      isNew={isNew}
    >
      <input 
      type="text" 
      readOnly={!isNew}
      value={value}
      {...rest}
      />

    <button
      type="button"
      onClick={onClick}
      className= {isNew ? "btn-add" : "btn-del"}
    >
      {isNew ? <FiPlus /> : <FiX />}
    </button>
    </Container>
  )
}