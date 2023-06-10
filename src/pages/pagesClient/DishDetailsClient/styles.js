import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background: rgb(65,196,141);
    background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);
    color: ${({ theme }) => theme.colors.brown };

    text-align: center;

    overflow-x: hidden;

    >div:nth-child(2),
    >section:nth-child(6),
    >footer:last-child{
        display: none;
    }

    >div:first-child{
      margin-bottom: 3.6rem
    }

    >a{
      font-size: 2.4rem;
      padding-bottom: 1.6rem;

      position: relative;
      left: 2.8rem;
    }

@media (min-width: 768px) {

    >div:first-child,
    >section:nth-child(4),
    >footer:nth-child(5){
        display: none;
    }

    >div:nth-child(2),
    >section:nth-child(6),
    >footer:last-child{
        display: flex;
    }   
}

@media (min-width: 1024px){

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

  >.containerDish{
    img{
      width: 26rem;
      padding-bottom: 1.6rem;
    }

    h3{
      font-size: 2.7rem;
      padding-bottom: 2.4rem;
    }

    p{
      font-size: 1.6rem;
      margin: 0 auto;
      padding-bottom: 2.4rem;

      width: 30rem;
    }
  }

  >.containerTags{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    margin-bottom: 4.8rem;
  }

  >.containerButton{
    display: flex;
    gap: 1.6rem;
    margin: 0 auto 5.4rem;
    max-width: 60rem;

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
      gap: .9rem;

      font-size: 1.2rem;
    }
  }
`

export const SectionDesktop = styled.section`
  @media (min-width: 768px){
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8rem 2rem 0 2rem;

    >.containerDish{
      img{
        width: 30rem;
        margin-right: 4rem;
      }
    }

    >div{
      >.containerTitulo{
        text-align: left;

        h3{
          font-size: 3rem;
          padding-bottom: 1rem;
        }

        p{
          font-size: 1.8rem;
          padding-bottom: 2.4rem;
        }
      }

      >.containerTags{
        display: flex;
        gap: .4rem;

        margin-bottom: 2.4rem;

        >span{
          font-size: 1.3rem;
        }
      }

    >.containerButton{
        display: flex;
        gap: 1.6rem;

      .containerQuantity{
        display: flex;
        align-items: center;
        gap: 1.4rem;
        
        font-size: 2rem;
        font-weight: bold;
      }

        >button{
          background-color: ${({ theme }) => theme.colors.tomato};

          display: flex;
          justify-content: center;
          gap: .9rem;

          font-size: 1.2rem;

          width: 20rem;
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
        width: 8.4rem;
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