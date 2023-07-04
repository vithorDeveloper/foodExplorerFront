import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.brown};
    display: flex;
    align-items: center;

    padding: 5rem 2.8rem 2.4rem;

    >div{
      display: flex;
      align-items: center;
      gap:.8rem;

      margin: 0 auto;
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
`