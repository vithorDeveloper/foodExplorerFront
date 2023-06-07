import styled from "styled-components";

export const Container = styled.div`
@media(min-width: 768px){
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
      }

      >.icon{
          position: absolute;
        }

      p{
        color: orangered;
      }
    }

    >.containerQuantity{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      
      font-size: 2.2rem;
      font-weight: bold;
    }

    >button{
      background-color: ${({ theme }) => theme.colors.tomato};
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.6rem;
    }

}
`