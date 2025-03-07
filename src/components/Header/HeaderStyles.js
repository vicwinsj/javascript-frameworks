import styled from "styled-components";

export const HeaderContainer = styled.header`
  font-family: "Quicksand", sans-serif;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  color: #3c91e6;
  border-bottom: solid 1px rgb(150, 150, 150);
`;

export const Logo = styled.a`
  font-weight: 600;
  padding: 1rem;
  border-radius: 10px;
  color: white;
  text-transform: lowercase;
  background-color: #3c91e6;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #367ec6;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled.a`
  padding: 0.5rem;
  color: #3c91e6;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #f1f1f1;
    border-radius: 10px;
  }
`;
