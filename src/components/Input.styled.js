import styled from "styled-components";

export const Input = styled.input`
  font-size: 0.8rem;
  color: var(--black);
  background-color: inherit;
  border: none;
  border-block-end: 1px solid;
  border-radius: 0;
  padding-inline: 0.25rem;
  inline-size: 100%;
  block-size: 2.5rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 0.8rem;
  }
`;
