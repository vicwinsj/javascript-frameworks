import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
`;

export const ProductPrice = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DiscountPercentage = styled.span`
  align-self: start;
  padding: 0.3rem;
  color: red;
  border: solid 1px red;
  border-radius: 0.1rem;
  background-color: white;
`;

export const ImageContainer = styled.div`
  flex: 2;
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
  height: 40rem;
`;

export const ProductImage = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductReviews = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReviewList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Review = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #ffefe5;
  padding: 1rem;
  border-radius: 10px;
`;

export const ReviewIntro = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
