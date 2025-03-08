import styled from "styled-components";

export const BaseButton = styled.button`
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease-out;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  color: #3c91e6;
  border: solid 1px #3c91e6;
  &:hover {
    border: solid 1px invisible;
    background-color: #3c91e6;
    color: white;
  }
`;

export const AlternateButton = styled(BaseButton)`
  background-color: #000000;
  color: #ffffff;
  border: solid 1px transparent;
  &:hover {
    background-color: #333333;
    border: solid 1px #000000;
  }
`;
