import styled from "styled-components";
import background from "../../assets/fondo.png";

export const Container = styled.div`
    color: ${({ theme }) => theme.colors.brown};

    background: rgb(65,196,141);
    background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);

    height: 100vh;

    /* background-image: url(${background});
    background-size: cover; */

    padding: 9rem 4.7rem;

    text-align: center;

    .brand{
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 1rem;

      padding-bottom: 5rem;
      
      >h1{
      font-size: 4rem;
      padding-bottom: 0.3rem
      }

      img{
        width: 3.5rem;
        height: 4rem;
      }
    }

    >form{
      text-align: left;
    }`