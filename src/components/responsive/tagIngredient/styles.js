import styled from "styled-components";

export const Container = styled.span`
  padding: .5rem 1rem;
  margin-right: 1rem;

  border-radius: .5rem;
  background-color: ${({theme}) => theme.colors.white};
  
  color: ${({theme}) => theme.colors.brown};
` 