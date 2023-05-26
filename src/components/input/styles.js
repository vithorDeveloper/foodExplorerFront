import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;

    gap: 1rem;

    border-radius: 0.5rem;

    padding: 1.2rem;

    background-color: #9D978E;
    color: ${({ theme }) => theme.colors.brown};

    >input{
        background: transparent;
        width: 100%;

        ::placeholder{
            color: ${({ theme }) => theme.colors.brown};
        }
    }
`