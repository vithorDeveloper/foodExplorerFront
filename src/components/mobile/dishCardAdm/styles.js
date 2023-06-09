import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    text-align: center;

    flex: 0 0 auto;

    background: rgba(255, 255, 255, 0.25);
    border-radius: .6rem;
    backdrop-filter: blur(11px);
    color: ${({ theme }) => theme.colors.brown };

    border: .1rem solid ${({ theme }) => theme.colors.green_100};

    padding: 2.4rem 1.4rem;

    margin-left: 2rem;

    .heartButton{
      position: absolute;
      right: 1rem;
      top: 1rem;

      background: transparent;
      color: ${({ theme }) => theme.colors.brown}

    }

    >.containerImg{
      font-size: 1.8rem;

      >img{
        width: 10rem;
      }

      >button{
        display: block;
        padding-bottom: 1rem;
        color: ${({ theme }) => theme.colors.brown};
        font-size: 2.4rem;

        max-width: 22rem;

        margin: 0 auto;

        background-color: transparent;

        >span{
          position: relative;
          top: .4rem;
        }
      }

      .descript{
          padding: 1rem;
          font-size: 1.2rem;
          width: 20rem;
          margin: 0 auto;
          color: ${({ theme }) => theme.colors.brown};
          
        }

      p{
        color: orangered;
      }
    }
`