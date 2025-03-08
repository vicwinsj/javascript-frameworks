import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
`;

export const ProductGrid = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
    grid-template-columns: 1fr;

 @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

      @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
`;

export const ProductCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #ffefe5;
  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 0px 5px 5px #c0c0c0;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductCardBottom = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImage = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
`;
