import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 1rem;
  width: 20rem;
  max-width: 100%;
  border: solid 1px gray;
  border-radius: 5rem;

  &:focus {
    outline: none;
    border: solid 1px #3c91e6;
  }
`;
