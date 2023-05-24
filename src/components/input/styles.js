import styled from "styled-components";

export const Container = styled.input`
    width: 100%;

    border-radius: 0.5rem;

    padding: 1.2rem;
    margin: 0.8rem 0 3.2rem;

    background-color: #9D978E;

    ::placeholder{
    color: ${({ theme }) => theme.colors.brown};
}
`