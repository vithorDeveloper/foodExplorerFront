import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;

    padding: 2rem;

    background-color: ${({ theme }) => theme.colors.white};
    position: relative;
    bottom: 0;

    display:  flex;
    justify-content: space-between;

  >div{
    display: flex;
    align-items: center;
    gap: .5rem;

    img{
    width: 1.5rem;
    height: 1.7rem;
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
`