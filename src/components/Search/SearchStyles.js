import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 1rem;
  width: 20rem;
  max-width: 100%;
  border: solid 1px black;
  border-radius: 1rem;
  transition: all 0.3s ease-out;

  &:hover {
    border: solid 1px #3c91e6;
  }

  &:focus {
    outline: none;
    border: solid 1px #3c91e6;
  }
`;
