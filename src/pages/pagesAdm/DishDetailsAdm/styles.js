import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    background: rgb(65,196,141);
    background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);
    color: ${({ theme }) => theme.colors.brown };

    text-align: center;

    overflow-x: hidden;

    >div:nth-child(2),
    >section .sectionDesktop{
        display: none;
    }

    /* >footer{
      position: absolute;
    } */

    >a{
      font-size: 2.4rem;
      padding: 2.4rem 0 1.6rem 1.8rem;

      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.colors.brown };
    }

  @media (min-width: 768px) {

    >div:first-child,
    >section .sectionMobile{
        display: none;
    }

    >div:nth-child(2),
    >section .sectionDesktop{
          display: flex;
    } 
  }

  @media (min-width: 1024px){
    >a{
      font-size: 2.8rem;

      position: relative;
      left: 10%;
    }

    >section:nth-child(5){
      >.containerDish{
        img{
        width: 38rem;
        }
      }
    }
  }
`

export const SectionMobile = styled.section`
  padding: 0 5.6rem;

  div{
      >.containerDish{
      img{
        width: 26rem;
        padding-bottom: 1.6rem;
      }
    }

    >.containerTitulo{
      h3{
        font-size: 2.7rem;
        padding-bottom: 2.4rem;
      }

      p{
        font-size: 1.6rem;
        margin: 0 auto;

        width: 30rem;
      }
    }

    >.containerTags{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;

      margin: 2rem 0 4rem;
    }

    >.containerButton{
        display: flex;
        gap: 1.6rem;
        margin: 0 auto 5.4rem;
        max-width: 60rem;

    >button{
      background-color: ${({ theme }) => theme.colors.tomato};

      display: flex;
      justify-content: center;
      gap: .9rem;

      font-size: 1.2rem;
    }
  }
}
`

export const SectionDesktop = styled.section`
@media (min-width: 768px){
  >div{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8rem 2rem 0 2rem;

  >.containerDish{
    img{
      width: 40rem;
      margin-right: 4rem;
    }
  }

  >div{
    >.containerTitulo{
      text-align: left;

      h3{
        font-size: 4rem;
        padding-bottom: 1rem;
      }

      p{
        font-size: 2.4rem;
        padding-bottom: 2.4rem;
      }
    }

  >.containerTags{
    display: flex;
    gap: .4rem;

    margin-bottom: 2.4rem;

    >span{
      font-size: 2rem;
    }
  }

  >.containerButton{
    margin-top: 4.4rem;

      >button{
        background-color: ${({ theme }) => theme.colors.tomato};

        display: flex;
        justify-content: center;
        gap: .9rem;

        font-size: 2rem;

        width: 20rem;
      }
    }
  }
  }

}

@media (min-width: 1024px){
  width: 70%;
  margin: 0 auto;

  >div{
    >.containerTitulo{
      text-align: left;

      h3{
        font-size: 4rem;
        padding-bottom: 2.4rem;
      }

      p{
        font-size: 2.4rem;
        padding-bottom: 2.4rem;
      }
    }

    >.containerTags{
      display: flex;
      gap: .4rem;

      margin-bottom: 2.4rem;

      >span{
        font-size: 1.6rem;
        min-width: 8.4rem;
      }
    }

  >.containerButton{
      display: flex;
      gap: 2rem;

      .containerQuantity{
        display: flex;
        align-items: center;
        gap: 2rem;
        
        font-size: 2rem;
        font-weight: bold;
      }

      >button{
        background-color: ${({ theme }) => theme.colors.tomato};

        display: flex;
        justify-content: center;
        gap: .8rem;

        font-size: 1.4rem;

        width: 20rem;
      }
    }
  }
}
`