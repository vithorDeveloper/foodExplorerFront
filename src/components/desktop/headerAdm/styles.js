import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.brown};
    display: flex;
    align-items: center;

    padding: 5rem 2.8rem 2.4rem;
    margin-bottom: 4.4rem;

    >div{
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
      }
      >p{
        color: ${({ theme }) => theme.colors.tomato};

        font-size: 1.4rem;
        font-weight: bold;

        float: right;
        }
    }

@media (min-width: 768px) {
  padding: 2.8rem 12rem;
  display: flex;
  justify-content: center;

  >div:nth-child(2){
    padding: .6rem 1.4rem;
    margin: 0 3.2rem;
    width: 40%;
  }

  >.containerIcon{ 
    background-color:${({ theme }) => theme.colors.tomato}; 
    color:${({ theme }) => theme.colors.white}; 
    width: 16rem;
    text-align: center;

    padding: .8rem 2.4rem;
    margin-right: 2rem;

    border-radius: .5rem;

    >span{
      font-size: 1.4rem;
      color:${({ theme }) => theme.colors.white}; 

      font-weight: bold;
    }
  }
}
`