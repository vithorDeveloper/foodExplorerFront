import { Container } from "./style";

export function Button({icon: Icon, size, title, ...rest}){
  return (
    <Container
    {...rest}
    >
      {Icon && <Icon size={size}/>}
      {title}
    </Container>
  )
}