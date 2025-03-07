import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ContactForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: rgb(245, 245, 245);
  border-radius: 1rem;
  padding: 1rem;
`;

export const LabelAndInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const ContactInput = styled.input`
  padding: 0.3rem 0.3rem 0.3rem 1rem;
  max-width: 100%;
  border: solid 1px black;
  border-radius: 1rem;
  transition: all 0.3s ease-out;

  &:focus {
    outline: none;
    border: solid 1px #3c91e6;
  }
`;

export const ContactMessage = styled(ContactInput)`
  padding: 1rem 1rem 1rem 1rem;
  height: 10rem;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
