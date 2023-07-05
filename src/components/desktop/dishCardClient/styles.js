import styled from "styled-components";

export const Container = styled.div`
@media(min-width: 768px){
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 0 0 auto;
    gap: 2rem;

    text-align: center;

    background: rgba(255, 255, 255, 0.25);
    color: ${({ theme }) => theme.colors.brown };

    border-radius: .6rem;
    backdrop-filter: blur(11px);
    border: .1rem solid ${({ theme }) => theme.colors.green_100};

    padding: 2.4rem;

    margin-left: 2rem;

    .heartButton{
      position: absolute;
      right: 1rem;
      top: 1rem;

      background: transparent;
      color: ${({ theme }) => theme.colors.brown};
    }

    .red {
      color: red;
    }
    }

    >.containerImg{
      font-size: 2.2rem;
      cursor: pointer;

      >img{
        width: 17rem;
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

      >.icon{
          position: absolute;
        }

      p{
        color: orangered;
      }

      >.descript{
      padding: 1rem;
      font-size: 1.2rem;
      width: 20rem;
      margin: 0 auto;
      color: ${({ theme }) => theme.colors.brown};
    }
    }

    >.containerQuantity{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      
      font-size: 2.2rem;
      font-weight: bold;

      cursor: pointer;
    }

    >button{
      background-color: ${({ theme }) => theme.colors.tomato};
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.6rem;
    }
`