import styled from "styled-components";

export const Container = styled.div`
    background: rgb(65,196,141);
    background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);
    color: ${({ theme }) => theme.colors.brown }; 

    >div:first-child{
      margin-bottom: 1rem;
      
      >div{
        margin: 0 auto;
      }

      >.iconCar{
        display: none;
      }
    }

    >main{
      padding: 0 3.2rem;
    }

    >div:last-child{
      position: relative;
    }
`

export const TextArea = styled.textarea`
  resize: none;

  width: 100%;
  min-height: 17rem;

  border-radius: .5rem;

  padding: 1.4rem;
  margin-bottom: 2.4rem;
`

export const Form = styled.form`
    padding: 2.4rem 0 5.3rem;

    >h1{
      padding-bottom: 2rem;
    }

    >p{
      padding-bottom: .8rem;
    }

    >div{
      margin-bottom: 2.4rem;
    }

    >div:nth-child(7){
      display: flex;
      flex-direction: row-reverse;
    }

    >.tags{
      padding: 1rem;

      border-radius: .5rem;

      background-color: #9D978E;
    }
`