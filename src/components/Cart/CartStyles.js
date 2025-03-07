import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  color: #000;
`;

export const CartIcon = styled(FontAwesomeIcon)`
  color: black;
  transition: all 0.3s ease-out;
  &:hover {
    color: #111111;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #ff5733;
  color: white;
  border-radius: 50%;
  padding: 0.1rem 0.4rem;
  font-size: 0.8rem;
  transition: all 0.3s ease-out;
  &:hover {
  }
`;
