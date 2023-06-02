import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.brown};
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5rem 2.8rem 2.4rem;
    margin-bottom: 4.4rem;

    .hidden,
    .iconSingOut{
      display: none;

      div{
        padding: .8rem 2rem;
        margin: 0 2.4rem;
      }
    }

    >div{
      display: flex;
      align-items: center;
      gap:.8rem;

      >img{
        width: 2.3rem;
      }

      >h1{
        font-size: 2.4rem;
        position: relative;
        bottom: .1rem;
      }

      >span{
      color: ${({ theme }) => theme.colors.tomato};

      font-size: 1.4rem;
      font-weight: bold;
      }
    }

@media (min-width: 768px) {
  padding: 2.8rem 12rem;
  display: flex;
  justify-content: center;

  >.iconMenu{
      display: none;
    }

  >.iconSingOut{
    display: flex;
  }
  
  >.hidden{
    display: flex;
    width: 50%;
  }

  >.containerIcon{ 
    display: flex;
    background-color:${({ theme }) => theme.colors.tomato}; 
    color:${({ theme }) => theme.colors.white}; 

    padding: 1rem 1.4rem;
    margin-right: 2rem;

    border-radius: .5rem;

    .hidden{
      display: flex;
      gap: .5rem;
      font-size: 1.2rem;
      color:${({ theme }) => theme.colors.white}; 
    }
  }
}
`