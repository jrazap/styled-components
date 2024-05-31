import styled from "styled-components";

export const Button = styled.button`
  block-size: 2.5rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  outline: none;
  box-shadow: none;
  border: 1px solid;
  inline-size: 15rem;

  &:hover {
    background-color: inherit;
    color: ${(props) => props.bgColor};
    transition: all ease-in-out 0.2s;
  }
`;
