import { Container } from "./styles";

export function Input({icon: Icon,...rest}){
    const size = 32;
    
    return(
      <Container
      >
      {Icon && <Icon size={22}/>}
        <input {...rest}/>
      </Container>
    )
}