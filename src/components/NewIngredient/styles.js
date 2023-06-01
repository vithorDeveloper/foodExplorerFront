import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    color: ${({theme}) => theme.colors.brown};
    background-color: ${({theme, isNew}) => isNew ? "trasnparent" : theme.colors.white};
    border: ${({theme, isNew}) => isNew ? `.1rem dashed ${theme.colors.white}` : "none"};

    >input{
      padding: .5rem 1rem;
      width: 100%;

      border-radius: .5rem 0 0 .5rem;
      background: transparent;

      ::placeholder{
        color: ${({theme}) => theme.colors.brown};
      }
    }

    >.btn-del{
      color: ${({theme}) => theme.colors.tomato}
    }

    >.btn-add{
      color: ${({theme}) => theme.colors.yellow}
    }

    button{
      border-radius: 0 .5rem .5rem 0;
      background: none;
    }
`