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
      font-size: 2.2rem;

      >img{
        width: 17rem;
      }

      >a{
        display: block;
        padding-bottom: 1rem;
        color: ${({ theme }) => theme.colors.brown};

        >span{
          position: relative;
          top: .4rem;
        }

        p{
          padding: 1rem;
          font-size: 1.2rem;
          width: 20rem;
          margin: 0 auto;
          color: ${({ theme }) => theme.colors.brown};
          
        }
      }

      p{
        color: orangered;
      }
    }
}`