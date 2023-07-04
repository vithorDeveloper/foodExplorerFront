import styled from "styled-components";

export const Container = styled.div`
        background-color: ${({ theme }) => theme.colors.white};

        padding: 0 2rem 2rem 2rem;

        a{
            display: flex;
            padding-bottom: 2rem;

            text-decoration: none;
            color: ${({ theme }) => theme.colors.brown};
        }

        .linha{
            border-top: 0.1rem solid ${({ theme }) => theme.colors.brown};
            opacity: 0.5;

            margin:  0 .8rem;
            padding-bottom: 2rem;
            }

@media screen and (min-width: 768px) {
    display: none;
}
`