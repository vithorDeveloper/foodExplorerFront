import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    padding: 1.2rem;

    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.colors.tomato};
    color: ${({ theme }) => theme.colors.brown};

    font-weight: bold;
`