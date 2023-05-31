import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background: rgb(65,196,141);
    background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);
    color: ${({ theme }) => theme.colors.brown };

    text-align: center;

    overflow-x: hidden;

    >div:first-child{
      margin-bottom: 3.6rem
    }

    >a{
      font-size: 2.4rem;
      padding-bottom: 1.6rem;

      position: relative;
      left: 2.8rem;
    }

>section{
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
    gap: 1rem;

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