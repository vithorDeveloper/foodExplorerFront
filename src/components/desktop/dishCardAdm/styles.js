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
    border: .1rem solid ${({ theme }) => theme.colors.green_100};
    backdrop-filter: blur(11px);

    padding: 2.4rem;

    margin-left: 2rem;

    .heartButton{
      position: absolute;
      right: 1rem;
      top: 1rem;

      background: transparent;
      color: ${({ theme }) => theme.colors.brown}
    }

    >.containerImg{
      font-size: 2rem;

      >img{
        width: 27rem;
        cursor: pointer;
      }

      >button{
        display: block;
        padding-bottom: 1rem;
        color: ${({ theme }) => theme.colors.brown};
        font-size: 2.8rem;

        width: 28rem;

        margin: 0 auto;

        background-color: transparent;

        >span{
          position: relative;
          top: .4rem;
        }
      }

      .descript{
          padding: 1rem;
          font-size: 2rem;
          width: 28rem;
          margin: 0 auto;
          color: ${({ theme }) => theme.colors.brown};
          
        }

      p{
        color: orangered;
        font-size: 2.8rem;
      }
    }
}`