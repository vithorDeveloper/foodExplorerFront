import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: rgb(65,196,141);
  background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);
  color: ${({ theme }) => theme.colors.brown};


  >header{
    background-color: ${({ theme }) => theme.colors.white};
    padding: 5.6rem 0 2.4rem 2.4rem;
  }

  >section{
    color: ${({ theme }) => theme.colors.white};
    padding: 4rem;

  }

  >footer{
    width: 100vw;

    padding: 2rem;

    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    bottom: 0;

    >div{
      display: flex;
      align-items: center;
      gap: .5rem;

      img{
      width: 1.5rem;
      height: 1.5rem;
      }

      p{
        font-weight: bold;
        color: ${({ theme }) => theme.colors.green_300};
        position: relative;
        bottom: .1rem;
      }
    }
  }
`