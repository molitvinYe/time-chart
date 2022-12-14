import styled from "styled-components";

export const List = styled.ul`
  width: 80%;

  box-sizing: border-box;
  padding: 20px;
  list-style: none;

  border: 1px solid ${props => props.theme.palette.primary.main};
  background-color: ${props => props.theme.bg.primary};

  @media (max-width: 800px) {
    width: 95%;
  }
`

export const Button = styled.button`
  cursor: pointer;
  color: ${props => props.theme.palette.primary.main};
  border: 1px solid ${props => props.theme.palette.primary.main};
  background-color: ${props => props.theme.bg.primary};
  padding: 10px 20px;
`