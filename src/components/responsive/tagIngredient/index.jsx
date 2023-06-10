import { Container } from "./styles";

export function Tags({icon: Icon, title, ...rest}){
  return(
    <Container
      {...rest}
    >
      {title}
      {Icon && <Icon size={12}/>}
    </Container>
  )
}