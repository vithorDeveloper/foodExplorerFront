import styled from "styled-components";

export const Container = styled.div`
    background: rgb(65,196,141);
    background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);
    color: ${({ theme }) => theme.colors.brown }; 
    
    >.containerMacarrone{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 11rem;

        border-radius: .5rem;

        margin: 0 1.6rem 6.2rem 3.6rem;

        padding-right: 2rem;

        background: rgba(255, 107, 82, 0.8);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        
        >img{
            position: relative;
            right: 3rem;
            bottom: 2rem;
        }

        >div{
        >h3{
            font-size: 1.8rem;
            line-height: .9;
            padding-bottom: 1rem;
        }

        >p{
            font-size: 1.2rem;
        }
    }
}

    >section{
        padding-bottom: 2.5rem;

        >h2{
        padding: 2.4rem;
        font-size: 2rem
        }

        .containerMeals,
        .containerMainDishes{
            display: flex;
            overflow-x: auto;
            ::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
        }

            .containerQuantity{
                display: none;
            }

            button:last-child{
                display: none;
        }
        }
    }

    >div:last-child{
        position: relative;
    }
`