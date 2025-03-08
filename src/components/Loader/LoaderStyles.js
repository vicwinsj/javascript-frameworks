import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

export const SkeletonCard = styled.div`
  width: 100%;
  height: 20rem;
  background: rgb(216, 216, 216);
  border-radius: 1rem;
  animation: ${blink} 1.5s infinite ease-in-out;
`;

export const SkeletonGrid = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: 1fr;

 @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

      @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
`;
