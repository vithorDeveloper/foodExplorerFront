import styled from "styled-components";

export const Container = styled.div`
    background: rgb(65,196,141);
    background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);
    color: ${({ theme }) => theme.colors.brown }; 
    overflow-x: hidden;

    >div:nth-child(2),
    >main:nth-child(4){
        display: none;
    }

    >div:last-child{
      position: relative;
    }

  @media (min-width: 768px){
    height: 100vh;

    >div:last-child{
      position: absolute;
    }

    >div:first-child,
    >main:nth-child(3){
      display: none;
    }

    >div:nth-child(2),
    >main:nth-child(4){
      display: flex;
    }

    footer{
      position: absolute;
      bottom: 0;
    }
  }

  @media (min-width: 1024px){
    main:nth-child(5){
      >form{
        width: 60%;

      .containerButtons {
        width:40%;
        float: right;
        }
      }
    }
  }
`

export const TextArea = styled.textarea`
  resize: none;

  width: 100%;
  min-height: 17rem;

  border-radius: .5rem;

  padding: 1.4rem;
  margin-bottom: 2.4rem;

  background-color: #9D978E;

  ::placeholder{
    color: ${({ theme }) => theme.colors.brown};
  }
`

export const Form = styled.form`
    padding: 2.4rem 0 5.3rem;

    >h1{
      padding-bottom: 2rem;
    }

    div{

    p{
        padding-bottom: .8rem;
    }

    >div:nth-child(7){
      display: flex;
      flex-direction: row-reverse;
    }

    >.containerTags{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      background-color: #9D978E;
      padding-top: 1rem;
      border-radius: .5rem;
    }

    >.containerButtons{
      display: flex;
      gap: 3.2rem;
      margin-bottom: 4rem;

      >button:first-child{
        background-color: #9D978E;
      }
    }

    .imageDish{
        >label{
          width: 100%;

          display: flex;

          gap: 1rem;

          border-radius: 0.5rem;

          padding: 1.2rem;
          margin-bottom: 2.4rem;

          background-color: #9D978E;
          color: ${({ theme }) => theme.colors.brown};

          font-size: 1.4rem;

          >input{
              background: transparent;
              width: 100%;
              display: none;

              ::placeholder{
                  color: ${({ theme }) => theme.colors.brown};
              }
          }
        }
      }
    }
`

export const MainMobile = styled.main`

    form{
      padding: 0 3.2rem;
      margin: 0 auto;

      >a{
        font-size: 1.8rem;

        padding: 2rem 0;
  
        display: flex;
        align-items: center;
  
        color: ${({ theme }) => theme.colors.brown };
      }

      p{
        padding-top: 2.4rem;
      }

      select{
        width: 100%;

        border-radius: 0.5rem;

        padding: 1.2rem;

        border: none;

        background-color: #9D978E;
        color: ${({ theme }) => theme.colors.brown};

        outline: none;
      }

      .imageDish{
        label{
          margin: 0;
        }
      }
    }
`

export const MainDesktop = styled.main`
  display: flex;
  justify-content: center;

  >form{
    >a{
      font-size: 2.4rem;

      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.colors.brown };
    }

    
    h1{
      padding-top: 2.4rem;
    }

    div{
      width: 100%;

      p{
        padding-bottom: .8rem;
      }

      select{
        width: 100%;

        border-radius: 0.5rem;

        padding: 1.2rem;
        margin-bottom: 2.4rem;

        border: none;

        background-color: #9D978E;
        color: ${({ theme }) => theme.colors.brown};

        outline: none;
      }

      >.containerOne{
        display: flex;
        flex-direction: row;
        gap: 2.8rem;

        .inputSnack{
          div{
            display: flex;
            flex-direction: row-reverse;
          }
        }

        .inputName{
          div{
            padding: 1.5rem 1rem;
          }
        }
      }

      .containerTwo{
        display: flex;
        gap: 2.8rem;

        >div{
          .containerTags{
            display: flex;
            flex-direction: row;

            background-color: #9D978E;
            padding: .8rem .6rem 0 0;
            border-radius: .5rem;

            div{
              width: 20%;
            }
          }
        margin-bottom:2.4rem;

        }

        .inputPrice{
          width: 30%;

          div{
            padding: 1.6rem 1rem;
          }
        }
      }

        .containerButtons {
          width:54%;
          float: right;
          display: flex;
          gap: 2rem;

          button:first-child {
            background-color: #9D978E;
          }
        }
    }
  }
`