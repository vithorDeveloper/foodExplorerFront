import styled from "styled-components";

export const Container = styled.div`
    display: flex;  

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.colors.white};
    border: ${({theme , isNew}) => isNew ? `0.1rem dashed ${theme.colors.brown}` : `none`};

    margin:0 0 1rem .6rem;
    padding: .8rem 0;
    
    border-radius: .5rem;

    >button{
      border: none;
      background: none;

      padding-right: .4rem;
    }

    .btn-del{
      color: ${({theme}) => theme.colors.tomato};
    }

    .btn-add{
      color: greenyellow;
    }

    >input{
      width: 100%;
      border: none;
      padding-left: .4rem;

      background: transparent;

      &::placeholder{
        color: ${({theme}) => theme.colors.brown};

      }
    }
`











// display: flex;
//     color: ${({theme}) => theme.colors.brown};
//     background-color: ${({theme, isNew}) => isNew ? "trasnparent" : theme.colors.white};
//     border: ${({theme, isNew}) => isNew ? `.1rem dashed ${theme.colors.white}` : "none"};

//     width: 10rem;

//     margin-bottom: 1rem;
//     border-radius: .5rem; 


//     >input{
//       padding: .5rem 1rem;
//       width: 100%;
      
//       background: transparent;

//       ::placeholder{
//         color: ${({theme}) => theme.colors.brown};
//       }
//     }

//     >.btn-del{
//       color: ${({theme}) => theme.colors.tomato}
//     }

//     >.btn-add{
//       color: green;
//     }

//     button{
//       background: none;
//       padding-right: .5rem;
//     }