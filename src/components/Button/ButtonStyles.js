import styled from "styled-components";

export const BaseButton = styled.button`
  font-family: "Quicksand", sans-serif;
  text-transform: lowercase;
  font-weight: 600;
  color: #3c91e6;
  border-radius: 10px;
  padding: 1rem;
  border: solid 1px #3c91e6;
  background-color: white;

  &:hover {
    border: solid 1px invisible;
    background-color: #3c91e6;
    color: white;
  }
`;

export const PrimaryButton = styled(BaseButton)``;
