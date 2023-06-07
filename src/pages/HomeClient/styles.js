import styled from "styled-components";

export const Container = styled.div`
    background: rgb(65,196,141);
    background: linear-gradient(180deg, rgba(65,196,141,1) 0%, rgba(190,230,205,1) 100%);
    color: ${({ theme }) => theme.colors.brown }; 
    overflow: hidden;

    >div:nth-child(2),
    >footer:nth-child(5){
        display: none;
    }
    
    >.containerMacarrone{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 11rem;

        border-radius: .5rem;

        margin: 0 1.6rem 4rem 3.6rem;

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
        padding: 0 0 2.5rem 1.6rem;

        >h2{
        padding: 2.4rem;
        font-size: 2rem
        }

        >div{
            >.dishMobile,
            >.dishDesktop{
            display: flex;
            overflow-x: auto;
            ::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */

            width: 100%;
            }
            }

            >.dishDesktop{
            display: none;
            }
        }
    }

@media (min-width: 768px){

    >div:first-child,
    >footer:nth-child(6){
        display: none;
    }

    >div:nth-child(2),
    >footer:nth-child(5){
        display: flex;
    }

    >footer:nth-child(5){
        position: relative;
    }

    >.containerMacarrone{
        margin: 0 12rem 6.2rem 12rem;

        div{
            >h3{
            font-size: 2.8rem;
        }

        >p{
            font-size: 1.4rem;
        }
        }
    }

    >section{
        padding-left: 4rem;

        >h2{
        font-size: 3.2rem
        }

        >div{
            .dishMobile{
                display: none;
            }

            .dishDesktop{
                display: flex;
            }
        }
    }
}

@media (min-width: 1024px){

    >.containerMacarrone{
        padding-right: 10%;

        height: 26rem;

        margin: 16rem 12rem 6.2rem;
        
        >img{
            position: relative;
            right: 8rem;
            bottom: 7rem;
            width: 62rem;
            height: 40rem;
        }

        >div{
        >h3{
            font-size: 4rem;
        }

        >p{
            font-size: 1.6rem;
        }
    }
    }
}
`