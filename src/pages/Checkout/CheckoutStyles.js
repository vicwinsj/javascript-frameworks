import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  flex: 2;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  border-radius: 1rem;
`;

export const ItemImageContainer = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
`;

export const ItemImage = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
`;

export const ItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const CartTotal = styled.div`
  width: 100%;
  height: 20rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  background-color: rgb(245, 245, 245);
  flex: 1;
`;
