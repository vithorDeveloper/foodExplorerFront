import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: rgb(65,196,141);
  background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);
  color: ${({ theme }) => theme.colors.brown};

  >header{
    background-color: ${({ theme }) => theme.colors.white};
    padding: 5rem 0 1.5rem 2rem;

    display: flex;
    align-items: center;
    gap: .8rem;

    h1{
      font-size: 2.6rem;
      position: relative;
      bottom: .2rem;
    }
  }

  >section{
    color: ${({ theme }) => theme.colors.white};
    padding: 3rem;

    >.link{
      margin-top: 3rem;
      
      >a{
      color: ${({ theme }) => theme.colors.brown};
      font-size: 2.4rem;

      padding: 0 0 .5rem 1rem;

      border-bottom: 0.1rem solid #9D978E;

      display: flex;
    }
  }
}

  >footer{
    width: 100vw;

    padding: 2rem;

    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    bottom: 0;

    display:  flex;

    justify-content: space-between;

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
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.green_300};
        position: relative;
        bottom: .1rem;
      }
    }

    >span{
      font-size: 1.2rem;
    }
  }
`