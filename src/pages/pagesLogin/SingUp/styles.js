import styled from "styled-components";

export const Container = styled.div`
    color: ${({ theme }) => theme.colors.brown};

    background: rgb(65,196,141);
    background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);

    height: 100vh;

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

@media screen and (min-width: 1024px){
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20%;

  >.brand{
    >h1{
      font-size: 4.5rem;
    }
  }
}
`

export const Form = styled.form`
  text-align: left;

  >div{
    margin: 0.8rem 0 3.2rem;
  }

  >h1{
    display: none;
  }

  >a{
    display: flex;
    justify-content: center;

    padding-top: 3.6rem;

    font-weight: bold;
  }

  p{
    padding-bottom: .8rem;
  }

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: auto auto;

    gap: 4rem;

    >a{
      position: relative;
      right: -50%;
    }

    >button{
      height: 5rem;
      
      position: relative;
      bottom: -22%;
    }

    >div{
      margin: 0;

      >input{
      margin-bottom: 0;
      }
    }
  }

  @media (min-width: 1024px){
    width: 40rem;
    padding: 6rem 4rem;

    background: rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.8px);

    display: flex;
    flex-direction: column;
    justify-content: center;

    >h1{
      display: inline;
    }

    >a{
      position: relative;
      left: 0;

      padding: 0;
    }

    >div{
      margin: 0;
    }
  }
`