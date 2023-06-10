import { Container } from "./style";

export function TextButton({icon: Icon, size, title, ...rest}){
    return(
      <Container
      {...rest}
      >
        {Icon && <Icon size={28}/>}
        {title}
      </Container>
    )
}