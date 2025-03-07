import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5rem;
`;

export const ImageContainer = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 100%;
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
  background-color: rgb(245, 245, 245);
  padding: 1rem;
  border-radius: 10px;
`;

export const ReviewIntro = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
