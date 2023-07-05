import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background: rgb(65,196,141);
    background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);
    color: ${({ theme }) => theme.colors.brown };

    footer{
      position: absolute;
      bottom: 0;
    }

    text-align: center;

    overflow-x: hidden;

    >div:nth-child(2),
    >section .sectionDesktop{
        display: none;
    }

    >.buttonBack{
      display: flex;
      align-items: center;

      font-size: 2.4rem;
      padding-bottom: 1.6rem;
      margin: 2.4em 0 2rem 2rem;

      color: ${({ theme }) => theme.colors.brown };
    }

@media (min-width: 768px) {

    >div:first-child,
    >section .sectionMobile,
    >footer:nth-child(5){
        display: none;
    }

    >div:nth-child(2),
    >section .sectionDesktop,
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

  div{
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
  }
`

export const SectionDesktop = styled.section`
  @media (min-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;

    div{
      padding: 2rem;

      display: flex;
      align-items: center;

      img{
          width: 30rem;
          height: 30rem;

          margin-right: 2rem;
        }

      div{
        display: flex;
        flex-direction: column;

        >.containerDish{
        >div{
          h3{
            font-size: 2.5rem;
            padding-bottom: 1rem;
          }

          p{
            font-size: 1.8rem;
          }
        }
      }

      >.containerTags{
        display: flex;
        flex-direction: row;

        span{
          font-size: 1.6rem;
        }
      }

      >.containerButton{
        display: flex;
        flex-direction: row;
        align-items: center;

        >.containerQuantity{
          display: flex;
          flex-direction: row;
          gap: 1rem;
          
          font-size: 2rem;
          font-weight: bold;
        }

        >button{
          background-color: ${({ theme }) => theme.colors.tomato};

          display: flex;
          justify-content: center;
          align-items: center;
          gap: .9rem;

          font-size: 1.2rem;

          min-width: 20rem;
        }
      }
      }
    }
  }

  @media (min-width: 1024px){
    display: flex;
    align-items: center;
    justify-content: center;

    div{
      padding: 2rem;

      display: flex;
      align-items: center;

      img{
          width: 40rem;
          height: 40rem;

          margin-right: 2rem;
        }

      div{
        display: flex;
        flex-direction: column;

        >.containerDish{
        >div{
          h3{
            font-size: 4rem;
            padding-bottom: 1rem;
          }

          p{
            font-size: 2.4rem;
          }
        }
      }

      >.containerTags{
        display: flex;
        flex-direction: row;

        span{
          font-size: 2rem;
        }
      }

      >.containerButton{
        display: flex;
        flex-direction: row;
        align-items: center;

        >.containerQuantity{
          display: flex;
          flex-direction: row;
          gap: 1rem;
          
          font-size: 2.4rem;
          font-weight: bold;

          cursor: pointer;
        }

        >button{
          background-color: ${({ theme }) => theme.colors.tomato};

          display: flex;
          justify-content: center;
          align-items: center;
          gap: .9rem;

          font-size: 1.8rem;

          min-width: 20rem;
        }
      }
      }
    }
  }
`